"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkModel = exports.contentModel = exports.TagModel = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
require("./db");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require: true,
        unique: true
    }
});
const contentTypes = ['tweet', 'document', 'link', 'video'];
const contentSchema = new mongoose_1.Schema({
    Link: {
        type: String
    },
    type: {
        type: String,
        enum: contentTypes,
        required: true,
    },
    title: {
        type: String
    },
    // tag: {
    //     type: Types.ObjectId, ref: 'Tag'
    // },
    tag: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose_1.Types.ObjectId, ref: 'User', required: true,
    }
});
const tagSchema = new mongoose_1.Schema({
    title: String
});
const linkSchema = new mongoose_1.Schema({
    hash: {
        type: String,
    },
    userId: {
        type: mongoose_1.Types.ObjectId, ref: 'User', require: true, unique: true
    }
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
exports.TagModel = (0, mongoose_1.model)('Tag', tagSchema);
exports.contentModel = (0, mongoose_1.model)('Content', contentSchema);
exports.linkModel = (0, mongoose_1.model)('Link', linkSchema);
