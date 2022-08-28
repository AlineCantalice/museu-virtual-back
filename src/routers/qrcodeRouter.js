import { Router } from "express";
import { getURL } from "../controllers/qrcodeController.js";

const router = Router();

router.post('/link', getURL)

export default router