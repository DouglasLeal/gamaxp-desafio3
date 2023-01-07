import express from "express";

import PacienteController from "../controllers/PacienteController.js";
import AtendimentoController from "../controllers/AtendimentoController.js";
import PsicologoController from "../controllers/PsicologoController.js";

const router = express.Router();

router
    .get("/numero-pacientes", PacienteController.contarRegistros)
    .get("/numero-atendimentos", AtendimentoController.contarRegistros)
    .get("/numero-psicologos", PsicologoController.contarRegistros)
    .get("/media-atendimentos", AtendimentoController.mediaAtendimentos)

export default router;