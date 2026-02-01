import express, { type Express } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function serveStatic(app: Express) {
  // Serve arquivos estáticos da pasta dist em produção
  app.use(express.static(path.join(__dirname, "..", "dist")));
  
  // Para qualquer rota que não seja API, servir o index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
  });
}
