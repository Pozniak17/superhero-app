// controllers/avatar.js
import { saveFileToCloudinary } from "../utils/saveFileToCloudinary.js";
import { getEnvVar } from "../utils/getEnvVar.js";
// Припустимо, твоя модель/сервіс називається Hero
import Hero from "../models/hero.js";

async function patchStudentController(req, res, next) {
  const { id } = req.params;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    let photoUrl;

    if (getEnvVar("ENABLE_CLOUDINARY") === "true") {
      photoUrl = await saveFileToCloudinary(file);
    } else {
      // Переконайся, що ця функція імпортована, якщо вона тобі потрібна локально
      // photoUrl = await saveFileToUploadDir(file);
      return res.status(400).json({ message: "Local storage not configured" });
    }

    // ВАЖЛИВО: Оновлюємо поле images (масив), додаючи нове посилання
    // Або замінюємо його, залежно від твоєї задачі
    const result = await Hero.findByIdAndUpdate(
      id,
      { $push: { images: photoUrl } }, // Додаємо в масив images
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ message: "Hero not found" });
    }

    res.json({
      status: 200,
      message: "Successfully uploaded!",
      data: result.images, // Повертаємо оновлений список картинок
    });
  } catch (error) {
    next(error); // Передаємо помилку в global error handler
  }
}

export default { patchStudentController };
