import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.eras.list.path, async (_req, res) => {
    const eras = await storage.getEras();
    res.json(eras);
  });

  app.get(api.eras.get.path, async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "ID da era inválido" });
    }
    
    const era = await storage.getEra(id);
    if (!era) {
      return res.status(404).json({ message: "Era não encontrada" });
    }
    res.json(era);
  });

  return httpServer;
}
