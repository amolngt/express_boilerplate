const ApiError = require('../utils/ApiError');
const localStorage = require('localStorage')
const httpStatus = require('http-status');

class Users{

    constructor(){}

    createUser(opts){
        let users=[];
        const user = {
            id:Date.parse(new Date()),
            name: opts.name,
            class: opts.class
        }
        if(localStorage.getItem('users')!= null){
            users =JSON.parse(localStorage.getItem('users'))
        }
        users.push(user)
        localStorage.setItem('users',JSON.stringify(users))
        return user;
    }
      
    getUsers(){
        if(localStorage.getItem('users')!= null){
            const result =JSON.parse(localStorage.getItem('users'));
            if (!result || result.length<=0) {
                throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
            }
           return result
        }else{
            throw new ApiError(httpStatus.NOT_FOUND, 'Users not found');
        }
    }
      
    getUser(opts){
        let users=[];
        const id= parseInt(opts.id);
        if(!id){
          throw new ApiError(httpStatus.NOT_FOUND, 'Please enter id');
        }
        if(localStorage.getItem('users')!= null){
          users =JSON.parse(localStorage.getItem('users'))
        }else{
          throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
        }
       
        const user = users.filter(u => u.id === id);
        if (!user || user.length<=0) {
          throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
        }
        return user;
    }
      
    updateUser(opts){
        const id= parseInt(opts.id);
        let f= false;
        if(!id){
          throw new ApiError(httpStatus.NOT_FOUND, 'Please enter id');
        }
        if(localStorage.getItem('users')!= null){
        let users =JSON.parse(localStorage.getItem('users'))
          users.map(u=> {
            if(id === u.id){
              f= true;
              u.name= opts.name;
              u.class= opts.class;
            }
          });
          if(f=== false){
            throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
          }
          localStorage.setItem('users',JSON.stringify(users))
          return {message:"Updated"}
        }else{
          throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
        }
    }
      
    deleteUser (opts){
        const id= parseInt(opts.id);
        let f= false;
        if(!id){
          throw new ApiError(httpStatus.NOT_FOUND, 'Please enter id');
        }
        if(localStorage.getItem('users')!= null){
          let users =JSON.parse(localStorage.getItem('users'))
          const index= users.map((u)=> u.id).indexOf(id);
          if (index > -1) {
            f= true;
            users.splice(index, 1);
          }
          if(f=== false){
            throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
          }
          localStorage.setItem('users',JSON.stringify(users))
          return {message:"Deleted"};
        }else{
          throw new ApiError(httpStatus.NOT_FOUND, 'Users not found');
        }
    }
}

module.exports = Users;