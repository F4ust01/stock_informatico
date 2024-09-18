import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "../config/conf";
import productRoutes from "../routes/productos.routes";
import authRoutes from "../routes/auth.routes";
import equipmentRoutes from "../routes/equipmentsRoutes";
import MovementLog from "../routes/movementLogRoutes";
import { dbConnection } from "../db/connection";

class Server {
  private app: Application;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = PORT || 3000;

    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api/products", productRoutes); // Ruta para productos
    this.app.use("/api/auth", authRoutes); // Ruta para autenticación
    this.app.use("/api/equipment", equipmentRoutes); // Ruta para equipos
    this.app.use("/api/movement", MovementLog); //Ruta para movimientos
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server on http://127.0.0.1:${this.port}`)
    );
  }
}

export default Server;
