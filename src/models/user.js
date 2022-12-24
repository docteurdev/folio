module.exports = (sequelize, DataType) =>{
    
   return sequelize.define('User',{

        id:{
         type: DataType.INTEGER,
         primaryKey: true,
         autoIncrement: true,
        },

        username:{
            type: DataType.STRING,
            unique:{msg: 'user name utlisé'}
        },
        password:{
            type: DataType.STRING,
        }
    })
}