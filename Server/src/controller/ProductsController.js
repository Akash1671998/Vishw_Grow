const { Product } = require("../model/Product");
const getProducts = async (request, response) => {
  try {
    const data = await Product.find({});
    response.status(200).json({
      status: "ok",
      message: "Get Product Data Successfully",
      data: data,
    });
  } catch (error) {
    console.log("Error While the call getProducts", error);
    response.status(200).json({
      status: "faild",
      message: "faild to get  Product Data",
    });
  }
};
module.exports = { getProducts };
