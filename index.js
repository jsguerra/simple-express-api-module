import express from 'express'
import usersRoutes from './routes/users.js'

// Server Variables
const app = express()
const PORT = 5000

// Enable body parsing json
app.use(express.json())

app.use('/users', usersRoutes)

// Initiate Routing
app.get('/', (req, res) => res.send('Hello from Homepage'))

// Listen on a specific port
app.listen(PORT, () => console.log(`Server running on: http://localhhost:${PORT}`))