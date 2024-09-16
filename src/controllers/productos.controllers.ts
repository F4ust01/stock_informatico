import { Request, Response } from "express";
import ProductService from "../services/ProductService";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.findAll();
    if (products.length === 0 || !products) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "No se han encontrado productos",
      };
    }
    return res.json(products);
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    await ProductService.create(req.body);
    return res.status(201).json({
      message: "Producto creado",
    });
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const updateProduct = (req: Request, res: Response) => {
  return res.json({
    msg: "All Products",
  });
};
