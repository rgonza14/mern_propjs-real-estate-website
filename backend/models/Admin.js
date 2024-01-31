const { Schema, model } = require("mongoose");

const AdminSchema = Schema({
    full_name: {
        type: String,
        required: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = model("Admin", AdminSchema);
