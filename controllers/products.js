const products = require("../models/products/products");

const { HttpError } = require("../utils/HttpError");
const { ctrlWrapper } = require("../utils/ctrlWrapper");

const getAll = async (req, res) => {
  const data = await products.listProducts();

  res.status(200).json(data);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
};
