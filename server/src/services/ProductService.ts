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

  async update(productId: string, productData: Partial<ProductType>) {
    // Usar Partial<ProductType> para permitir actualizaciones parciales
    return await Product.findByIdAndUpdate(productId, productData, {
      new: true,
    });
  }

  async delete(productId: string) {
    return await Product.findByIdAndDelete(productId);
  }
}

export default new ProductService();
