//Rutas para autenticar usuarios
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const authController = require('../controllers/authController')
//Crea un usuario

//api/auth
router.post('/',
    [
        check('email').isEmail().withMessage('Agrega un email válido'),
        check('password').isLength({ min: 6 }).withMessage('El password debe ser mínimo de 6 caracteres')
    ],
    authController.autenticarUsuario

)

module.exports = router;