import { Router } from "express";
import * as userHandler from "../handlers/userHandler";

const router = Router();

router.post("/user", userHandler.createUser);

router.post("/user/login", userHandler.loginUser);

export default router;
