"use strict";
///  error handling is remaining
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../middleware");
const schema_1 = require("../model/schema");
require("dotenv/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const validation_1 = require("../validation");
const utils_1 = require("../utils");
const secret = (_a = process.env.secret) !== null && _a !== void 0 ? _a : "";
console.log(secret);
exports.route = express_1.default.Router();
exports.route.get("/contents", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    console.log("cjvchj", userId);
    try {
        const getContents = yield schema_1.contentModel.find({ userId: userId });
        console.log(getContents);
        res.json(getContents);
    }
    catch (err) {
        console.log(err);
        res.json(err);
    }
}));
exports.route.post("/addContent", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success, error } = validation_1.validateContent.safeParse(req.body);
    if (!success) {
        res.send(error);
        return;
    }
    //@ts-ignore
    const userId = req.userId;
    const { Link, title, type, tag } = req.body;
    console.log(Link, title, type, tag);
    try {
        const addContent = yield schema_1.contentModel.create({
            userId: userId,
            title,
            type,
            Link,
            tag,
        });
        res.send("content added");
    }
    catch (err) {
        console.log(err);
        res.json(err);
    }
}));
exports.route.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { success, error } = validation_1.validateBody.safeParse(req.body);
    if (!success) {
        res.send("unexpected format");
        return;
    }
    //@ts-ignore 
    const userId = req.userId;
    const { name, password, mail } = req.body;
    const response = yield schema_1.UserModel.findOne({ name: name });
    if (!response) {
        res.json({
            "message": "user not found"
        });
        return;
    }
    /// password   verifying
    const passwordMatch = yield bcrypt_1.default.compare(password, (_a = response.password) !== null && _a !== void 0 ? _a : "");
    if (passwordMatch) {
        const id = response._id.toString();
        //  console.log("-------->",userEntry._id.toString(),"---->", secret)
        const JWT = jsonwebtoken_1.default.sign(id, secret);
        res.json({
            "token": JWT
        });
    }
    else {
        res.sendStatus(404).json({
            "message": "you are not signed up, please signup first",
        });
    }
}));
exports.route.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { success, error } = validation_1.validateBody.safeParse(req.body);
    if (!success) {
        res.send(error);
        return;
    }
    const { name, password, mail } = req.body;
    console.log(password, name, mail);
    const userExist = yield schema_1.UserModel.findOne({ mail: mail });
    if (!userExist) {
        //////////////////// passwordhashing
        const hash = yield bcrypt_1.default.hash(password, 5);
        const userEntry = yield schema_1.UserModel.create({
            name,
            password: hash,
            mail
        });
        const id = userEntry._id.toString();
        console.log("-------->", userEntry._id.toString(), "---->", secret);
        const JWT = jsonwebtoken_1.default.sign(id, secret);
        res.json({
            "token": JWT
        });
    }
    else {
        res.json({
            "message": "you did something wrong"
        });
    }
}));
exports.route.delete("/deleteContent", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    //@ts-ignore
    const userId = req.userId;
    try {
        const content = yield schema_1.contentModel.findByIdAndDelete(id);
        res.send(content);
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
}));
exports.route.post("/share", middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { share } = req.body;
    //@ts-ignore
    const userId = req.userId;
    if (share) {
        const User_Link_Exist = yield schema_1.linkModel.findOne({
            userId: userId,
        });
        if (User_Link_Exist) {
            res.send({
                hash: User_Link_Exist.hash,
            });
            return;
        }
        const getHash = (0, utils_1.random)(10);
        yield schema_1.linkModel.create({
            userId: userId,
            hash: getHash,
        });
        res.json({
            shareLink: "http://localhost:3000/v1/secondBrain/" + getHash
        });
    }
    else {
        yield schema_1.linkModel.deleteOne({
            userId: userId
        });
        res.json("you have disabled shareing your brain");
    }
}));
exports.route.get("/:shareLink", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shareLink } = req.params;
    const matchLink = yield schema_1.linkModel.findOne({
        hash: shareLink,
    });
    if (matchLink) {
        const contents = yield schema_1.contentModel.find({ userId: matchLink.userId });
        res.send(contents);
    }
    else {
        res.send("brain is not shareable");
    }
}));
