const Users = require('./users.model');
const Todos = require('./todos.models');
const Categories = require('./categories.models');
const TodosCategories = require('./todos-categories');

const initModels = () => {
  // Users;
  // Todos;
  // Categories;
  // TodosCategories;
  // aca se crearan las relaciones
  // hasone tiene un
  // hasmany tiene muchos
  //belongsto pertenece a 
  Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
  Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'}); 

  TodosCategories.belongsTo(Todos, {as: 'task', foreignKey: 'todo_id'});
  Todos.hasMany(TodosCategories, {as: 'category', foreignKey: 'todo_id'});

  TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
  Categories.hasMany(TodosCategories,{as: 'tasks', foreignKey: 'category_id'}); //en ambas es category id porque es la unica foranea // no confundir con la pk llave primaria
}

module.exports = initModels;