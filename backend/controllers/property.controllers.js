const Property = require("../models/Property");
var ObjectId = require("mongoose").Types.ObjectId;

const addProperty = async (request, response) => {
    const property = new Property(request.body);

    try {
        await property.save();
        response.status(201).json({
            success: true,
            message: "Propiedad agregada correctamente",
            property
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

const getProperties = async (request, response) => {
    try {
        let properties;
        let typeProperties = request.query.typeProperties;

        if (typeProperties === "all") {
            properties = await Property.find();
        } else {
            properties = await Property.find({ onSale: true });
        }

        response.status(200).json({
            success: true,
            properties
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

const getLastNProperties = async (request, response) => {
    const properties = await Property.find()
        .sort({ _id: -1 })
        .limit(request.params.n);

    response.status(200).json({
        success: true,
        properties
    });
};

const getPropertyById = async (request, response) => {
    try {
        const property = await Property.findById(request.params.id);
        if (!property) {
            return response.status(404).json({
                success: false,
                message: "No existe propiedad con ese id"
            });
        } else {
            response.json({
                success: true,
                property
            });
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

const updateProperty = async (request, response) => {
    const propertyId = request.params.id;

    try {
        const property = await Property.findById(propertyId);
        if (!property) {
            return response.status(404).json({
                success: false,
                message: "No existe una propiedad con esa id"
            });
        }

        const newProperty = {
            ...request.body
        };

        const propertyUpdated = await Property.findByIdAndUpdate(
            propertyId,
            newProperty,
            { new: true }
        );

        response.json({
            success: true,
            propertyUpdated
        });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

const removeProperty = async (request, response) => {
    const idProperty = request.params.id;
    try {
        const property = await Property.findById(idProperty);
        if (!property) {
            return response.status(404).json({
                success: false,
                message: "No existe propiedad con ese id"
            });
        }
        await Property.findByIdAndDelete(idProperty);
        response.json({ success: true, message: "Propiedad eliminada" });
    } catch (error) {
        console.log(error);
        response.status(500).json({
            success: false,
            message: "Contacte con el administrador"
        });
    }
};

module.exports = {
    addProperty,
    getLastNProperties,
    getPropertyById,
    getProperties,
    updateProperty,
    removeProperty
};
