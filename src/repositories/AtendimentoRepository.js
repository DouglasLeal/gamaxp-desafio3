import { Atendimento, Paciente, Psicologo } from "../models/index.js";

class AtendimentoRepository {
    static async listar() {
        return await Atendimento.findAll({
            include: [{ model: Paciente }, { model: Psicologo, attributes: {exclude: ['senha']} }]
        });
    }

    static async buscarPorId(id) {
        return await Atendimento.findByPk(id);;
    }

    static async criar(data) {
        const novoAtendimento = await Atendimento.create({
            paciente_id: data.paciente_id,
            psicologo_id: data.psicologo_id,
            observacao: data.observacao,
            data_atendimento: data.data_atendimento
        });
        return novoAtendimento;
    }

    static async atualizar(id, data) {
        return await Atendimento.update({
            paciente_id: data.paciente_id,
            psicologo_id: data.psicologo_id,
            observacao: data.observacao,
            data_atendimento: data.data_atendimento
        }, { where: { id } });
    }

    static async excluir(id) {
        return await Atendimento.destroy({ where: { id } });
    }
}

export default AtendimentoRepository;