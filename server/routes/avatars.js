import express from "express";

import uploadMiddleware from "../middleware/upload.js";
import avatarController from "../controllers/avatar.js";

const router = express.Router();
router.patch(
  "/:id",
  uploadMiddleware.single("avatar"),
  avatarController.patchStudentController
);

export default router;
