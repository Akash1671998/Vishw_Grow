const { StaticProducts } = require("../src/staticData/staticData");
const { Product } = require("../src/model/Product");

const DefaultData = async () => {
  try {
    const data = await Product.insertMany(StaticProducts);
  } catch (error) {
    console.log("Error While Inserting default data", error.message);
  }
};
module.exports = { DefaultData };
