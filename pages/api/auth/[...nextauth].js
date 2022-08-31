import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import Api from "@/services/api"
export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "cent-login-otp",
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        phone: { label: "Phone", type: "text" },
        code: { label: "OTP", type: "text" },
      },
      async authorize(credentials, req) {
        const payload = {
          phone: credentials.phone,
          otp: credentials.otp,
        };
        const res = await fetch(`${process.env.API_URL}/api/check-otp`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        });
        const response = await res.json();
        if (response.code === 400) {
          const error = new Error(JSON.stringify(response));
          throw error;
        }
        // If no error and we have user data, return it
        if (res.ok && response.data) {
          return response.data;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { customer, token } = user;
        console.log("test")
        return {
          token,
          user: customer,
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      session.token = token.token;
      session.error = token.error;
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
  debug: process.env.NODE_ENV === "development",
});
