const { Experience } = require("../../db/sequelize")

module.exports= (app) =>{
    app.delete('/api/folio/experience/:id', (req, res) =>{

        const id = req.params.id;
       return Experience.findByPk(id).then(experience =>{
          const deletedExperience = experience;
           
          if(deletedExperience === null){

            const message = `l'experience que tu veux supprimer n'existe pas`;
            res.status(404).json(message)
          }

          Experience.destroy({where:{id: id}}).then( _ =>{

            const message = `l'experience "${deletedExperience.titre} a été supprimée "`;
            res.json({message, data: deletedExperience})
          })

        })
        .catch(error =>{
            const message = `l'experience que tu veux supprimer n'existe pas`;
            res.status(500).json({message, data: error})
 
        })
    })
}