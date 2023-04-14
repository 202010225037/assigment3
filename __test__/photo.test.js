const request = require("supertest")
const app = require("../app")
const { generateToken } = require("../helpers/jwt")
const { sequelize } = require("../models")

const createPhoto = {
    title: "create",
    caption: "ini create",
    image_url: "http//bla bla bal"
}

describe("POST /photos/create" , (done) => {
    it("201", (done) => {
        request(app)
        .post("/photos/create")
        .send(createPhoto)
        .expect(201)
        .end((err, res) => {
            if(err) {
                done(err)
            }
            expect(typeof res.body).toEqual("object")
            expect(res.body).toHaveProperty("title")
            expect(res.body).toHaveProperty("caption")
            expect(res.body).toHaveProperty("image_url")
            done()
        })
    })
})

beforeAll(async () => {
    try {
        const User = await User.create({
            username: "admin",
            email: "admin1@mail.com",
            password: "1234567"
        })

        token = await generateToken({
            id: user.id,
            email: user.email,
            username: user.username
        })
        const photo = await Photo.create({
        title: "create",
        caption: "create1",
        image_url: "http//",
        UserId: user.id,
      })
        id = photo.id
        userId = user.id
    } catch (error) {
        console.log(error)

    }
})