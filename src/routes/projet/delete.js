const { Projet } = require("../../db/sequelize");

module.exports = (app) =>{
    app.delete('/api/folio/delete-project/:id', (req, res) =>{
      
        let id = req.params.id;
       return Projet.findByPk(id).then(projet =>{
            const deleteProject = projet;
            Projet.destroy({where: {id: id}}).then(_ =>{
                const message= `le projet ${deleteProject.titre} a été supprimé`;
                res.json({message, data: deleteProject})
            })
            .catch(error =>{
                res.status(500).json({message: error.message, data: error})
            })
        })
    })
}