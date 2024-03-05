const multer = require("multer")
const path = require("path")
const storege = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storege })

module.exports = upload;