import PacienteRepository from "../repositories/PacienteRepository.js";

class PacienteController{
    static async listar(req, res) {
        try {
            let pacientes = await PacienteRepository.listar();
            return res.status(200).json(pacientes);
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async buscarPorId(req, res){
        try {
            let {id} = req.params;

            let paciente = await PacienteRepository.buscarPorId(id);
            
            if(!paciente){
                return res.status(404).json("Id não encontrado");
            }

            return res.status(200).json(paciente);
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async criar(req, res) {
        try {
            let novoPaciente = await PacienteRepository.criar(req.body);
            return res.status(201).json(novoPaciente);
        } catch (error) {
            console.log(error)
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async atualizar(req, res) {
        try {
            let pacienteCadastrado = await PacienteRepository.buscarPorId(req.params.id);
            
            if(!pacienteCadastrado){
                return res.status(404).json("Id não encontrado");
            }

            await PacienteRepository.atualizar(req.params.id, req.body);

            let pacienteAtualizado = await PacienteRepository.buscarPorId(req.params.id);

            return res.status(200).json(pacienteAtualizado);
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }

    static async excluir(req, res) {
        try {
            let pacienteCadastrado = await PacienteRepository.buscarPorId(req.params.id);
            
            if(!pacienteCadastrado){
                return res.status(404).json("Id não encontrado");
            }

            await PacienteRepository.excluir(req.params.id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({"msg": "Não foi possível realizar esta ação."});
        }
    }
};

export default PacienteController;