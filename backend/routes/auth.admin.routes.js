const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");
const {
    login,
    register,
    getAdmins
} = require("../controllers/auth.admin.controller");
const router = Router();

router.post(
    "/register",
    [
        check("full_name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "Se debe ingresar un email valido").isEmail(),
        check("user", "El usuario es obligatorio").not().isEmpty(),
        check("dni", "Se debe ingresar dni del administrador").not().isEmpty(),
        check(
            "password",
            "La contraseña debe tener 8 o más caracteres"
        ).isLength({
            min: 8
        }),
        validateFields
    ],
    register
);

router.post(
    "/login",
    [
        check("user", "El usuario es obligatorio").not().isEmpty(),
        check("password", "Contraseña incorrecta").not().isEmpty(),
        validateFields
    ],
    login
);

router.get("/", getAdmins);

module.exports = router;
