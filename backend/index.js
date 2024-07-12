const express = require("express");
const mongoose = require("mongoose");
const FarmerModel = require("./models/FarmerSchema");
const CustomerModel = require("./models/CustomerSchema");
const ProductSchema = require("./models/ProductSchema");
const cors = require("cors");

const app = express();
app.use(cors());

// Middleware
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/AgroFlowDB")
  .then((res) => {
    console.log("Database connected");
  })
  .catch((err) => console.error("Database connection error:", err));

app.post("/api/:type/register", async (req, res) => {
  try {
    if (req.params.type == "farmer") {
      const result = await FarmerModel.create({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        location: req.body.location,
      });
      if (result) {
        res.json({ message: "Registered Successfully", status: 200, valid: true });
      } else {
        res.json({ message: "Internal sever error", status: 501, valid: false});
      }
    } else {
      const result = await CustomerModel.create({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
      });
      if (result) {
        res
          .status(200)
          .json({ message: "Registered Successfully", status: 200, valid: true });
      } else {
        res.status(501).json({ message: "Internal sever error", status: 501, valid: true });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/:type/login", async (req, res) => {
  try {
    if (req.params.type == "farmer") {
      const result = await FarmerModel.findOne({email : req.body.email});
      if (result) {
        if (result.password != req.body.password) {
          res.status(200).json({ message: "Invalid password", status: false });
        } else {
          res.status(200).json({ message: "Login successfull", status: true});
        }
      } else {
        res.json({
          message: "User not found! please register and try again.",
          status: 401,
          status: false
        });
      }
    } else {
      const result = await CustomerModel.findOne({email : req.body.email});
      if (result) {
        if (result.password != req.body.password) {
          res.status(200).json({ message: "Invalid password",status: false });
        } else {
          res.status(200).json({ message: "Login successfull" , status: true, username: result.username});
        }
      } else {
        res.json({
          message: "User not found! please register and try again.",
          status: 401,
          status: false
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/products", async (req, res) => {
  try {
    const data = await ProductSchema.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Start server
app.listen(5000, () => console.log(`Server started on port ${5000}`));
