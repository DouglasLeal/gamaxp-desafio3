import Psicologo from "../models/Psicologo.js";

class PsicologoRepository {
    static async listar() {
        return await Psicologo.findAll();
    }

    static async buscarPorId(id) {
        return await Psicologo.findByPk(id);;
    }

    static async criar(data) {
        const novoPsicologo = await Psicologo.create({
            nome: data.nome,
            apresentacao: data.apresentacao,
            email: data.email,
            senha: data.senha
        });
        return novoPsicologo;
    }

    static async atualizar(id, data) {
        return await Psicologo.update({
            nome: data.nome,
            apresentacao: data.apresentacao,
            email: data.email,
            senha: data.senha
        }, {where: {id}});
    }

    static async excluir(id) {
        return await Psicologo.destroy({where: {id}});
    }
}

export default PsicologoRepository;