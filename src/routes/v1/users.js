const express = require('express');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/users');

const router = express.Router();

router
  .get('/getUser/:id',[],userController.getUser)
  .post('/createUser',[],userController.createUser)
  .get('/getUsers', [], userController.getUsers)
  .patch('/manageUsers', [], userController.updateUser)
  .delete('/manageUsers', [], userController.deleteUser);

module.exports = router;