const controller = requeire('../controllers/users.js');
const router = require('express').router();

//CRUD Routers /users
router.get('/', controller.getUsers); //users
router.get('/:userId', controller.getUser); // /users/:userId
router.post('/', controller.createUser); // users
router.put('/:userId', controller.updateUser); // /users/:userId
router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;