module.exports = (sequelize, DataTypes) =>{
   return sequelize.define('Projet',{
     id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     titre:{
        type:DataTypes.STRING,
        allowNull: false
     },
     description:{
        type:DataTypes.STRING,
        allowNull: false
     },
     techno:{
        type:DataTypes.STRING,
        allowNull: false
     }
        
    }, {
        timestamps: false,
        created_at: 'created',
        updateda_t: false
      })
}