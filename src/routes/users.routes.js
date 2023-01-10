const {Router} = require('express');
const { getAllUsers, getUserById, createUsers, deleteUser, updateUser } = require('../controllers/user.controllers');
const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUsers);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

// router.post('/users', async (req, res) => {
//   res.json({message: 'creando un usuario'});
// })

// router.put('/users', async (req, res) => {
//   res.json({message: 'actualizadno un usuario'});
// })

// router.delete('/users', async (req, res) => {
//   res.json({message: 'eliminando un usuario'});
// })

module.exports = router;