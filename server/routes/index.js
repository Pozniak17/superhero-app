import express from "express";
import heroRoutes from "./herous.js";
import avatarRouter from "./avatars.js";

const router = express.Router();

router.use("/herous", heroRoutes);
router.use("/avatars", avatarRouter);

export default router;
