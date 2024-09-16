import { Router } from 'express';
import { createProduct, getProducts } from '../controllers/productos.controllers';

const router = Router();


router.get('/products', getProducts )
router.post('/product', createProduct )

export default router;