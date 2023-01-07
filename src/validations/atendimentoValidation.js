import { validate, Joi } from "express-validation";

const validationRules = {
    body: Joi.object({
        paciente_id: Joi.number().integer().required(),
        data_atendimento: Joi.date().iso().required(),
        observacao: Joi.string().required()
    }),
};

export default validate(validationRules);