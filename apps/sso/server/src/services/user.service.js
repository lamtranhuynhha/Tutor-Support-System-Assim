import { User } from "../models/user.model.js";

export const UserService = {
  async getUserByUsername(username) {
    const user = User.findOne({ username });
    return user;
  },
};
