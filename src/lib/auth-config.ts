import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// Extender los tipos de NextAuth
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    role: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
  }
}

// Mock de base de datos de usuarios (en producción esto vendría de una base de datos real)
const users = [
  {
    id: '1',
    email: 'admin@promocion2024.com',
    password: '$2b$12$cx2NlRm9xon.m9owJyHPGOMetdcaQKMyF2V.4T.wRXTbt3c/fhAk.', // "admin123"
    name: 'Administrador',
    role: 'admin',
  },
  {
    id: '2',
    email: 'estudiante@promocion2024.com',
    password: '$2b$12$qsR3s6U7bYlqLc6rTzcOVuZCjoxHZuSOWsAudQQ3Y8MnWwIZhROuO', // "estudiante123"
    name: 'María González',
    role: 'student',
  },
  // Aquí se pueden agregar más usuarios de la promoción
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = users.find(user => user.email === credentials.email);
        
        if (!user) {
          return null;
        }

        // Verificar contraseña
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        
        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      }
    })
  ],
  session: {
    strategy: 'jwt' as const,
    maxAge: 86400, // La sesión dura un día (24 horas)
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
    verifyRequest: '/login',
  },
};
