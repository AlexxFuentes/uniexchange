'use client'
import { auth } from '../config/firebase.config'
import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
    signOut, onAuthStateChanged
} from 'firebase/auth'
import { useRouter } from 'next/navigation'


interface AuthContextProps {
    auth: any,
    register: (email: string, password: string) => void,
    login: (email: string, password: string) => void,
    logout: () => void,
    loginWithGoogle: () => void,
    logoutGoogle: () => void,
    user: User | null,
}

export const AuthContext = createContext({} as AuthContextProps)

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}

interface User {
    displayName: string
    email: string
    photoURL: string,
    uid: string
}

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            if(!currentuser) {
                setUser(null);
                console.log("no hay usuario");
            } else {
                const { displayName, email, photoURL, uid } = currentuser as User;
                setUser({ displayName: displayName || '', email: email || '', photoURL: photoURL || '', uid });
            }
        })
        return () => unsubscribe()
    }, [])

    const register = async (email: string, password: string) => {
        try {
            const resp = await createUserWithEmailAndPassword(auth, email, password)
            // console.log(resp);
            router.push('/home')
            return resp
        } catch (error) {
            console.error(error)
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password)
            router.push('/home')
            // console.log(resp);         
            return   
        } catch (error) {
            console.error(error)
        }
    }

    const logout = async () => {
        const response = await signOut(auth);
        console.log(response);
    };

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            await signInWithPopup(auth, provider)
            router.push('/home')
            return 
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

    return <AuthContext.Provider value={{auth, register, login, logout, loginWithGoogle, logoutGoogle, user}}>{children}</AuthContext.Provider>
}