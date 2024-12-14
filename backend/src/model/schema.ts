import mongoose, { model, Types,  Schema } from "mongoose";
import "./db"
import { boolean } from "zod";
import { hash } from "bcrypt";


const userSchema = new Schema({
    
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

})


const contentTypes = ['tweet', 'document', 'link', 'video'];
const contentSchema = new Schema({
   
    Link : {
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
    // avatar:[ {
    //     type: Types.ObjectId, ref: 'Avatar'
    // }],
    description: {
        type: String,
        require: true
    },
    userId: {
        type: Types.ObjectId, ref: 'User', required: true,
    }
})

const avatarSchema = new Schema({
  
    title: String
})




const linkSchema = new Schema({
    hash: {
        type: String,
    },

    userId: {
        type: Types.ObjectId, ref: 'User', require: true, unique: true
    }
})

export const UserModel = model('User', userSchema);

export const avatarModel = model('Avatar', avatarSchema);

export const contentModel = model('Content', contentSchema);

export const linkModel = model('Link', linkSchema);