const user = require('./UserModel')
const request = require('request'); 
const dotenv = require('dotenv')
dotenv.config()



const getAllUsers = async (req, res) => {
    try {
        const result = await user.find();
        console.log(result);
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
    }


}
const addUser = async (req, res) => {
    
    const newUserDetails = new user(req.body);
    try {
        const newUser = await newUserDetails.save();
        console.log(newUser);
        res.json({user:newUser});
    }
    catch (err) {
        console.log(err);
    }



}

// const addAllWorker = async (req, res) => {

//     try {
//         // const newWorker = new Workers(worker)
//         await Workers.insertMany(allWorkers);
//     }
//     catch (err) {
//         console.log(err);
//     }



// }
const getUserByID = (req, res) => {
    user.findById(req.params.id).then(user => {
        res.json({ user })
    }).catch(err => {
        console.log(err)
    })
}


module.exports = { getAllUsers, addUser, getUserByID }

