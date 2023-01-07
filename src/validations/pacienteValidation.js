import { validate, Joi } from "express-validation";

const validationRules = {
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        nascimento: Joi.date().iso().required()
    })
};

export default validate(validationRules);