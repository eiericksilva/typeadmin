import mongoose from "mongoose";

import { Schema } from "mongoose";

const UserSchema = new Schema({
  email: String,
  senha: String,
  role: String,
});

export const UserModel = mongoose.model("UserModel", UserSchema, "users");
