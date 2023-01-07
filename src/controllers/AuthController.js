import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

import PsicologoRepository from "../repositories/PsicologoRepository.js";

dotenv.config();

class AuthController{
    static async login(req, res){
        const {email, senha} = req.body;

        let psicologoCadastrado = await PsicologoRepository.buscarPorEmail(email);
    
        if(!psicologoCadastrado){
            return res.status(401).json("E-mail e/ou senha inválidos. Tente novamente");
        }

        if(!bcrypt.compareSync(senha, psicologoCadastrado.senha)){
            return res.status(401).json("E-mail e/ou senha inválidos. Tente novamente");
        }

        const token = jwt.sign({
            id: psicologoCadastrado.id,
            email: psicologoCadastrado.email,
            nome: psicologoCadastrado.nome
        },
        process.env.SECRET,
        {expiresIn: "7d"}
        );

        return res.status(200).json(token);
    }
}

export default AuthController;