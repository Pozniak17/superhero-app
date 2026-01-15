import * as fs from "node:fs/promises";
import path from "node:path";

import Hero from "../models/hero.js";

async function uploadAvatar(req, res, next) {
  try {
    await fs.rename(
      req.file.path,
      path.resolve("public/avatars", req.file.filename)
    );

    // записуємо користувачу поле аватар з картинкою
    const hero = await Hero.findByIdAndUpdate(
      req.params.id,
      { $push: { images: req.file.filename } },
      { new: true }
    );

    if (hero === null) {
      return res.status(404).send({ message: "Hero not found" });
    }

    res.send(hero);
  } catch (error) {
    next(error);
  }
}

export default { uploadAvatar };
