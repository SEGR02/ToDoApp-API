const UserServices = require('../services/user.services');

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
}

const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const createUsers = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    console.log(error)
    res.status(400).json(error.message);
  }
}

const updateUser = (req, res) => {
  res.json({message: 'actualizando user'});
}

const deleteUser = (req, res) => {
  res.json({message: 'eliminando usuario'});
}

module.exports = {
  getAllUsers,
  getUserById,
  createUsers,
  updateUser,
  deleteUser,
}