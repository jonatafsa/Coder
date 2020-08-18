import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'
import UserController from './controllers/UserController'
import CountUsers from './controllers/countUsers'
import VerifyUserName from './controllers/verifyUserName'
import VerifyEmail from './controllers/verifyEmail'


const routes = express.Router()
const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController()
const userController = new UserController()
const countUsers = new CountUsers
const verifyUserName = new VerifyUserName
const verifyEmail = new VerifyEmail

routes.get('/createuser', userController.index)
routes.post('/createuser', userController.create)

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

routes.get('/users', countUsers.index)
routes.post('/verifyusername', verifyUserName.index)
routes.post('/verifyemail', verifyEmail.index)

export default routes
