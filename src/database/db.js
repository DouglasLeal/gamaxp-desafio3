import Sequelize from "sequelize";
import * as dotenv from 'dotenv';

dotenv.config();

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_CONFIG = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
};

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);


export async function dbHasConnection() {
    try {
        await sequelize.authenticate();
        console.log('DB conectado...');
    } catch (error) {
        console.error("Não foi possível conectar ao DB.");
    }
}

export default sequelize;