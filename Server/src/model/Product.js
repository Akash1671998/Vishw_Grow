const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
  },
  detailurl: {
    type: String,
  },
  title: {
    type: Object,
  },
  price: {
    type: Object,
  },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
  },
  discount: {
    type: String,
  },
  tagline: {
    type: String,
  },
});
const Product = mongoose.model("product", productSchema);
module.exports = { Product };
