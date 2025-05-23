import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await UserModel.findOne({
            $or: [
              { username: credentials.identifier },
              { email: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error("No user found with this email");
          }
          if (!user.isVerified) {
            throw new Error("Please verify your account first!");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password as string
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Incorrect Password!");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        await dbConnect();

        try {
          // Check if user already exists with this email
          const existingUser = await UserModel.findOne({
            email: user.email,
          });

          if (existingUser) {
            // If user exists but doesn't have Google linked
            if (!existingUser.googleId) {
              existingUser.googleId = account.providerAccountId;
              existingUser.isVerified = true; // Google accounts are pre-verified
              await existingUser.save();
            }
            return true;
          } else {
            // Create new user from Google account
            const newUser = new UserModel({
              username: user.email?.split("@")[0], // Generate unique username
              email: user.email,
              googleId: account.providerAccountId,
              isVerified: true, // Google accounts are pre-verified
              isAcceptingMessage: true,
              messages: [],
              // No password needed for Google users
              avatar: user.image || null,
              name: user.name || null,
            });

            await newUser.save();
            return true;
          }
        } catch (error) {
          console.error("Error during Google sign in:", error);
          return false;
        }
      }
      return true;
    },

    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.isAcceptingMessages = token.isAcceptingMessages;
        session.user.username = token.username || token.email?.split("@")[0];
      }
      return session;
    },
    async jwt({ token, user, account }) {
      // If this is the first time the JWT is being created (sign in)
      if (user && account) {
        if (account.provider === "credentials") {
          // For credentials provider, user object comes from authorize function
          token._id = user._id?.toString();
          token.isVerified = user.isVerified;
          token.username = user.username;
          token.isAcceptingMessages = user.isAcceptingMessages;
        } else if (account.provider === "google") {
          // For Google provider, we need to fetch the user from database
          await dbConnect();
          const dbUser = await UserModel.findOne({ email: user.email });

          if (dbUser) {
            token._id = dbUser._id?.toString();
            token.isVerified = dbUser.isVerified;
            token.username = dbUser.username;
            token.isAcceptingMessages = dbUser.isAcceptingMessages;
          }
        }
      }
      return token;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 5 * 24 * 60 * 60, // 2 days for session expiration
  },
  secret: process.env.NEXTAUTH_SECRET,
};
