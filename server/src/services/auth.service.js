import { User } from "../models/user.model.js";
import { signToken } from "../utils/jwt.js";
import { AppError } from "../utils/AppError.js";

export const authService = {
  async login({ mail, password }) {
    // YOUR CODE HERE
  },
  async changePassword({ userId, currentPassword, newPassword }) {
    // YOUR CODE HERE
  },
  async forgotPassword({ mail }) {
    // YOUR CODE HERE
  },
  async logout({ userId }) {
    // YOUR CODE HERE
  },
};
