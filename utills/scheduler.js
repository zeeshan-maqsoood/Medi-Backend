const cron = require("node-cron");
const admin = require("../services/firebase");
const ProductModel = require("../Model/product");

const sendNotificationNew = async () => {
  try {
    console.log("function calls at", new Date());
    const products = await ProductModel.find({
      notificationSent: false,
      reminderTime: { $lte: new Date() },
    });
    console.log(`cron job runnig at ${products.length}`);
    for (let product of products) {
      const notification = {
        title: "Reminder Time",
        body: "Reminder Type",
      };
      console.log(product.fcmToken)
      admin
      .messaging()
      .send({
        token:product.fcmToken,
        notification,
      })
      .then(async() => {
        console.log("FCM message sent");
        product.notificationSent = true;
        await product.save();
      })
      .catch((error) => {
        console.log(error);
        // console.error(`Error sending notification to ${token}`);
      });
     
    }
  } catch (error) {
    console.log(error, "error");
  }
};

module.exports = { sendNotificationNew };
