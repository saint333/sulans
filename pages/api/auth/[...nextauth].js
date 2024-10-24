import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Ingrese el usuario" },
          password: { label: "Password", type: "password", placeholder: "Ingrese la contraseña" }
        },
        async authorize(credentials) {
          console.log("🚀 ~ authorize ~ credentials:", credentials)
          // Aquí deberías implementar la lógica para verificar las credenciales.
          // Este ejemplo asume que el usuario y la contraseña están correctos.
          const user = { id: 1, name: "David Granados", email: "david@example.com" };
  
          if (credentials.username === "usuario" && credentials.password === "contraseña") {
            return user;
          } else {
            // Si no se verifican las credenciales, devuelve null o lanza un error.
            return null;
          }
        }
      })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/login',
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session({ session, token }) {
        session.user.id = token.id;
        return session;
      }
    }
  });