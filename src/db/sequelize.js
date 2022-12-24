const { Sequelize, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt');

const ExperienceModel = require('../models/experience');
const ProjetModel = require('../models/projet')
 const TechnoModel = require('../models/Comptence')
const UserModel = require('../models/user')



const sequelize = new Sequelize('folio', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false
  })

// data base tables

const Experience = ExperienceModel(sequelize, DataTypes);
const Projet = ProjetModel(sequelize, DataTypes);
 const Techno = TechnoModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

const initDb = () =>{
     return sequelize.sync().then(_ =>{
       
      // bcrypt.hash('12345', 10)
      //       .then(hash =>{

      //         User.create({
      //             username:"devolt",
      //             password: hash
      //           })
      //       })
        // Experience.create({
        //     titre: " ",
        //     description: " ",
        //     techno: " ",
        //     date_debut: new Date(),
        //     date_fin: new Date(),
        // })
        
        // Projet.create({
        //     titre: " ",
        //     description:" ",
        //     techno: " "
        // })

        // Techno.create({
        //   langage: " ",
        //   framework: " ",
        //   logo: " "
        // })
     })
}

initDb()

  sequelize.authenticate()
           .then(_ => console.log("connexion établie"))
           .catch(error => console.log(error))

 module.exports ={Experience, initDb, Projet, 
   Techno,
   User}