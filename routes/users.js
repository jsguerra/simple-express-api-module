// https://www.youtube.com/watch?v=l8WPWK9mS5M
// https://github.com/adrianhajdin/node_express_crud_api
import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

let users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24
  }
]

// all routes in here are starting with /users
router.get('/', (req, res) => {
  res.send(users)
})

router.post('/', (req, res) => {
  const user = req.body

  // This function creates a unique id
  // const userId = uuidv4()

  // Use the spread operater to create a new object with existing properties plus id
  // const userWithId = { ...user, id: userId }

  // Add new user with ID to array/db 
  // users.push(userWithId)

  // Refactored all lines above into this simplified version
  users.push({ ...user, id: uuidv4() })

  res.send(`User ${user.firstName} added`)
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  const foundUser = users.find((user) => user.id === id)

  res.send(foundUser)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id !== id)

  res.send('User deleted from the database')
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { firstName, lastName, age } = req.body

  const userToBeUpdated = users.find((user) => user.id === id)

  if (firstName) userToBeUpdated.firstName = firstName
  if (lastName) userToBeUpdated.lastName = lastName
  if (age) userToBeUpdated.age = age

  res.send('User updated')
})

export default router