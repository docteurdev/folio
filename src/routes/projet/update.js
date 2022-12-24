const { ValidationError } = require("sequelize");
const { Projet } = require("../../db/sequelize");

module.exports = (app) =>{
    app.put('/api/folio/projet-update/:id', (req, res) =>{
     const id = req.params.id;
     Projet.update(req.body,{where:{id: id}})
           .then(() =>{

             Projet.findByPk(id).then(projet =>{
                if(projet === null){
                
                    const message = `'désolé! ce projet n'existe pas`;
                    res.status(404).json(message);
                }
                const message = `le projet ${projet.titre} a été modifié avec succès`;
                res.json({message, data: projet});
            })

           })
              .catch(error =>{

            if(error instanceof ValidationError){
                res.status(404).json({message: error.message, data: error});

            }

            const message = `désolé! ton server a un problème  réessaie dans quelques instants`;
            res.status(500).json(message);

           })
        
    })
}