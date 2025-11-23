import { asyncHandler } from "@shared/utils/asyncHandler";
import { authService } from "../services/auth.service.js";
import { tokenService } from "../services/token.service.js";
import { env } from "../config/env.js";

export const login = asyncHandler(async (req, res) => {
  // YOUR CODE HERE
  // param = redirect
  // return param
});

export const changePassword = asyncHandler(async (req, res) => {
  // YOUR CODE HERE
});

// FE: mail, username -> api/send-token (data)
// BE: sendToken: check username (in db) and mail (send mail), create token, redis(token, username), req.sub.username, send mail (http://localhost:4002/reset-password?token={token}), return 200
// FE: please check your mail
// User check mail: click link http://localhost:4002/reset-password?token={token}
// FE: pw, confirm pw -> api/reset-password (new pw)
// BE: resetPw: token in param, check token in redis, change pw, delete token, return 200

export const resetPassword = asyncHandler(async (req, res) => {
  const username = req.body.username;
  const mail = req.body.mail;

  const user = await authService.findUser({ username, mail });
  if (!user) return res.status(400).json({ message: "User not found" });

  // Generate token
  const payload = { username: user.username, mail: user.mail };
  const token = await tokenService.generateToken(payload);

  // This url will be sent to user's mail attached with generated Token
  const resetLink = `http://localhost:3002/api/auth/reset-password/${token}`;
  console.log(`http://localhost:3002/api/auth/reset-password/${token}`);
  return res.status(200).json({
    message: "Password reset link generated successfully",
    resetLink,
  });
});

export const resetPasswordToken = asyncHandler(async (req, res) => {
  const token = req.params.token;
  const { username, newpassword } = req.body;

  // Verify extrated Token
  const verified = await tokenService.verifyToken(token);
  if (!verified) return res.status(401).json({ message: "Unauthorized Access!" });

  // Change password
  const user = await authService.resetPassword({ username, newpassword });
  if (user) {
    await tokenService.clearToken(token);
    return res.status(200).json({ message: "Reset password successfully" });
  }
  return res.status(400).json({ message: "User not found" });
});

// delete session
export const logout = asyncHandler(async (req, res) => {
  // YOUR CODE HERE
});
