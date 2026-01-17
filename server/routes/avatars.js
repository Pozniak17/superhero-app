import express from "express";

import { upload } from "../middleware/upload.js";
import avatarController from "../controllers/avatar.js";

const router = express.Router();
router.patch("/:id", upload.single("avatar"), avatarController.patchUpload);

export default router;
