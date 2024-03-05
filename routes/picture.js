const express = require("express");
const router = express.Router();
const { upload, jsonParser } = require("../config/multer");

const PictureController = require("../controllers/pictureController");

router.post("/", jsonParser, upload.single("file"), PictureController.create);

module.exports = router;
