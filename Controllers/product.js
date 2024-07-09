const ProductModel = require("../Model/product");
const addProduct = async (req, res) => {
  try {
    console.log(req.body, "body");
    const { productId, name, description, price, category, date, token } =
      req.body.data;

    console.log(token, "token");
    if (!name || !description || !price || !date) {
      res.status(400).json({ error: "All Fields Are Requird" });
    }

    const product = await ProductModel({
      name,
      description,
      price: price.toString(),
      category,
      reminderTime: new Date(date),
      fcmToken: token,
    });
    await product.save();
    console.log(product, "product");
    return res.status(200).json({
      success: true,
      message: "Product has been added",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ error: error.mesage });
    console.log(error);
  }
};

const editProduct = async (req, res) => {
  try {
    console.log(req.body, "body");
    const { productId } = req.params;
    const { name, description, price, category } = req.body.data;
    const product = await ProductModel.findOne({ _id: productId });
    if (!product) {
      res.status(404).json({ success: false, message: "No Product Found" });
    }
    (product.name = name),
      (product.description = description),
      (product.price = price),
      (product.category = category);
    await product.save();
    console.log(product, "product");
    res.status(200).json({
      success: true,
      message: "Product has bee updated",
      data: product,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log(productId, "productId");
    const product = await ProductModel.findOneAndDelete({ _id: productId });
    if (!product) {
      return res
        .status(404)
        .json({ success: true, message: "Product Not Found" });
    }
    return res
      .status(200)
      .json({ success: true, messag: "product has been deleted" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = { addProduct, editProduct, deleteProduct };
