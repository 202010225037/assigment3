const { Photo, User } = require("../models")

class PhotoController {
    static getAllPhotos(req, res) {
        Photo.findAll({
            include: User
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(404).json(error)
        })
    }
    static getOnePhotoByID(req, res) {
        let id = req.params.id
        Photo.findByPk(id)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(405).json(error)
        })

    }
    static createPhoto(req, res) {
        const { title, caption, image_url } = req.body
        //console.log(res.locals.user);
        Photo.create({
            title,
            caption,
            image_url,
            UserId: res.locals.user.id  
        })

        .then(result => {
            res.status(202).json(result)
        })
        .catch(error => {
            res.status(406).json(error)
        })
    }
    static updateOnePhotoByID(req, res) {
        let id = req.params.id

        const { title, caption, image_url } = req.body
        let data = {
            title, 
            caption, 
            image_url
        }
        
        Photo.update(
            data, 
            {
                where: {
                    id
                },
                returning: true
            }
        )
        .then(result => {
            res.status(207).json(result)
        })
        .catch(error => {
            res.status(407).json(error)
        })
    }
    static deleteOnePhotoByID(req, res) {
        let id = req.params.id

        Photo.destroy({
            where: {
                id
            }
        })
        .then(result => {
            res.status(208).json(result)
        })
        .catch(error => {
            res.status(408).json(error)
        })
    }
}

module.exports = PhotoController