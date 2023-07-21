const subscribers = require("../models/subscribers/subscribers");

const { HttpError } = require("../utils/HttpError");
const { ctrlWrapper } = require("../utils/ctrlWrapper");

const getAll = async (req, res) => {
  const data = await subscribers.listSubscribers();

  res.json(data);
};

const createNew = async (req, res) => {
  const { body } = req;
  const data = await subscribers.addSubscriber(body);

  if (!data) {
    throw HttpError();
  }

  res.status(201).json(data);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  createNew: ctrlWrapper(createNew),
};
