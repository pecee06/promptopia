import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import connect from "@/utils/database";
import User from "@/models/user.model";
import {googleClientId, googleClientSecret} from "@/utils/env.js"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret
        })
    ],
    callbacks: {
        async currentSession ({session}){
            try {
                const sessionUser = User.findOne({
                    email: session.user.email
                })
                session.user.id = sessionUser._id.toString()
                return session
            } catch (err) {
                console.log(err.session);
                return null
            }
        },
        async signIn ({profile}){
            try {
                const res = await connect()
                if (res){
                    const userExists = User.findOne({email: profile.email})
        
                    if (!userExists){
                        await User.create({
                            email: profile.email,
                            username: profile.name.replace(" ","").toLowerCase(),
                            image: profile.picture
                        })
                    }
        
                    return true
                }

                throw new Error("Unable to sign in")
            } catch (err) {
                console.log(err.message);
                return false
            }
        }
    }
})

export {handler as GET, handler as POST}