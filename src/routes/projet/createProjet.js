const { ValidationError } = require("sequelize")
const { Projet } = require("../../db/sequelize")

module.exports= (app) =>{
    app.post('/api/folio/projet', (req, res) =>{
      
        Projet.create(req.body).then(projet =>{

            const message = `le projet ${projet.titre} est ajouté avec succès`
            res.json({message, data: projet})
        })
        .catch(error =>{
            if(error instanceof ValidationError){
                res.status(404).json({message: error.message, data: error})
            }

            const message=" stp réessaie dans quelques instants";
            res.status(500).json(message)
        })
    })
}