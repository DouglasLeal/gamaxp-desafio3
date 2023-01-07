import express from "express";

import Controller from "../controllers/AuthController.js";
import validation from "../validations/loginValidation.js";

const router = express.Router();

router
    .post("/login", validation, Controller.login)

export default router;