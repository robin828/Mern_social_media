const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose') 
const dotenv = require('dotenv')
dotenv.config()

const postRoutes = require('./routes/post-routes')
const authRoutes = require('./routes/auth-routes')

app.use(bodyParser.json())

app.use('/api/post', postRoutes)
app.use('/api/auth', authRoutes)



mongoose.connect(process.env.MONGO_URI)
.then(app.listen(process.env.PORT || 5000))
.catch(
  err => console.log(err)
)