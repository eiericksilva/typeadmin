import { UserModel } from "../models/user.model.js";

export const getUser = async (email) => {
  const user = await UserModel.findOne({
    email,
  });

  return user;
};
