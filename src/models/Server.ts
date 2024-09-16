import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "../config/conf";
import productRoutes from "../routes/productos.routes";
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
    this.app.use("/api", productRoutes);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`Server on http://127.0.0.1:${this.port}`)
    );
  }
}

export default Server;
