import { Paciente } from "../models/index.js";

class PacienteRepository {
    static async listar() {
        return await Paciente.findAll();
    }

    static async buscarPorId(id) {
        return await Paciente.findByPk(id);;
    }

    static async criar(data) {
        const novoPaciente = await Paciente.create({
            nome: data.nome,
            nascimento: data.nascimento,
            email: data.email
        });
        return novoPaciente;
    }

    static async atualizar(id, data) {
        return await Paciente.update({
            nome: data.nome,
            nascimento: data.nascimento,
            email: data.email
        }, { where: { id } });
    }

    static async excluir(id) {
        return await Paciente.destroy({ where: { id } });
    }
}

export default PacienteRepository;