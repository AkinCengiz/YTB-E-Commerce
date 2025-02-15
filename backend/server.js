const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
// const cors = require("cors")
const mainRoute = require("./routes/index.js");
const PORT = 5000;

dotenv.config();

app.use(express.json());
// app.use(cors());
app.use("/api",mainRoute);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDb bağlantısı başarılı...")
    } catch (error) {
        throw new Error(error);
    }
}




app.listen(PORT,() => {
    connect();
    console.log(`Sunucu ${PORT} üzerinde çalışıyor.`)
})