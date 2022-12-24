const { Techno } = require("../../db/sequelize");

module.exports = (app) =>{
    app.delete('/api/folio/delete-techno/:id', (req, res) =>{
        const id = req.params.id;
       return Techno.findByPk(id).then(techno =>{

           const deletedTechno = techno;
           
           if(techno === null){
               const message = `la techno que tu souhaites supprimer n'existe pas`;
              return res.status(404).json(message)
            }
            
            Techno.destroy({where:{id: id}}).then(_ =>{

                const message = `${deletedTechno.nom} a été supprimée`
                res.json({message, data: techno})
            })
        })
        .catch(error =>{
            const message =`ton server a un souci réessaie dans un instant`;
            res.status(500).json({message, data: error})

        })
    })
}