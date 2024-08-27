import accountApiRequest from '@/apiRequest/account';
import authApiRequest from '@/apiRequest/auth';
import { InvalidEmailPassword } from '@/lib/errors';
import { HttpError } from '@/lib/http';
import { IUser } from '@/lib/types';
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials
          const res = await authApiRequest.login({ email, password });
          const accessToken = res.payload.data.access_token as string;

          const profile = await accountApiRequest.meInserver(accessToken);
          console.log(profile);
          let user = profile.payload.data as IUser
          // if (user.role !== 'ADMIN') {
          //   throw new InvalidEmailPassword('Loi abx');
          // }

          return {
            ...user,
            accessToken
          };
        } catch (error) {
          if (error instanceof HttpError) {
            throw new InvalidEmailPassword(error.payload.message);
          }
          throw new Error('co loi xay ra')
        }
      }
    })
  ],
  pages: {
    signIn: 'auth/login'
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = (user as any)
      }
      return token
    },
    session: ({ session, token }) => {
      (session.user as any) = token.user;
      return session
    },
    // authorized: async ({ auth }) => {
    //   // Logged in users are authenticated, otherwise redirect to login page
    //   return !!auth
    // },
  }
})