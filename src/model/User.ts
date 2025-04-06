import mongoose,{ Schema, Document, models, Mongoose } from "mongoose";

export interface Message extends Document{
    content : string,
    createdAt : Date
}

const MessageSchema:Schema<Message> = new Schema({
    content : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
})

export interface User extends Document{
    username : string,
    email : string,
    password : string,
    verificationCode : string,
    verificationCodeExpiry : Date,
    isVerfied : boolean,
    isAcceptingMessage : boolean,
    messages : Message []
}

const UserSchema: Schema<User> = new Schema({
    username : {
        type : String,
        required : [true,"Username is required!"],
        trim : true,
        unique : true
    },
    email : {
        type : String,
        required : [true,"Email is required!"],
        match : [/.+\@.+\..+/,"Please enter a valid email."],
        unique : true
    },
    password : {
        type : String,
        required : [true,"Password is required!"]
    },
    verificationCode : {
        type : String,
        required : [true,"Verification code is required!"]
    },
    verificationCodeExpiry : {
        type : Date,
        required : [true,"Expiry of verification code is required!"]
    },
    isVerfied : {
        type : Boolean,
        default : false
    },
    isAcceptingMessage : {
        type : Boolean,
        default : true
    },
    messages : [MessageSchema]
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema);

export default UserModel;