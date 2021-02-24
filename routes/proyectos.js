const express = require('express');
const router = express.Router()
const proyectoController = require('../controllers/proyectoController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')
//Crea proyectos
//api/proyectos
router.post('/',
    auth,
    [
        check('nombre').not().isEmpty().withMessage('El nombre del proyecto es obligatorio')
    ],
    proyectoController.crearProyecto
)

//Obtener todos los proyectos
router.get('/',
    auth,
    proyectoController.obtenerProyectos
)
//Actualizar proyecto via ID
router.put('/:id',
    auth,
    [
        check('nombre').not().isEmpty().withMessage('El nombre del proyecto es obligatorio')
    ],
    proyectoController.actualizarProyecto
)

//Eliminar proyecto via ID
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
)

module.exports = router