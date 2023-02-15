import { Router } from 'express';
import { getUsers, addUser } from '../controllers/user.controller.js';

const router = Router();

router.get("/", getUsers)
router.post("/addUser", addUser)

export default router;