const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

// Tüm Kategorileri Getir GetAll()
router.get("/",async (req,res) => {
    try {
        const categories = await Category.find();

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});
// Tüm Kategorileri Getir 

// Belli Bir Kategoriyi Id bilgisine göre Getirme
router.get("/:categoryId", async(req,res) => {
    try {
        const categoryId = req.params.categoryId;

        try {
            const category = await Category.findById(categoryId);
            res.status(200).json(category);
        } catch (error) {
            res.status(404).json({error : "Kategori bulunamadı."})
        }
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası"});
    }
})
// Belli Bir Kategoriyi Id bilgisine göre Getirme

// Yeni Kategori Ekleme
router.post("/",async(req,res) => {
    try {
        const {name,img} = req.body;

        const newCategory = new Category({name,img});
        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});
// Yeni Kategori Ekleme

// Kategori Güncelleme 
router.put("/:categoryId",async (req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const updateInfo = req.body;

        //Kategori bulunamazsa hata döndürmek için değişken tanımlıyoruz...
        const category = await Category.findById(categoryId);
        if(!category){
            return res.status(404).json({error : "Kategori bulunamadı..."});
        }
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            updateInfo,
            {new : true}
        );
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
// Kategori Güncelleme 

// Kategori Silme
router.delete("/:categoryId", async(req,res) => {
    try {
        const categoryId = req.params.categoryId;
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if(!deletedCategory){
            return res.status(404).json({error : "Kategori bulunamadı...."});
        }

        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
// Kategori Silme

module.exports = router;