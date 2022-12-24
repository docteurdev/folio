const multer  = require('multer');
const path = require('path')
const { ValidationError } = require("sequelize");
const { Techno } = require("../../db/sequelize");



module.exports = (app) =>{
    app.post('/api/folio/techno', (req, res) =>{
        
            console.log("created");
         


    //    return Techno.create(req.body).then(techno =>{
    //         const message =`t'as rajouté la techno ${techno.langage} `;
    //         res.json({message, data: techno})
    //     })
    //     .catch(error =>{
    //         if(error instanceof ValidationError){
    //             res.status(404).json({message: error.message, data: error})
    //         }else{
    //             const message =`ton server a un souci réessaie dans un instant`;
    //             res.status(500).json(message)
    //         }
    //     })
    })
}