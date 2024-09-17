import express from 'express';
import { loginUser, registerUser } from '../services/authService';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const { user, token } = await loginUser(username, password);
    res.json({ user, token });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await registerUser(username, password);
    res.status(201).json(newUser);
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
