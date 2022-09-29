const express = require('express')

const tasksController = require('./controllers/tasksController')

const tasksMiddlewares = require('./middlewares/tasksMiddlewares')

const router = express.Router()

router.get('/tasks', tasksController.getAll)

router.post('/tasks', tasksMiddlewares.validarFieldStatus,tasksMiddlewares.validarFieldTitle, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddlewares.validarFieldStatus,tasksMiddlewares.validarFieldTitle, tasksController.updateTask)

module.exports = router