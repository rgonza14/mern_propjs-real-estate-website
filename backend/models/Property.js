const { Schema, model } = require("mongoose");

const PropertySchema = Schema({
    title: {
        type: String,
        required: true
    },
    ubication: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    agent: {
        type: Schema.Types.ObjectId,
        ref: "Agent",
        required: true
    },
    typeProperty: {
        type: String,
        required: true
    },
    typeOperation: {
        type: String,
        required: true
    },
    numBathrooms: {
        type: String,
        required: true
    },
    numFloors: {
        type: String,
        required: true
    },
    numAmbientes: {
        type: String,
        required: true
    },
    numRooms: {
        type: String,
        required: true
    },
    coveredArea: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    onSale: {
        type: Boolean,
        default: true
    }
});

module.exports = model("Property", PropertySchema);
