//Rutas para crear usuarios
const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const { check } = require('express-validator')
//Crea un usuario

//api/usuarios
router.post('/',
    [
        check('nombre').not().isEmpty().withMessage('El nombre es obligatorio'),
        check('email').isEmail().withMessage('Agrega un email válido'),
        check('password').isLength({ min: 6 }).withMessage('El password debe ser mínimo de 6 caracteres')
    ],
    usuarioController.crearUsuario
)

module.exports = router;