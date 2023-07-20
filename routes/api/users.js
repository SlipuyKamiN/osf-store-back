const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/users");
const schemas = require("../../schemas/users");
const { validateBody } = require("../../middlewares/validateBody");

router.get("/", ctrl.getAll)
router.post("/", validateBody(schemas.userSchema), ctrl.createNew);


module.exports = router;