import { Router } from "express";
import { getURL } from "../controllers/qrcodeController.js";

const router = Router();

router.get('/', getURL)

export default router