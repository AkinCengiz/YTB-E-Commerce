const express = require("express");
const bycrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/User");

// Tüm kullanıcıları getir => GetAll()
router.get("/", async (req,res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
// Tüm kullanıcıları getir => GetAll()

// ID bilgisine göre kullanıcı getirme => GetById()
router.get("/:userId", async(req,res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        if(!user){
            res.status(404).json({error : "Kullanıcı bulunamadı..."});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})
// ID bilgisine göre kullanıcı getirme => GetById()

//Kullanıcı güncelleme başlangıç

router.put("/:userId", async (req,res) => {
    try {
        const userId = req.params.userId;
        const updateInfo = req.body;

        const updatedUser = await User.findById(userId);

        if(!updatedUser){
            res.status(404).json({error : "Verilen id değerine ait kullanıcı bulunamadı..."});
        }

        if(updateInfo.password){
            updateInfo.password = await bycrypt.hash(updateInfo.password,7);
        }

        const updated = await User.findByIdAndUpdate(userId,updateInfo,{new : true});
        res.status(200).json(updated);
    } catch (error) {
        
    }
})

//Kullanıcı güncelleme bitiş

// Kullanıcı silme => Delete()
router.delete("/:email", async(req,res) => {
    try {
        const email = req.params.email;

        const deletedUser = await User.findOneAndDelete({email});

        if(!deletedUser){
            return res.status(404).json({error : "Kullanıcı bulunamadı..."});
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error : "Sunucu hatası..."});
    }
})
// Kullanıcı silme => Delete()


module.exports = router;