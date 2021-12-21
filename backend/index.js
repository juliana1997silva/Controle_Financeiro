const express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoutes')

const cors = require('cors')
const app = express()
const porta = 4000

app.use(express.json());

app.use(express.urlencoded({ extended: false }), cors());

//app.use(express.bodyParser());

userRoute(app)
app.use(bodyParser.json()); 

app.get('/',(req, res)=> res.send('Ola Mundo Juliana!'))

app.listen(porta, () => console.log('api rodando na porta 4000'))