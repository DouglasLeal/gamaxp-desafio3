import express from "express";

import Controller from "../controllers/PacienteController.js";

const router = express.Router();

router
    .get("/", Controller.listar)
    .get("/:id", Controller.buscarPorId)
    .post("/", Controller.criar)
    .put("/:id", Controller.atualizar)
    .delete("/:id", Controller.excluir);

export default router;