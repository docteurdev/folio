const { Techno } = require("../../db/sequelize")


module.exports= (app) =>{
    app.get('/api/folio/getall-techno',(req, res) =>{
        Techno.findAll()
        .then(technos =>{
            
            const message ='tes technos ont été récupérés';
            res.json({message, data: technos })
        })
        .catch(error =>{
            res.status(505).send("problème de connexion")
        })
    })
}