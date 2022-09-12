import express from "express";
import { createUser } from "../controller/userController.js";

const router = express.Router();

router.post('/api/register', createUser);

export default router;