const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string()
    .pattern(new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"))
    .required()
    .messages({
      "any.required": "missing required email field",
      "string.pattern.base": "Wrong pattern",
    }),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
      )
    )
    .required()
    .messages({
      "any.required": "missing required password field",
      "string.pattern.base": "Wrong pattern",
    }),
});

module.exports = {
  userSchema,
};
