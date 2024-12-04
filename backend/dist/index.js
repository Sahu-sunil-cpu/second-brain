"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./route/routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// signup signin 
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/v1/secondBrain/", routes_1.route);
app.listen(3000, () => {
    console.log("listening to port 3000");
});
