const express = require('express');
const bookrouter = require('./routes/books')
const authorrouter = require('./routes/authors')
const userrouter =  require ('./routes/users')
const user = require('./Models/users')
require('dotenv').config();

const db = require('./database/db');
const  authenticate = require('./middleWare');

const port = process.env.port

const app =  express();

db.connectToMongoDB();



app.use (express.static('public'));
app.use(express.json());



//display this on the homepage
app.get("/home",(req,res) =>{
   res.send("this is my homepage")
})

app.post('/login', (req,res) => {
   const {username, password} = req.body;

   user.findOne({username}, (err,user) => {
       if (err) {
           return res.status(500).json({ 
               message: "Internal server error"
           });
       }
       if(!user) {
           return res.status(401).json({ 
               message: "Username or password is incorrect"
           });
       }

       if (password === user.password) {

           const token = Buffer.from(`${username};${password}`).toString("base64");

           return res.status(200).json({
               message: "Auth successful", 
               token:token
           });

       } else {
           return res.status(401).json({
               message: "auth failed"
           })
       }
   })
});

app.use('/home', authenticate )
app.use('/books', authenticate, bookrouter)
app.use('/authors', authenticate, authorrouter)
app.use('/users', userrouter)

 app.listen(port, () => { 
    console.log(`bookStore running on http://localhost:${port}`); });