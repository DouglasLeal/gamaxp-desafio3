import bcrypt from "bcryptjs";

import PsicologoRepository from "../repositories/PsicologoRepository.js";

class PsicologoController{
    static async listar(req, res) {
        try {
            let psicologos = await PsicologoRepository.listar();
            return res.status(200).json(psicologos);
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async buscarPorId(req, res){
        try {
            let {id} = req.params;

            let psicologo = await PsicologoRepository.buscarPorId(id);
            
            if(!psicologo){
                return res.status(404).json("Id não encontrado");
            }

            return res.status(200).json(psicologo);
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async criar(req, res) {
        try {
            req.body.senha = bcrypt.hashSync(req.body.senha);

            let novoPsicologo = await PsicologoRepository.criar(req.body);
            return res.status(201).json(novoPsicologo);
        } catch (error) {
            console.log(error)
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async atualizar(req, res) {
        try {
            let psicologoCadastrado = await PsicologoRepository.buscarPorId(req.params.id);
            
            if(!psicologoCadastrado){
                return res.status(404).json("Id não encontrado");
            }

            req.body.senha = bcrypt.hashSync(req.body.senha);

            await PsicologoRepository.atualizar(req.params.id, req.body);

            let psicologoAtualizado = await PsicologoRepository.buscarPorId(req.params.id);

            return res.status(200).json(psicologoAtualizado);
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async excluir(req, res) {
        try {
            let psicologoCadastrado = await PsicologoRepository.buscarPorId(req.params.id);
            
            if(!psicologoCadastrado){
                return res.status(404).json("Id não encontrado");
            }

            await PsicologoRepository.excluir(req.params.id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }
};

export default PsicologoController;