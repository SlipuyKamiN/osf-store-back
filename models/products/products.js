const fs = require("fs").promises;

const productsPath = "models/products/products.json";

async function listProducts() {
  const products = await fs.readFile(productsPath, "utf-8");

  return JSON.parse(products);
}

module.exports = {
  listProducts,
};
