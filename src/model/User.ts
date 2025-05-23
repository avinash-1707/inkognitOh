import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password?: string;
  verificationCode: string;
  verificationCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  messages: Message[];
  // Google OAuth fields
  googleId?: string;
  avatar?: string;
  name?: string;
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    match: [/.+\@.+\..+/, "Please enter a valid email."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  verificationCode: {
    type: String,
    required: [true, "Verification code is required!"],
    default: "101010",
  },
  verificationCodeExpiry: {
    type: Date,
    required: [true, "Expiry of verification code is required!"],
    default: Date.now() + 3 * 24 * 60 * 60,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
  // Google OAuth fields
  googleId: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple null values
  },
  avatar: {
    type: String,
  },
  name: {
    type: String,
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
