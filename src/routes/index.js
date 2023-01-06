import express from "express";

import pacienteRoute from "./pacienteRoute.js";
import psicologoRoute from "./psicologoRoute.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({msg: "Hello, World!!!"});
    });

    app.use(express.json());
    app.use("/pacientes", pacienteRoute);
    app.use("/psicologos", psicologoRoute);
}

export default routes;