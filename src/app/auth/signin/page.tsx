import Image from 'next/image'
import { IconGoogle, IconGithub, IconUserRegister } from '../../../components/svg/icons'
import { SigninAuthServer } from '@/components/auth/signin-auth-server'

export default function Signin() {
    return (
        <div className='min-h-screen bg-silverSand text-arsenic flex justify-center'>
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div>
                        <Image src="/logo_favico.png" className="w-32 mx-auto" width={100} height={100} alt='logo' />
                    </div>
                    <div className="mt-12 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold mb-5">
                            Registrate
                        </h1>
                        <div className="mx-auto max-w-xs">
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                                type="email"
                                placeholder="Email"
                            />
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white mt-5"
                                type="password"
                                placeholder="Password"
                            />
                            <button className="mt-5 tracking-wide font-semibold bg-mySin text-arsenic w-full py-4 rounded-lg hover:bg-electric hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <IconUserRegister />
                                <span className="ml-3">
                                    Registrate
                                </span>
                            </button>
                        </div>

                        <div className="w-full flex-1 mt-8">
                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-arsenic tracking-wide font-medium bg-white transform translate-y-1/2">
                                    <span>O regístrate</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-electric text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <IconGoogle />
                                    </div>
                                    <span className="ml-4">
                                        Registrate con Google
                                    </span>
                                </button>

                                {/* <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div className="bg-white p-1 rounded-full">
                                        <IconGithub />
                                    </div>
                                    <span className="ml-4">
                                        Registrate con GitHub
                                    </span>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-arsenic text-center hidden lg:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/logo_g.png')" }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
