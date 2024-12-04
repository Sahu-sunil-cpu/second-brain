"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContent = exports.validateBody = void 0;
const zod_1 = require("zod");
exports.validateBody = zod_1.z.object({
    name: zod_1.z.string(),
    password: zod_1.z.string(),
    mail: zod_1.z.string().email().optional()
});
exports.validateContent = zod_1.z.object({
    title: zod_1.z.string().min(0).max(200),
    Link: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    tags: zod_1.z.array(zod_1.z.object({ title: zod_1.z.string() })).optional(),
    userId: zod_1.z.string().optional(),
});
