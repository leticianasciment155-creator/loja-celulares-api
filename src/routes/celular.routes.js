import { Router } from "express";
import celularServices from "../services/celular.services.js";

celularRoutes = Router();

celularRoutes.get("/", async (req, res) => {
  const celulares = await celularServices.getAll();
  res.json(celulares);
});

celularRoutes.post("/", async (req, res) => {
    const celulares = await celularServices.create(req.body);
    return res.status(201).json(celulares);
})