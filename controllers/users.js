const users = require("../models/users");

const { HttpError } = require("../utils/HttpError");
const { ctrlWrapper } = require("../utils/ctrlWrapper");


const createNew = async (req, res) => {
  const { body } = req;
  const data = await users.addUser(body);

  if (!data) {
    throw HttpError();
  }

  res.status(201).json(data);
};



module.exports = {
  createNew: ctrlWrapper(createNew),
};