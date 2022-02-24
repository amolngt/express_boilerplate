const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const localStorage =require('localStorage')
// const { userService } = require('../services');
let users=[]
const createUser = catchAsync(async (req, res) => {
  const user = {
    id:Date.parse(new Date()),
    name: req.body.name,
    class: req.body.class
  }
  if(localStorage.getItem('users')!= null){
    users =JSON.parse(localStorage.getItem('users'))
  }
  users.push(user)
  localStorage.setItem('users',JSON.stringify(users))
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  if(localStorage.getItem('users')!= null){
    const result =JSON.parse(localStorage.getItem('users'))
    res.send(result);
  }else{
    throw new ApiError(httpStatus.NOT_FOUND, 'Users not found');
  }
});

const getUser = catchAsync(async (req, res) => {
  const id= parseInt(req.params.id);
  if(!id){
    throw new ApiError(httpStatus.NOT_FOUND, 'Plz enter id');
  }
  if(localStorage.getItem('users')!= null){
    users =JSON.parse(localStorage.getItem('users'))
  }else{
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
 
  const user = users.filter(u => u.id === id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const id= parseInt(req.body.id);
  if(!id){
    throw new ApiError(httpStatus.NOT_FOUND, 'Plz enter id');
  }
  if(localStorage.getItem('users')!= null){
    users =JSON.parse(localStorage.getItem('users'))
    users.map(u=> {
      if(id === u.id){
        u.name= req.body.name;
        u.class= req.body.class;
      }
    });
    localStorage.setItem('users',JSON.stringify(users))
    res.status(httpStatus.OK).send({message:"Updated"});
  }else{
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  const id= parseInt(req.body.id);
  if(!id){
    throw new ApiError(httpStatus.NOT_FOUND, 'Plz enter id');
  }
  if(localStorage.getItem('users')!= null){
    let users =JSON.parse(localStorage.getItem('users'))
    const index= users.map((u)=> u.id).indexOf(id);
    if (index > -1) {
      users.splice(index, 1);
    }
    localStorage.setItem('users',JSON.stringify(users))
    res.status(httpStatus.OK).send({message:"Deleted"});
  }else{
    throw new ApiError(httpStatus.NOT_FOUND, 'Users not found');
  }
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};