const router = require("express").Router()

const PhotoController = require("../controllers/photoController") 
const UserController = require("../controllers/userController")
const  authentication  = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

router.post("/users/register", UserController.register)
router.post("/users/login", UserController.login)

router.use(authentication)

router.get("/photos", PhotoController.getAllPhotos)
router.get("/photos/:id", PhotoController.getOnePhotoByID)
router.post("/photos/create", PhotoController.createPhoto)

// router.use("/", authorization)

router.put("/photos/update/:id", authorization, PhotoController.updateOnePhotoByID)
router.delete("/photos/delete/:id", authorization, PhotoController.deleteOnePhotoByID)




module.exports = router