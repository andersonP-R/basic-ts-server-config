import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();

// USER ROUTES ("/api/user")
router.get("/", UserController.test);

export default router;
