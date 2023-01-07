import express from "express";

import Controller from "../controllers/AtendimentoController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import validation from "../validations/atendimentoValidation.js";

const router = express.Router();

router
    .get("/", Controller.listar)
    .get("/:id", Controller.buscarPorId)
    .post("/", AuthMiddleware.autenticar, validation, Controller.criar)

export default router;