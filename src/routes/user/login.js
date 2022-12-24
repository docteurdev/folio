const { User } = require("../../db/sequelize")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = require('../../auth/private_key');


module.exports = (app) =>{
    app.post('/api/folio/login', (req, res) =>{

        User.findOne({where:{username: req.body.username}})
            .then(user =>{

                if(!user){
                    const message =`l'utilisateur demandé n'existe pas`
                    return res.status(404).json(message)
                }

                bcrypt.compare(req.body.password, user.password).then(isPasswordValid =>{
                    if(!isPasswordValid){
                        const message =`le mot de passe est incorrect.`;
                        return res.status(401).json({message})
                    }

                    // jwt
                    const token = jwt.sign(
                        {userId: user.id},
                        privateKey,
                        {expiresIn: '24h'}
                    )

                    const message=`l'utilisateur a été connecté avec succès`;
                    return res.json({message, data: user, token})
                })

            })
            .catch(error =>{
                const message=`l'utilisateur n'a pas été connecté. reéssayez dans quelquels instant`;
                return res.json({message, data: error})
    
            })
    })
}