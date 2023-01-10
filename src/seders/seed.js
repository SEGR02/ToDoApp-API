const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todos-categories');

const users = [
  {
  username: "sebas",
  email: "sebas@gmail.com",
  password: "1234",
  },
  {
    username: "jhorman",
    email: "jhorman@gmail.com",
    password: "1234",
  },
  {
    username: "ian",
    email: "ian@gmail.com",
    password: "1234",
  },
];

const todos = [
  {
    title: "tarea 1",
    description: "lavar los platos",
    userId: 1,
  },
  {
    title: "tarea 2",
    description: "lavar los trastes",
    userId: 1,
  },
  {
    title: "tarea imposible",
    description: "",
    userId: 2,
  },
  {
    title: "dormir",
    description: "porque node no me deja",
    userId: 3,
  },
];

// const categories = [
//   {
//     name: 'Cocina'
//   },
//   {
//     name: "Aseo"
//   },
//   {
//     name: 'Entretenimiento'
//   },
//   {
//     name: 'Mascostas'
//   },
// ];

// const todosCategories = [
//   {
//     categoryId: 1,
//     todoId: 1,
//   },
//   {
//     categoryId: 2,
//     todoId: 2,
//   },
//   {
//     categoryId: 3,
//     todoId: 3,
//   },
//   {
//     categoryId: 4,
//     todoId: 4,
//   }
// ];

db.sync({force: true,})
  .then(()=>{
  console.log('exito');
  //create
  //findOne, findAll, findByPk
  //update
  //destroy
  users.forEach((users)=> Users.create(users));
  
  setTimeout(() => {
    todos.forEach((tasks)=>Todos.create(tasks))
  }, 100);
  // setTimeout(() => {
  //   categories.forEach((category)=>Categories.create(category))
  // }, 200);
  // setTimeout(() => {
  //   todosCategories.forEach((todoCat)=>TodosCategories.create(todoCat))
  // }, 300);
})  
  .catch((error)=>console.log(error));