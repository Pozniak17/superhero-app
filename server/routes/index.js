import express from "express";
import heroRoutes from "./herous.js";

const router = express.Router();

router.use("/herous", heroRoutes);

export default router;
