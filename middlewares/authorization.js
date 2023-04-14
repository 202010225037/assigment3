const { Photo } = require("../models")

function authorization(req, res, next) {
    const photoId = req.params.id
    const authenticatedUser = res.locals.user
    console.log(authenticatedUser);
    Photo.findOne({
        where: {
            id: photoId
        }
    })

    .then(photo => {
        if(!photo) {
            return res.status(404).json({
            name: "Data not found",
            devMessage: `Photo with id "${photoId}" not found`
        })

        }
        console.log(photo);
        if (photo.UserId === authenticatedUser.id) {
            return next()
        } else {
            return res.status(403).json({
                name: "Authorization error",
                devMessage: `user with id "${authenticatedUser}" does not have permision to access Photo with id "${photoId}"`
            })
        }
    })
    .catch(error => {
        return res.status(500).json(error)
    })
}

module.exports = authorization