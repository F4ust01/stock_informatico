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

router.post("/register", async (req, res) => {
  console.log(req.body); // Verificar qué datos están llegando
  try {
    const { name, email, password, role } = req.body;
    const newUser = await registerUser(name, email, password, role);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});



export default router;
