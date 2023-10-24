'use client'
import { auth } from '../config/firebase.config'
import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
    signOut, onAuthStateChanged
} from 'firebase/auth'

export const AuthContext = createContext({})

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState(null as any)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            if(!currentuser) {
                setUser(null)
                console.log("no hay usuario");
            } else {
                setUser(currentuser)
            }
        })
        return () => unsubscribe()
    }, [])

    const register = async (email: string, password: string) => {
        try {
            const resp = await createUserWithEmailAndPassword(auth, email, password)
            console.log(resp);
        } catch (error) {
            console.error(error)
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password)
            console.log(resp);
        } catch (error) {
            console.error(error)
        }
    }

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            return await signInWithPopup(auth, provider)
        } catch (error) {
            console.error(error)
        }
    }

    const logoutGoogle = async () => {
        try {
            const resp = await signOut(auth)
            console.log(resp);
        } catch (error) {
            console.error(error)
        }
    }

    const value = {
        auth,
        register,
        login,
        loginWithGoogle,
        logoutGoogle,
        user
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}