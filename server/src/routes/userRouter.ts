import { Router } from 'express';
import { createNewUser } from '../handlers/userHandler';

const router = Router();

router.post('/user', createNewUser);

export default router;