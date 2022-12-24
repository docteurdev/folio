module.exports = (sequelize, DataTypes) =>{
  return  sequelize.define('Competence',{
        id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       langage:{
        type: DataTypes.STRING,
        allowNull: false
       },
       framework:{
        type: DataTypes.STRING,
        allowNull: false
       },
       logo:{
        type: '',
        allowNull: false
       }
    },
    {
        timestamps: false,
        created_at: 'created',
        updateda_t: false
      })
}