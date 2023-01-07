import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';

dotenv.config();

class AuthMiddleware {
    static autenticar(req, res, next) {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({ message: "O token não foi especificado." });
        }

        const splitToken = authorization.split(" ");

        if (splitToken.length !== 2) {
            return res.status(401).json({ message: "O token está mal formatado." });
        }

        const [key, token] = splitToken;

        if (key.indexOf("Bearer") < 0) {
            return res.status(401).json({ message: "O token está mal formatado." });
        }

        try {
            const data = jwt.verify(token, process.env.SECRET);

            req.AUTH = data;
            return next();
        } catch (error) {
            return res.status(401).json({ message: "Token inválido. Faça login novamente." });
        }
    }
}

export default AuthMiddleware;