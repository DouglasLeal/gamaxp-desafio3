import express from "express";

import Controller from "../controllers/AtendimentoController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router
    .get("/", Controller.listar)
    .get("/:id", Controller.buscarPorId)
    .post("/", AuthMiddleware.autenticar, Controller.criar)
    .put("/:id", Controller.atualizar)
    .delete("/:id", Controller.excluir);

export default router;