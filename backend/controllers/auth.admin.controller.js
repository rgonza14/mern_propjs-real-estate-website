const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const register = async (request, response) => {
    const { full_name, email, password, user, dni, _id } = request.body;

    try {
        let admin = await Admin.findOne({ email });

        if (admin?.user) {
            return response.status(400).json({
                success: false,
                message: "El email o usuario ya se encuentra registrado"
            });
        }
        admin = new Admin(request.body);
        const salt = bcrypt.genSaltSync();
        admin.password = bcrypt.hashSync(password, salt);
        await admin.save();

        response.status(201).json({
            success: true,
            message: "Administrador registrado con exito",
            admin
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

const login = async (request, response) => {
    const { user, password } = request.body;
    const admin = await Admin.findOne({ user });
    try {
        if (!admin) {
            response.status(400).json({
                success: false,
                message: "Usuario incorrecto"
            });
        }
        const validPassword = bcrypt.compareSync(password, admin.password);
        if (!validPassword) {
            response.status(400).json({
                success: false,
                message: "Contraseña incorrecta "
            });
        }
        response.status(201).json({
            success: true,
            _id: admin._id,
            user: admin.user,
            full_name: admin.full_name
        });
    } catch (error) {
        console.log(error);
    }
};
const getAdmins = async (_, response) => {
    const admins = await Admin.find();
    response.status(201).json({
        success: true,
        admins
    });
};

module.exports = { login, register, getAdmins };
