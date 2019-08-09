module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username:{
          type:DataTypes.STRING,
          allowNull: false,
        },
      name: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      email: {
          type:DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: {
                msg:'Email inválido'
            }
          }
        },
      password: {
        type:DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
}
