import NextAuth, { AuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'E-Email' },
        password: { label: 'Password', type: 'password' },
        formType: {},
      },
      async authorize(credentials, req): Promise<any> {
        const email = credentials?.email;
        const password = credentials?.password;
        const formType = credentials?.formType;

        if (!email || !password) {
          throw new Error('Missing credentials');
        }

        switch (formType) {
          case 'signIn':
            break;
          case 'signUp':

          default:
            break;
        }

        const user = { id: 1, name: 'J Smith', email: 'jsm', image: '' };

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('signIn');
      return true;
    },
    async jwt({ token, user, account, profile }) {
      console.log('jwt', { token });

      if (user) {
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token, user }) {
      console.log('session', { session });

      if (token) {
        session.user!.email = token.email;
      }

      return session;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
