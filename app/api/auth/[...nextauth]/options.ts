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
                const exists = await EmailExists(credentials?.email as string);

                if (exists.length < 1) {
                    return null;
                }

                const match = await bcrypt.compare(credentials?.password as string, exists[0].password)

                if (!match) {
                    return null;
                } else {
                    const user = exists[0];
                    return user;
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 90 * 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
}