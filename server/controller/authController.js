import { sendResetCode, sendVerificationCode } from "../middleware/email.js";
import User from "../modals/UserModal.js";

const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const register = async (req, res) => {
  try {
    console.log("req body:", req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const verificationCode = generateVerificationCode();

    const newUser = new User({
      name,
      email,
      password,
      verificationCode,
    });
    console.log("new user: ", newUser);

    await newUser.save();
    sendVerificationCode(newUser.email, verificationCode);

    res.status(200).json({
      message: "Verification code sent, please verify.",
      verificationCode,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export const verifyCode = async (req, res) => {
  try {
    const { email, verificationCode } = req.body;

    if (!email || !verificationCode) {
      return res.status(400).json({ message: "Email and code are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check verification code
    if (user.verificationCode != verificationCode) {
      return res.status(400).json({ message: "Invalid verification code" });
    }

    // Mark user as verified
    user.isVerified = true;
    user.verificationCode = undefined; // Clear the code after successful verification
    await user.save();

    res.status(200).json({ message: "User verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export const forgetPass = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = generateVerificationCode();
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000; // Token expires in 1 hour

    await user.save();

    // Send reset email to the user with the reset token
    sendResetCode(user.email, resetToken); // You'll need to implement this function

    res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, resetToken, newPassword } = req.body;

    if (!email || !resetToken || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if token is valid and not expired
    if (user.resetToken !== resetToken || Date.now() > user.resetTokenExpiry) {
      return res
        .status(400)
        .json({ message: "Invalid or expired reset token" });
    }

    // Directly update the password (No hashing)
    user.password = newPassword;
    user.resetToken = undefined; // Clear the reset token
    user.resetTokenExpiry = undefined; // Clear token expiry

    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};
