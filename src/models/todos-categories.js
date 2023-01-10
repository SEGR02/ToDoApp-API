const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const Categories = require('./categories.models');
const Todos = require('./todos.models');
//name of table, atributos de las tablas, configuracion
const TodosCategories = db.define('todos_categories',{
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    references: {
     model: Categories,
     key: 'id',   
    }
  },
  todoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'todo_id',
    references: {
      model: Todos,
      key: 'id',   
     }
  },
},{
  timestamps: false,
})

module.exports = TodosCategories;