import express from "express";
import heroRoutes from "./heroes.js";
import avatarRouter from "./avatars.js";

const router = express.Router();

router.use("/heroes", heroRoutes);
router.use("/avatars", avatarRouter);

export default router;
