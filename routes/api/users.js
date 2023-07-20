const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/users");
const schemas = require("../../schemas/users");
const { validateBody } = require("../../middlewares/validateBody");

router.post("/", validateBody(schemas.userschema), ctrl.createNew);


module.exports = router;