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

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await ProductService.update(req.params.id, req.body);
    if (!updatedProduct) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "Producto no encontrado",
      };
    }
    return res.json({
      message: "Producto actualizado",
      product: updatedProduct,
    });
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await ProductService.delete(req.params.id);
    if (!deletedProduct) {
      throw {
        statusCode: 404,
        status: "Not Found",
        message: "Producto no encontrado",
      };
    }
    return res.status(204).json({
      message: "Producto eliminado",
    });
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
      status: err.status,
    });
  }
};
