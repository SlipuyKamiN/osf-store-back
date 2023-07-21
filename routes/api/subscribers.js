const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/subscribers");
const schemas = require("../../schemas/subscribers");
const { validateBody } = require("../../middlewares/validateBody");

router.get("/", ctrl.getAll);
router.post("/", validateBody(schemas.subscribersSchema), ctrl.createNew);

module.exports = router;
