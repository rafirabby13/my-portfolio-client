
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

 const baseUrl='http://localhost:3000'
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        // ...add more providers here
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    console.error("email or pass not found")
                    return null
                }

                console.log("backend eurl   ", process.env.NEXT_PUBLIC_BACKEND_URL)
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        })
                    })
                    if (!res?.ok) {
                        console.log("Register user failed", await res.text())
                        return null
                    }

                    const user = await res.json()
                    console.log("res from backend..........", user)

                    // return user
                    if (user) {
                        // Any object returned will be saved in `user` property of the JWT
                        return {
                            id: user?.user?.id,
                            name: user?.user?.name,
                            email: user?.user?.email,
                            image: user?.user?.image,
                            phone: user?.user?.phone,
                            role: user?.user?.role
                        }
                    } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null

                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                    }

                } catch (error) {
                    console.error("email or pass not found", error)
                    return null
                }
                // Add logic here to look up the user from the credentials supplied
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }


            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt", // ✅ important
    },

    pages: {
        signIn: '/login'
    },
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async jwt({ token, user }: { token: JWT; user: any }) {
            // Add user role to token when user signs in
            if (user) {
                token.id = user.id as string
                token.role = user.role as string
                token.phone = user.phone as string
            }
            return token
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            // Add role to session from token
            if (session.user) {
                session.user.id = token.id as string
                session.user.role = token.role as string
                session.user.phone = token.phone as string
            }
            return session
        },
       
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // async redirect({   token }:{ token: any }): Promise<string> {
        //     // Redirect based on role
        //     if (token?.role === "ADMIN") return `${baseUrl}/dashboard`;
        //     return `${baseUrl}/`; // regular user
        // },
    }

}

// export const handler = NextAuth(authOptions)