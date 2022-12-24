const { ValidationError } = require("sequelize");
const { Experience } = require("../../db/sequelize");

module.exports = (app) =>{
    app.put('/api/folio/experience/:id', (req, res) =>{
        const id = req.params.id;
       return Experience.update(req.body, {where:{id: id}})
                  .then(experience =>{
                    if(experience !== null){
                      
                        Experience.findByPk(id).then(experience =>{
                            const message = `l'experience ${experience.titre} à été modifié`;
                            res.json({message, data: experience})
                        })
                    }
                    const message = `l'experience n'existe pas dans la base de donnée`;
                    res.status(500).json({message, data: experience})
                  })
                  .catch(error =>{
                    if(error instanceof ValidationError){
                        res.status(404).json({message: error.message, data: error})
                    }

                    const message=" stp réessaie dans quelques instants";
                    res.status(500).json(message);
                })
    })
}