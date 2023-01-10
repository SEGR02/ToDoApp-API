// importar express
const express = require('express');
//importar db
const initModels = require('./models/initModels');
const Users = require('./models/users.model');
const Todos = require('./models/todos.models');
const userRoutes = require('./routes/users.routes');
const db = require('./utils/database');
const TodosCategories = require('./models/todos-categories');
const Categories = require('./models/categories.models');
// crear una instancia de express

const app = express();

app.use(express.json());

const PORT = 3000;

//probando la conexion a db
//devuelve una promesa
db.authenticate()
.then(()=>console.log('Autenticacion exitosa'))
.catch((error)=> console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db
db.sync({alter: false}) //devuelve una promesa
.then(()=>console.log('DB sincronizada'))
.catch((error)=>console.log(error))

app.get('/', (req, res)=>{
  res.status(200).json({message: 'Bienvenido al server'})
});

app.use('/api/v1', userRoutes);

app.get('/users', async (req, res) => {
  try {
    // vamos a obtener el resultado de consultar a todos los usuarios de la db
    const result = await Users.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
  res.end();
});

app.get('/users/:id', async (req, res) =>{
  try {
    console.log(req.params);
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
  res.end();
});

// obtener un usuario por username

app.get('/user/username/:username', async (req, res)=>{
  try {
    console.log(req.params)
    const { username } = req.params;
    const result = await Users.findOne({where: { username }}); // select * from users where username = iannacus
    console.log(username);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
  res.end();
});

app.post('/users', async (req, res) =>{
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error)
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await Users.update(field, {
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error);
  }
  res.end();
});

//eliminar un usuario 

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: {id}
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error)
  }
});

app.get('/todos', async (req, res) => {
  try {
      const result = await Todos.findAll();
      res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message)
  }
});

app.get('/todos/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

app.post('/todos', async (req, res)=> {
  try {
    const newTask = req.body;
    const result = await Todos.create(newTask);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

app.put('/todos/:id', async (req, res) =>{
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await Todos.update(field, {
      where: {id},
    })
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

app.delete('/todos/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const result = await Todos.destroy({
      where: {id},
    })
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message)
  }
})

app.listen(PORT, ()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});