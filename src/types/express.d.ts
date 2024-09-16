// src/types/express.d.ts
import { User } from "../models/User"; 

declare global {
  namespace Express {
    interface Request {
      user?: User; // Agregar la propiedad `user` a la interfaz Request
    }
  }
}
