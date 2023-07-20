const users = require("../models/users");

const { HttpError } = require("../utils/HttpError");
const { ctrlWrapper } = require("../utils/ctrlWrapper");

const getAll = async (req, res) => {
  const data = await users.listUsers();

  res.json(data);
};

const createNew = async (req, res) => {
  const { body } = req;
  const data = await users.addUser(body);

  if (!data) {
    throw HttpError();
  }

  res.status(201).json(data);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  createNew: ctrlWrapper(createNew),
};
