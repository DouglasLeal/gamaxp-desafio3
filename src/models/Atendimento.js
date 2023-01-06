import { DataTypes } from "sequelize";

import db from "../database/db.js";

const Atendimento = db.define('atendimento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    paciente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    psicologo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    observacao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    data_atendimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

export default Atendimento;