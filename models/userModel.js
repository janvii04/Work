module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
      "user",
      {
        ...require("./cors")(Sequelize, DataTypes),
        
        firstName: {
          type: DataTypes.STRING(255),
          allowNull: true,
          defaultValue:null
        },
        lastName: {
            type: DataTypes.STRING(255),
            allowNull: true,
          defaultValue:null
          },
          email: {
            type: DataTypes.STRING(255),
            allowNull: true,
          defaultValue:null
          },
          password: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue:null
          },
          phoneNumber: {
            type: DataTypes.STRING(255),
            allowNull: false,
          },
          deviceToken:{
            type:DataTypes.STRING(255),
            allowNull:true
          },
          deviceType:{
            type:DataTypes.STRING(255),
            allowNull:true
          }
      },
  
      {
        tableName: "user",
      }
    );
  };
  