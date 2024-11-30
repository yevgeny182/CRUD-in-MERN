
const uri = 'mongodb+srv://yevalbano420:7PKH8zLMGQkBpxos@mern-crud-operations.r6dbl.mongodb.net/crud'
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dataModel = require('./models/datas')


const app = express()
const PORT = 3001

//middleware
app.use(cors())
app.use(express.json())

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(() => {
        console.log('Error connection to database', err)
    })

//API
app.post("/CreateData", (req, res) => {
    console.log('Incoming data:', req.body)
    dataModel.create(req.body)
    .then(datas => {
        console.log('data inserted to db:', datas)
        res.json(datas)
    })
    .catch(err => {
        console.error('error saving data', err)
        res.status(500).json(err)
    })
})

app.get("/", (req, res) =>{
    dataModel.find({})
    .then(users => 
        res.json(users)
    )
    .catch(err =>{
        console.error(err)
        res.json(err)
    })
})

//server
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})