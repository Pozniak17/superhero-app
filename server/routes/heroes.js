import express from "express";
import HeroController from "../controllers/hero.js";
import { heroJoiSchema } from "../schemas/heroSchema.js";
import { validateBody } from "../middlewares/validateBody.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();
const jsonParser = express.json();

router.get("/", HeroController.getHerous);
router.get("/:id", HeroController.getHeroById);
router.post(
  "/",
  upload.array("images", 5),
  validateBody(heroJoiSchema),
  HeroController.createHero,
);
router.put(
  "/:id",
  upload.array("images"),
  validateBody(heroJoiSchema),
  HeroController.updateHero,
);
router.delete("/:id", HeroController.deleteHero);

export default router;
