import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import trackRoutes from './routes/trackRoutes.js'
import userRoutes from './routes/userRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import colors from 'colors'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.use('/api/tracks', trackRoutes)
app.use('/api/users', userRoutes)

const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `App running on (((( ${process.env.NODE_ENV} )))) mode port ((((..... ${PORT} ....)))) `
      .yellow.underline.bold
  )
)
