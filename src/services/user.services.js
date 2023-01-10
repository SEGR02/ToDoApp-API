const Users = require('../models/users.model');

class UserServices {
  static async getAll(){
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw new error;
      // console.log(error);
      // res.status(400).json(error.message);
    }
  }
  static async getById(id){
    try {
      const result = Users.findByPk(id);
      return result;
    } catch (error) {
      throw new error;
    }
  }
  static async create(user){
    try {
      const result = Users.create(user)
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;