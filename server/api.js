const router = require('express').Router();
const user = require('./UserController');


router.get('/users', user.getAllUsers);
router.get('/user/:id', user.getUserByID); 
router.post('/addUser', user.addUser);  

router.post('/addUser', user.addUser);  

module.exports=router;