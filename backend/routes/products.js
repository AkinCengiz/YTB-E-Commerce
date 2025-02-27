const express = require("express");
const Product = require("../models/Product");
const router = express.Router();


// router.get("/",async (req,res) => {
//     res.send("Ürün Listesi")
// });


//Yeni ürün ekleme başlangıç
router.post("/", async (req,res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
//Yeni ürün ekleme bitiş

//Tüm ürünleri listeleme başlangıç

router.get("/", async (req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//Tüm ürünleri listeleme bitiş

//Id bilgisine göre ürün getirme başlangıç

router.get("/:productId", async (req,res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);

        if(!product){
            res.status(404).json({error : "Belirtilen id değerine ait bir ürün bulunamadı..."});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//Id bilgisine göre ürün getirme bitiş

//Id ye göre ürün güncelleme başlangıç
router.put("/:productId", async (req,res) => {
    try {
        const productId = req.params.productId;
        const updateInfo = req.body;
        
        const product = await Product.findById(productId);
        if(!product){
            res.status(404).json({error : "Belirtilen id değerine ait ürün bulunamadı..."});
        }
        
        const updatedProduct = await Product.findByIdAndUpdate(productId,updateInfo,{ new : true});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
//Id ye göre ürün güncelleme bitiş

//Id ye göre ürün silme başlangıç

router.delete("/:productId", async (req,res) => {
    try {
        const productId = req.params.productId;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if(!deletedProduct){
            res.status(404).json({error : "Belirtilen id değerine ait ürün bulunamadı..."});
        }
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//Id ye göre ürün silme bitiş

module.exports = router;