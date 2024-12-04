"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const secret = process.env.secret;
console.log(secret);
const authMiddleware = (req, res, next) => {
    const headers = req.headers['authorization'];
    console.log(headers);
    const decode = jsonwebtoken_1.default.verify(headers, secret);
    if (decode) {
        // @ts-ignore
        req.userId = decode;
        next();
        // // @ts-ignore
        console.log("uderid", decode, "cgfhjk");
    }
    else {
        res.status(403).json({
            message: "authentication error"
        });
    }
};
exports.authMiddleware = authMiddleware;
