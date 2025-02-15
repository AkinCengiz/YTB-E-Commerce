const express = require("express");
const router = express.Router();

//Routes (Rotaları) alıyoruz.
const categoryRoute = require("./categories.js");
const productRoute = require("./products.js");

//Route yollarını tanımlıyoruz
router.use("/categories",categoryRoute);
router.use("/products",productRoute);

module.exports = router;