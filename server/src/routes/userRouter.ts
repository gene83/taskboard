import { Router } from "express";
import * as userHandler from "../handlers/userHandler";

const router = Router();

router.post("/", userHandler.createUser);

router.post("/login", userHandler.loginUser);

export default router;
