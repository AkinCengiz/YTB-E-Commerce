const mongoose = require("mongoose");

const CouponSchema = mongoose.Schema({
    code : { type : String, required : true },
    discountPercent : { type : Number, required : true },
    expire : { type : Date, required : true },
    count : { type : Number, required : true }
},{ timestamps : true });

const Coupon = mongoose.model("Coupon",CouponSchema);
module.exports = Coupon;