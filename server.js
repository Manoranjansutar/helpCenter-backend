import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { connectDB } from './config/db.js'
import helpCenterRoutes from './routes/helpCenterRoutes.js'


// app config
const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors())

//database
connectDB();

//api endpoints
app.use('/api/helpcenter', helpCenterRoutes);


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`Server Started on ${port}`)
})