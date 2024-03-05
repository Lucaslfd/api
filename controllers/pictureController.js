const Picture = require("../models/Picture");

exports.create = async (req, res) => {
    try {
        console.log("Corpo da solicitação:", req.body); 
        console.log("Arquivo enviado:", req.file); 

        const { name } = req.body; 
        const file = req.file;
        
        const picture = new Picture({
            name,
            src: file.path,
        });

        console.log("Dados da imagem:", picture); 

        await picture.save(); 

        res.json({ picture, msg: "Imagem salva com sucesso!" });
    } catch (error) {
        console.error("Erro ao salvar imagem:", error); 
        res.status(500).json({ message: "Erro ao salvar imagem." + error });
    }
}
