const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductSchema = Schema(
  {
    title: String,
    image: String,
    price: Number,
    brand: String,
    active: Boolean,
    discount: Number,
    category: String,
    inventory: Number,
  },
  { versionKey: false }
);

const ProductModel = model("product", ProductSchema);

module.exports = {
  ProductModel,
};
