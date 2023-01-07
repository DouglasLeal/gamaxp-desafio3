import express from "express";

import pacienteRoute from "./pacienteRoute.js";
import psicologoRoute from "./psicologoRoute.js";
import atendimentoRoute from "./atendimentoRoute.js";
import authRoute from "./authRoute.js";
import dashboardRoute from "./dashboardRoute.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({msg: "Hello, World!!!"});
    });

    app.use(express.json());
    app.use("/pacientes", pacienteRoute);
    app.use("/psicologos", psicologoRoute);
    app.use("/atendimentos", atendimentoRoute);
    app.use("/dashboard", dashboardRoute);
    app.use(authRoute);
}

export default routes;