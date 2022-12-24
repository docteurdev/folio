module.exports = (sequelize, DataTypes) =>{
   return sequelize.define('Experience',{
       id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
       },
       entrep:{
        type: DataTypes.STRING,
        allowNull: false, 
       },
       logo:{
        type: "",
        allowNull: false, 
       },

       poste:{
        type: DataTypes.STRING,
        allowNull: false, 
       },
       description:{
        type: DataTypes.STRING,
        allowNull: false 
       },
       techno:{
        type: DataTypes.STRING,
        allowNull: false 
       },
       date_debut:{
        type: DataTypes.DATE,
        allowNull: false 
       },
       date_fin:{
        type: DataTypes.DATE,
        allowNull: false 
       },
       
    }, {
        timestamps: false,
        created_at: 'created',
        updateda_t: false
      })
}