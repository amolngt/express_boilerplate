var Sequelize = require("sequelize");
module.exports=function(sequelize, DataTypes){ 
    const users = sequelize.define("users", {
      id: {
        type: DataTypes.INTEGER,    
        autoIncrement: !0,       
        primaryKey: !0
      },
      name: {
        type: Sequelize.STRING
      },
      email_id: {
        type: Sequelize.STRING
      },
      phone_number:{
        type: Sequelize.STRING,
      },
      password:{
        type: Sequelize.STRING
      },
      created_at:{
        type: Sequelize.DATE
      },
      updated_at:{
        type: Sequelize.DATE
      },
      is_admin:{
        type: Sequelize.TINYINT(1),
        defaultValue:0
      },
      is_active: {
        type: Sequelize.TINYINT(1),
        defaultValue:1
        },
    }, {
      freezeTableName: true,
      classMethods:{},
      underscored: true
    });
    users.func=(id)=>{
        return new Promise((resolve, reject)=>{
            var sql = '';
            sequelize.query(sql, {
              replacements: {id:id},
              raw: true
            }).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            });
        })
    };
    return users;
  };
  
