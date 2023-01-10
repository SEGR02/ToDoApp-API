const db = require('../utils/database');
const { DataTypes } = require('sequelize');
// primero nombre, tablas, configuraciones
const Categories = db.define('categories',{
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
},
{
  timestamps: false,
});

module.exports = Categories;