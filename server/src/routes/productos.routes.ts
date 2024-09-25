import { Router } from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productos.controllers";

const router = Router();

// Obtener todos los productos
router.get("/products", getProducts);

// Crear un nuevo producto
router.post("/product", createProduct);

// Actualizar un producto existente por ID
router.put("/product/:id", updateProduct);

// Eliminar un producto existente por ID
router.delete("/product/:id", deleteProduct);

export default router;
