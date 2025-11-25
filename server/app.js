const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect("mongodb://127.0.0.1:27017/collegehub")
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});