import { validate, Joi } from "express-validation";

const validationRules = {
    body: Joi.object({
        nome: Joi.string().required(),
        apresentacao: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(6).required(),
    })
};

export default validate(validationRules);