import express from 'express' 
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import PostRoute from './routes/PostRoute.js'
import UploadRoute from './routes/UploadRoute.js'

const app = express(); 

// to serve images for public
app.use(express.static('public'))
app.use('/images', express.static("images"))

dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome')
}) 

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)
app.use('/posts', PostRoute)     // socialMedia Posts
app.use('/upload', UploadRoute)  //img upload routes

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
  .then(() => app.listen(PORT, ()=> {console.log(`server running on port ${PORT}`)}))
  .catch((err) => console.log(err.message))