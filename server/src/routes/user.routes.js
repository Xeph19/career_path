import express from "express"
import { signup, login, logout, checkAuth } from "../controller/user.controller.js"
import { protectRoute } from "../middleware/user.middleware.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/check", protectRoute, checkAuth);

export default router;