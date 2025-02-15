const express = require("express");
const router = express.Router();


router.get("/",async (req,res) => {
    res.send("Ürün Listesi")
});

module.exports = router;