const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const connectDB = require("./config/db");
const productRouter = require("./Routes/dashboard.routes");
const cron = require("node-cron");
const { sendNotificationNew } = require("./utills/scheduler");
const io = socketIO(server);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

io.on("connection", (socket) => {
  console.log("New Client Connected");

  socketIO.on("disconnect", () => {
    console.log("client Disconnected");
  });
});
cron.schedule('* * * * *', () => {
  sendNotificationNew();
})

app.use("/api", productRouter);
const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log("Server is started on port 5000");
});
