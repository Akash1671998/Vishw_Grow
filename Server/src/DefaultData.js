const { StaticProducts } = require("../src/staticData/staticData");
const { Product } = require("../src/model/Product");

const DefaultData = async (request, responce) => {
  try {
    const data = await Product.insertMany(StaticProducts);
    responce.status(200).json({
      status: "ok",
      message: "Product Data Insert Successfully",
    });
  } catch (error) {
    console.log("Error While Inserting default data", error.message);
  }
};
module.exports = { DefaultData };
