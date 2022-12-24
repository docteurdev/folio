const { Projet } = require("../../db/sequelize")

module.exports =(app) =>{
    app.get('/api/folio/getall-projets', (req, res) =>{
        Projet.findAll().then(projets =>{
            const message = 'tous tes projets sont récupéré!';
            res.json({message, data: projets})
        })
        .catch(error =>{
            const message = 'tous tes projets sont récupéré!';
            res.status(500).json({message, data: error})
        })
    })
}