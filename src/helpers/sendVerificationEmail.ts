import React from "react";
import nodemailer from "nodemailer";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { render } from "@react-email/render";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verificationCode: string
): Promise<ApiResponse> {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"InkognitOh!" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: "inkognitOh! | Verification email",
      html: VerificationEmail({ username, otp: verificationCode }),
    });

    return { success: true, message: "Verification email sent successfully" };
  } catch (emailError) {
    console.error("❌ Error in sending verification email:", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
