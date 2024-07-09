const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  reminderTime: {
    type: Date,
    required: true,
  },
  fcmToken: {
    type: String,
    required: true,
  },
  notificationSent: {
    type: Boolean,
    default: false,
  },
});

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
