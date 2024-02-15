const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateFields");
const { dbConnection } = require("../database/config");
require("dotenv").config();

const app = express();
dbConnection();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: `${process.env.SMTP_HOST}`,
    port: process.env.PORT_NODEMAILER,
    secure: true,
    auth: {
        user: `${process.env.ACCOUNT_EMAIL}`,
        pass: `${process.env.PASS_EMAIL}`
    }
});

// Directorio público
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", require("../routes/auth.admin.routes"));
app.use("/api/properties", require("../routes/property.routes"));
app.use("/api/agents", require("../routes/agent.routes"));
app.use("/api/admins", require("../routes/admin.routes"));

app.post(
    "/api/send",
    [
        check("full_name", "Se debe ingresar un nombre").not().isEmpty(),
        check("cellphone", "Se debe ingresar un número de celular")
            .not()
            .isEmpty(),
        check("message", "El mensaje es obligatorio").not().isEmpty(),
        check("email", "Se debe ingresar un email valido").isEmail(),
        validateFields
    ],
    function (request, response) {
        const mailOptionsToAdmin = {
            from: request.body.email,
            to: `${process.env.ACCOUNT_EMAIL}`,
            subject: `Consulta de ${request.body.full_name}`,
            text: `
                Datos del remitente: \n
                    \tNombre completo: ${request.body.full_name} \n
                    \tEmail: ${request.body.email}\n
                    \tCelular: ${request.body.cellphone} \n
                Mensaje: \n
                    \t${request.body.message}`
        };
        const mailOptionsToClient = {
            from: `${process.env.ACCOUNT_EMAIL}`,
            to: request.body.email,
            subject: "Propjs",
            text: `Hola, ${request.body.full_name}. \nQueríamos notificarte que hemos recibido correctamente tu consulta y a la brevedad nos pondemos en contacto contigo. \n\nSaludos atte. Equipo de Propjs.`
        };

        Promise.all([
            transporter.sendMail(mailOptionsToAdmin),
            transporter.sendMail(mailOptionsToClient)
        ])
            .then(_ =>
                response.json({
                    success: true,
                    message: "Mail enviado correctamente"
                })
            )
            .catch(error => console.log(error));
    }
);

app.get("*", (_, response) => {
    response.sendFile(__dirname + "./public/index.html");
});

app.listen(process.env.PORT, () => {
    console.log("Corriendo en el puerto ", process.env.PORT);
});
