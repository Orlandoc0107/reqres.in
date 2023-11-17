import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "eve.holt@reqres.in",
        },
        password: { label: "password", type: "password", placeholder:"cityslicka" },
      },
      async authorize(credentials) {
        const res = await fetch(
            "https://reqres.in/api/login",
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();
        if (user.error) {
          throw new Error(user.error);
        }
      
        // Asegúrate de que la respuesta contenga el token
        const token = user?.token;
      
        if (!token) {
          throw new Error("Token not found in the response");
        }
      
        return { ...user, token };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user'
  }
};
