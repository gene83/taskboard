import { Router } from "express";
import { createBoard } from "../handlers/boardHandler";

const router = Router();

router.post("/", createBoard);

export default router;
