import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import "dotenv/config";

// Тимчасово додамо цей лог, щоб побачити чи підтягнулися ключі
console.log(
  "Cloudinary Config Check:",
  process.env.CLOUD_NAME,
  !!process.env.API_KEY
);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, // Перевір, щоб у .env було саме так
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "heroes",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
  },
});

export const upload = multer({ storage });
