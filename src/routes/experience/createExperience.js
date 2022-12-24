const { ValidationError } = require("sequelize");
const { Experience } = require("../../db/sequelize")

module.exports = (app) =>{
    app.post('/api/folio/experience', (req, res) =>{
        Experience.create(req.body)
        .then(exprience =>{
            const message =`je viens d'ajouter une expérience`;
           res.json({message, data: exprience})
        })
        .catch(error =>{
            if(error instanceof ValidationError){
             const message ='tu dois entrer de bonnes informations';
             res.status(404).json({message: error.message, data: error})
            }
            
            const message=" stp réessaie dans quelques instants";
            res.status(500).json(message);

        })
    })
}