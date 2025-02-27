const express = require("express");
const Coupon = require("../models/Coupon");
const router = express.Router();

//Coupon oluşturma başlangıç.

router.post("/", async (req,res) => {
    try {
        const coupon = new Coupon(req.body);
        await coupon.save();
        res.status(201).json(coupon);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//Coupon oluşturma bitiş
//Bütün kuponları listeleme başlangıç

router.get("/", async (req,res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//Bütün kuponları listeleme bitiş

//Id değerine göre kupon getirme başlangıç

router.get("/:couponId", async (req,res) => {
    try {
        const couponId = req.params.couponId;
        const coupon = await Coupon.findById(couponId);

        if(!coupon){
            res.status(404).json({error : "Verilen id değerine ait kupon bulunamadı..."});
        }
        res.status(200).json(coupon);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//Id değerine göre kupon getirme bitiş

//Kupon güncelleme başlangıç

router.put("/:couponId", async (req,res) => {
    try {
        const couponId = req.params.couponId;
        const updatedInfo = req.body;

        const coupon = await Coupon.findById(couponId);
        if(!coupon){
            res.status(404).json({error : "Verilen id değerine ait kupon bulunamadı..."});
        }
        const updatedCoupon = await Coupon.findByIdAndUpdate(couponId,updatedInfo,{new:true});

        res.status(200).json(updatedCoupon);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//Kupon güncelleme bitiş

//Kupon silme işlemi başlangıç

router.delete("/:couponId", async (req,res) => {
    try {
        const couponId = req.params.couponId;
        const deletedCoupon = await Coupon.findByIdAndDelete(couponId);

        if(!deletedCoupon){
            res.status(404).json({error : "Verilen id değerine ait kupon bulunamadı..."});
        }
        res.status(200).json(deletedCoupon);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//Kupon silme işlemi bitiş

module.exports = router;