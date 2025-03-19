const express = require('express')
const mongoose =require('mongoose')
const dotEnv =require('dotenv')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const Todomodel = require('./models/Todomodel')
const TodoRoutes = require('./routes/todoRoutes')

const app = express()
const PORT =3000
dotEnv.config()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI2)
.then(() => {
    console.log('mongodb connected succesfully')
}).catch((err) => {
    console.log(`${err}`)
})

app.use('/user' , userRoutes)
app.use('/todo' , TodoRoutes)
app.listen(PORT ,() => {
    console.log('server started succesfully')

})