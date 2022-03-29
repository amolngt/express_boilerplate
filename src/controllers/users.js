const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const Users = require('../services/users');

const createUser = catchAsync(async (req, res) => {
  const opts = {
    id:Date.parse(new Date()),
    name: req.body.name,
    class: req.body.class
  }

  const userService= new Users();
  const user = userService.createUser(opts)
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const userService= new Users();
  const result= userService.getUsers();
  res.status(httpStatus.OK).send(result);
});

const getUser = catchAsync(async (req, res) => {
  const userService= new Users();
  const user= userService.getUser({id: req.params.id})
  res.status(httpStatus.OK).send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const userService= new Users();
  const user= userService.updateUser({id: req.body.id, name:req.body.name,class: req.body.class})
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  const userService= new Users();
  const result= userService.deleteUser({id: req.body.id})
  res.status(httpStatus.OK).send(result);
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};