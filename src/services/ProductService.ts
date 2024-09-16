import Product from "../models/Product.js";
import { InferSchemaType } from "mongoose";

// Inferir el tipo del producto basado en el esquema
type ProductType = InferSchemaType<typeof Product.schema>;

class ProductService {
  constructor() {}

  async findAll() {
    return await Product.find();
  }

  async create(product: ProductType) {
    // Usar ProductType para tipar el parámetro
    return await Product.create(product);
  }
}

export default new ProductService();
