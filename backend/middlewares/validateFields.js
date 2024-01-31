const express = require("express");
const { validationResult } = require("express-validator");

const validateFields = (request, response, next) => {
    const resp = validationResult(request);
    console.log(resp.errors);
    if (!resp.isEmpty()) {
        return response.status(400).json({
            success: false,
            errors: resp.errors
            //errors: errors.mapped() -> si quiero como un conjunto de objetos y no un arreglo
        });
    }
    next();
};

module.exports = { validateFields };
