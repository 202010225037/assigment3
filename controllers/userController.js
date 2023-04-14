const { User } = require("../models/")
const { comparePassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")

class UserController {
    static register(req, res) {
        const { email, password, username } = req.body

        User.create({
            email,
            password,
            username
        })

        .then(result => {
            let response = {
                id: result.id,
                username: result.username,
                email: result.email
            }

            res.status(201).json(response)
            console.log(result);
        })
        .catch(error => {
            res.status(500).json(error)
        })
    }
    static login(req,res) {
        const { email, password } = req.body
        
        User.findOne({
            where: {
                email
            }
        })
        .then(user => {
            if(!user) {
                throw {
                    name: "User Login Error",
                    devMessage: `User dengan email "${email}" tidak ada`
                }
            }
            const isCorrect = comparePassword(password, user.password)
            if(!isCorrect) {
                throw {
                    name: "User Login Error",
                    devMessage: `user's password dengan email "${email}" does match`
                }
            }
            let payload = {
                id: user.id,
                email: user.email
            }

            const token = generateToken(payload)

            return res.status(200).json({ token })
        })
        .catch(error => {
            return res.status(401).json(error)
        })
    }
    static createPhoto(req, res) {
        const { title, caption, image_url } = req.body
        const user = res.locals.user
        Photo.create({
            title,
            caption,
            image_url,
            UserId: user.id
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(400).json(error)
        })
    }
}

module.exports = UserController