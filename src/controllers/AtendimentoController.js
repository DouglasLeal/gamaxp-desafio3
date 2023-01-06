import AtendimentoRepository from "../repositories/AtendimentoRepository.js";

class AtendimentoController{
    static async listar(req, res) {
        try {
            let atendimentos = await AtendimentoRepository.listar();
            return res.status(200).json(atendimentos);
        } catch (error) {
            console.log(error)
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async buscarPorId(req, res){
        try {
            let {id} = req.params;

            let atendimento = await AtendimentoRepository.buscarPorId(id);
            
            if(!atendimento){
                return res.status(404).json("Id não encontrado");
            }

            return res.status(200).json(atendimento);
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async criar(req, res) {
        try {
            req.body.psicologo_id = 1;

            let novoAtendimento = await AtendimentoRepository.criar(req.body);
            return res.status(201).json(novoAtendimento);
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async atualizar(req, res) {
        try {
            let atendimentoCadastrado = await AtendimentoRepository.buscarPorId(req.params.id);
            
            if(!atendimentoCadastrado){
                return res.status(404).json("Id não encontrado");
            }

            req.body.psicologo_id = 1;

            await AtendimentoRepository.atualizar(req.params.id, req.body);

            let atendimentoAtualizado = await AtendimentoRepository.buscarPorId(req.params.id);

            return res.status(200).json(atendimentoAtualizado);
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async excluir(req, res) {
        try {
            let atendimentoCadastrado = await AtendimentoRepository.buscarPorId(req.params.id);
            
            if(!atendimentoCadastrado){
                return res.status(404).json("Id não encontrado");
            }

            await AtendimentoRepository.excluir(req.params.id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }
};

export default AtendimentoController;