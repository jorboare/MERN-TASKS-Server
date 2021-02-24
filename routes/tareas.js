const express = require('express');
const router = express.Router()
const tareaController = require('../controllers/tareaController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

//Crear una tarea
//api/tareas

router.post('/',
    auth,
    [
        check('nombre').not().isEmpty().withMessage('El Nombre es obligatorio'),
        check('proyecto').not().isEmpty().withMessage('El Proyecto es obligatorio')
    ],
    tareaController.crearTarea
)

// Obtener las tareas pro proyecto

router.get('/',
    auth,
    tareaController.obtenerTareas)

module.exports = router