import * as dotenv from 'dotenv';

import app from "./src/app.js";
import {dbHasConnection} from "./src/database/db.js";

dotenv.config();

dbHasConnection();

const port = process.env.PORT; 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`);
});