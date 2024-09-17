import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import Equipment from '../models/Equipment';

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  const equipment = await Equipment.find();
  res.json(equipment);
});

router.post('/', authMiddleware, async (req, res) => {
  const { name, status, location, purchaseDate } = req.body;
  const newEquipment = new Equipment({ name, status, location, purchaseDate });
  await newEquipment.save();
  res.status(201).json(newEquipment);
});

router.put('/:id', authMiddleware, async (req, res) => {
  const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedEquipment);
});

router.delete('/:id', authMiddleware, async (req, res) => {
  await Equipment.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
