import { transporter } from "./email.config.js";

export const sendVerificationCode = async (email, verificationCode) => {
  try {
    const info = await transporter.sendMail({
      from: '"Support Team" <support@example.com>', // sender address
      to: email, // recipient email
      subject: "Your Verification Code Inside!", // subject line
      text: `Hi there! Your verification code is: ${verificationCode}. Please enter this code to complete your registration. If this wasn't you, ignore this email.`, // plain text body
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #333;">Welcome to Our Service!</h2>
            <p>We're excited to have you onboard! Please use the verification code below to complete your registration.</p>
            <p><strong>Your unique verification code is:</strong></p>
            <h1 style="background: #f4f4f4; padding: 10px 20px; border-radius: 4px; display: inline-block; color: #333;">${verificationCode}</h1>
            <p>Please enter this code on the verification page to complete your registration.</p>
            <p style="color: #555; font-size: 14px;">If you did not request this, please ignore this email.</p>
            <hr style="border: none; height: 1px; background: #e0e0e0;">
            <p style="text-align: center; font-size: 12px; color: #999;">&copy; 2024 Support Team. All rights reserved.</p>
          </div>
        `,
    });

    console.log("Email sent: ", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

export const sendResetCode = async (email, verificationCode) => {
  try {
    const info = await transporter.sendMail({
      from: '"Support Team" <support@example.com>', // sender address
      to: email, // recipient email
      subject: "Your Password reset Code Inside!", // subject line
      text: `Hi there! Your password reset code is: ${verificationCode}. Please enter this code to reset your password. If this wasn't you, ignore this email.`, // plain text body
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #333;">Welcome to Our Service!</h2>
            <p>We're excited to have you onboard! Please use the verification code below to complete your registration.</p>
            <p><strong>Your unique verification code is:</strong></p>
            <h1 style="background: #f4f4f4; padding: 10px 20px; border-radius: 4px; display: inline-block; color: #333;">${verificationCode}</h1>
            <p>Please enter this code on the verification page to complete your registration.</p>
            <p style="color: #555; font-size: 14px;">If you did not request this, please ignore this email.</p>
            <hr style="border: none; height: 1px; background: #e0e0e0;">
            <p style="text-align: center; font-size: 12px; color: #999;">&copy; 2024 Support Team. All rights reserved.</p>
          </div>
        `,
    });

    console.log("Email sent: ", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};
