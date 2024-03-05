const express = require("express");
const app = express();
const bodyParser = require('body-parser')

require("dotenv").config();
require("./db")

const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture")
app.use("/pictures", pictureRouter)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})