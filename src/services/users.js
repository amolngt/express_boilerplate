const Users= require('../classes/Users');
module.exports= function () {
    return {
        createUser: (opts) => new Users().createUser(opts),
        getUsers: () => new Users().getUsers(),
        getUser: (opts) => new Users().getUser(opts),
        updateUser: (opts) => new Users().updateUser(opts),
        deleteUser: (opts) => new Users().deleteUser(opts)
    }
}