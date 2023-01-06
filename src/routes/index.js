import express from "express";

import pacienteRoute from "./pacienteRoute.js";
import psicologoRoute from "./psicologoRoute.js";
import atendimentoRoute from "./atendimentoRoute.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({msg: "Hello, World!!!"});
    });

    app.use(express.json());
    app.use("/pacientes", pacienteRoute);
    app.use("/psicologos", psicologoRoute);
    app.use("/atendimentos", atendimentoRoute);
}

export default routes;