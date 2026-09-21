import express from "express";
import celularRouter from "../src/routes/celular.routes.js"

const app = express()
const port = 3000

app.use(express.json())

app.use("/celulares", celularRouter)

app.listen(port, () => {
    console.log(`App rodando em http://localhost:3000`);
})