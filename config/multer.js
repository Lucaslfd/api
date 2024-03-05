const multer = require("multer");
const bodyParser = require("body-parser");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

const jsonParser = bodyParser.json();

module.exports = { upload, jsonParser };
