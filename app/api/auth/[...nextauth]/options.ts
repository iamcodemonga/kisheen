import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
// import { EmailExists } from "@/lib/graphcms";
// import bcrypt from "bcrypt"

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
                const api = process.env.API_ROOT;
                try {
                    const { data } = await axios.post(`${api}/auth/login`, {email, password});
                    if (data.error) {
                        throw new Error(data.message);
                    }
                    return data.user;
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