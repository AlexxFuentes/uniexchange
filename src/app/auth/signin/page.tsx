'use client'
import Image from 'next/image'
import { IconGoogle } from '@/components/svg/icons'
import { useAuth } from '@/context/auth-context'
import { useState } from 'react'
import { Form } from '@/components/auth/form'
import FooterEnd from '@/components/landing-page/footer-end'

export default function SignIn() {

    const auth = useAuth()

    // const { displayName }  = auth.user
    // console.log(displayName ? displayName : 'no hay usuario');

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = (e: React.MouseEvent) => {
        e.preventDefault()
        auth.login(email, password)
    }

    const handleLoginGoogle = (e: React.MouseEvent) => {
        e.preventDefault()
        auth.loginWithGoogle()
    }

    const handleLogOutGoogle = (e: React.MouseEvent) => {
        e.preventDefault()
        auth.logoutGoogle()
    }

    const handleLogOut = (e: React.MouseEvent) => {
        e.preventDefault()
        auth.logout()
    }

    return (
        <>
            <div className='min-h-screen bg-silverSand text-arsenic flex justify-center'>
                <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                    <div className='flex-1 bg-white text-center hidden lg:flex border-r'>
                        <div
                            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
                            style={{ backgroundImage: "url('/logo_g.png')" }}
                        ></div>
                    </div>
                    <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                        <div>
                            <Image
                                src='/logo_favico.png'
                                className='w-32 mx-auto'
                                width={100} height={100} alt='logo'
                                priority
                            />
                        </div>
                        <div className='mt-12 flex flex-col items-center'>
                            <h1 className='text-2xl xl:text-3xl font-extrabold mb-5'>
                                Iniciar Sesión
                            </h1>
                            <Form
                                type={false}
                                textButton='Iniciar Sesión'
                                setEmail={setEmail}
                                setPassword={setPassword}
                                handleButton={handleLogin}
                            />

                            <div className='w-full flex-1 mt-8'>
                                <div className='my-12 border-b text-center'>
                                    <div className='leading-none px-2 inline-block text-sm text-arsenic tracking-wide font-medium bg-white transform translate-y-1/2'>
                                        <span>O inicia con</span>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <button
                                        className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-electric text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                                        onClick={handleLoginGoogle}
                                    >
                                        <div className='bg-white p-2 rounded-full'>
                                            <IconGoogle />
                                        </div>
                                        <span className='ml-4'>
                                            Inicia sesión con Google
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterEnd />
        </>
    );
}
