import { Router } from "express";
import celularServices from "../services/celular.services.js";

export const celularRouter = Router();

celularRouter.get("/", async (req, res) => {
  
  const celulares = await celularServices.getAll();
  res.json(celulares);
});

celularRouter.post("/", async (req, res) => {
    const celulares = await celularServices.create(req.body);
    return res.status(201).json(celulares);
})

export default celularRouter