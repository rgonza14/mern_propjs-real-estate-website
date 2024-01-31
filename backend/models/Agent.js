const { Schema, model } = require("mongoose");

const AgentSchema = Schema({
    full_name: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = model("Agent", AgentSchema);
