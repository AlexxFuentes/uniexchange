'use client'
import { auth, db } from '../config/firebase.config'
import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { onSnapshot, collection, query, where } from 'firebase/firestore'

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
    uid: string,
    providerId?: string,
    is_estudiante?: boolean,
    is_profesor?: boolean,
    is_universidad?: boolean,
}

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()

    function findTeacher(fieldValue: string): Promise<boolean> {
        const res = query(collection(db, 'teachers'), where("usr_id", "==", fieldValue));

        return new Promise((resolve) => {
            const unsub = onSnapshot(res, (snapshot) => {
                if (snapshot.docs.length > 0) {
                    resolve(snapshot.docs[0].data().is_teacher);
                } else {
                    resolve(false);
                }
            });
        });
    }

    function findUniversity(fieldValue: string): Promise<boolean> {
        const res = query(collection(db, 'universities'), where("usr_id", "==", fieldValue));

        return new Promise((resolve) => {
            const unsub = onSnapshot(res, (snapshot) => {
                if (snapshot.docs.length > 0) {
                    resolve(snapshot.docs[0].data().is_university);
                } else {
                    resolve(false);
                }
            });
        });
    }

    function findStudent(fieldValue: string): Promise<boolean> {
        const res = query(collection(db, 'students'), where("usr_id", "==", fieldValue));

        return new Promise((resolve) => {
            const unsub = onSnapshot(res, (snapshot) => {
                if (snapshot.docs.length > 0) {
                    resolve(snapshot.docs[0].data().is_student);
                } else {
                    resolve(false);
                }
            });
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            if (!currentuser) {
                setUser(null);
                console.log("no hay usuario");
            } else {
                const { displayName, email, photoURL, uid, providerId } = currentuser as User;
                setUser({ displayName: displayName || '', email: email || '', photoURL: photoURL || '', uid, providerId });

                Promise.all([findTeacher(uid), findUniversity(uid), findStudent(uid)]).then((values) => {
                    if (values[0]) {
                        setUser({ displayName: displayName || '', email: email || '', photoURL: photoURL || '', uid, providerId, is_profesor: true });
                        router.push('/home')
                    } else if (values[1]) {
                        setUser({ displayName: displayName || '', email: email || '', photoURL: photoURL || '', uid, providerId, is_universidad: true });
                        router.push('/university')
                    } else if (values[2]) {
                        setUser({ displayName: displayName || '', email: email || '', photoURL: photoURL || '', uid, providerId, is_estudiante: true });
                        router.push('/home')
                    }
                });
            }
        })
        return () => unsubscribe()
    }, [router])

    const register = async (email: string, password: string) => {
        try {
            const resp = await createUserWithEmailAndPassword(auth, email, password)
            router.push('/home')
            return resp
        } catch (error) {
            console.error(error)
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const resp = await signInWithEmailAndPassword(auth, email, password)
            // router.push('/home')     
            return resp
        } catch (error) {
            console.error(error)
        }
    }

    const logout = async () => {
        await signOut(auth)
    };

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider()
            setUser(
                {
                    displayName: auth.currentUser?.displayName || '',
                    email: auth.currentUser?.email || '',
                    photoURL: auth.currentUser?.photoURL || '',
                    uid: auth.currentUser?.uid || '',
                    providerId: provider.providerId || ''
                }
            )
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

    return <AuthContext.Provider value={{ auth, register, login, logout, loginWithGoogle, logoutGoogle, user }}>{children}</AuthContext.Provider>
}