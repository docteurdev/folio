const { Experience } = require("../../db/sequelize")

module.exports = (app) =>{
    app.get('/api/folio/get-experience/:id', (req, res) =>{
        const id = req.params.id;
        Experience.findByPk(id)
        .then(experience =>{
            const message = `toutes tes expériences ont été bien récupérer`;
            res.json({message, data: experience})
        })
        .catch(error =>{
            const message = `tes expériences n'ont pu être récupérés, réessaie!`;
            res.status(500).json({message, data: error}) 
        })
    })
}