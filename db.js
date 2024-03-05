const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://lucasclrm:${process.env.DB_PASS}@api-finace.q63cg1s.mongodb.net/?retryWrites=true&w=majority&appName=api-finace`)
    console.log("Conectado com sucesso!")
}

main().catch((err) => console.log(err))

module.exports = main;