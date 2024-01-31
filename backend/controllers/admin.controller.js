const bcrypt = require("bcryptjs");
const Admin = require("./../models/Admin");

const addAdmin = async (request, response) => {
    try {
        const admin = new Admin(request.body);

        await admin.save();
        response.status(201).json({
            success: true,
            message: "Administrador agregado con exito",
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

const updateAdmin = async (request, response) => {
    const idAdmin = request.params.id;
    let password = "";
    try {
        const admin = await Admin.findById(idAdmin);

        if (!admin) {
            return response.status(404).json({
                success: false,
                message: "Administrador no encontrado con ese id"
            });
        }

        if (admin.password !== "") {
            const salt = bcrypt.genSaltSync();
            password = bcrypt.hashSync(request.body.password, salt);
        }

        const updatedAdmin = await Admin.findByIdAndUpdate(
            idAdmin,
            { ...request.body, password },
            { new: true }
        );

        response.json({
            success: true,
            updatedAdmin
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Por favor, contacte con el administrador"
        });
    }
};

const getAdmins = async (_, response) => {
    const admins = await Admin.find().select("-password");
    response.status(200).json({
        success: true,
        admins
    });
};

const getAdminById = async (request, response) => {
    try {
        const admin = await Admin.findById(request.params.id).select(
            "-password"
        );
        const { full_name, dni, email, user } = admin;
        if (!admin) {
            return response.status(404).json({
                success: false,
                message: "No existe administrador con ese id"
            });
        }
        response.status(200).json({
            success: true,
            admin: {
                full_name,
                dni,
                email,
                user
            }
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

const removeAdmin = async (request, response) => {
    const idAdmin = request.params.id;
    try {
        const admin = await Admin.findById(idAdmin);
        if (!admin) {
            return response.status(404).json({
                success: false,
                message: "No existe administrador con ese id"
            });
        }
        await Admin.findByIdAndDelete(idAdmin);
        response.json({
            success: true,
            message: "Administrador eliminado con exito"
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Ocurrión un error. Contacte con el administrador"
        });
    }
};

module.exports = {
    addAdmin,
    updateAdmin,
    getAdmins,
    getAdminById,
    removeAdmin
};
