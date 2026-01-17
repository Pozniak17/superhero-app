import express from "express";
import HeroController from "../controllers/hero.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();
const jsonParser = express.json();

router.get("/", HeroController.getHerous);
router.get("/:id", HeroController.getHeroById);

router.post("/", upload.array("images", 5), HeroController.createHero);
router.put("/:id", jsonParser, HeroController.updateHero);
router.delete("/:id", HeroController.deleteHero);

export default router;
