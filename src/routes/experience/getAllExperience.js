const { Experience } = require("../../db/sequelize")

module.exports = (app) =>{
    app.get('/api/folio/get-experience', (req, res) =>{
       
        Experience.findAll()
        .then(experiences =>{
            const message = `toutes tes expériences ont été bien récupérer`;
            res.json({message, data: experiences})
        })
        .catch(error =>{
            const message = `tes expériences n'ont pu être récupérés, réessaie!`;
            res.status(500).json({message, data: error}) 
        })
    })
}