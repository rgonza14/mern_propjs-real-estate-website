const { Router } = require("express");
const {
    addProperty,
    getProperties,
    getLastNProperties,
    getPropertyById,
    updateProperty,
    removeProperty
} = require("../controllers/property.controllers");
const { checkSchema } = require("express-validator");
const router = Router();

router.post("/", addProperty);
router.get("/", getProperties);
router.get("/getLastN/:n", getLastNProperties);
router.get("/:id", getPropertyById);
router.put("/:id", updateProperty);
router.delete("/:id", removeProperty);

module.exports = router;
