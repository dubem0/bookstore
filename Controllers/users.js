const userModel =  require('../Models/users')

const getUsers = (req, res) => {
    userModel.find()
    .then(books => {
        res.json(books)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}
const getUserById = (req, res) => {
    const id = req.params.id

    userModel.findById(id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => {
        console.log(err)
        res.status(404).send(err)
    })
}
const postUser = (req, res) => {
    const user = req.body

    user.lastUpdateAt= new Date()

    userModel.create(user)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err =>{
        console.log(err)
        res.status(500).send(err)
    })
}
const updateUserById = (req, res) =>{
    const id= req.params.id

    const user= req.body

    user.lastUpdateAt= new Date()

    userModel.findByIdAndUpdate(id, user, {new: true})

    .then(newUser =>{
         res.status(200).send(newUser)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}
const deleteUserById = ( req, res) =>{
    const id = req.params.id
    userModel.findByIdAndRemove(id)
        .then(user =>{
            res.status(200).send("User deleted successfully")
        })
        .catch(err =>{
            console.log(err)
            res.status(500).send(err)
        })

}

module.exports = {
    getUsers,updateUserById, getUserById, postUser, deleteUserById
}