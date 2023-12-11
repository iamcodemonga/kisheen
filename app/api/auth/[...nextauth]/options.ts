import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { EmailExists } from "@/lib/graphcms";
import bcrypt from "bcrypt"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "e.g johndoe@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials as { email: string, password: string };
                try {
                    const exists = await EmailExists(email);
                    if (exists.length < 1) {
                        throw new Error("User does not exist!");
                    }

                    const match = await bcrypt.compare(password, exists[0].password)
                    if (!match) {
                        throw new Error("Email and Password is incorrect!");
                    } else {
                        const user = exists[0];
                        return user;
                    }
                } catch (error) {
                    console.log(error)
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        newUser: "/dashboard"
    },
}