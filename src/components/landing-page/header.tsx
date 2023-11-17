'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
 
    return (
        <header className='bg-white dark:bg-arsenic'>{/*fixed w-full*/}
            <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    <div className='flex-1 md:flex md:items-center md:gap-12'>
                        <a className='block text-arsenic dark:text-white' href='/'>
                            <Image
                                src={'/logo_sidebar.png'}
                                className='w-40  hover:brightness-95' width={900} height={20} alt={'logo img'} priority                               
                            />
                        </a>
                    </div>

                    <div className='md:flex md:items-center md:gap-12'>
                        <nav aria-label='Global' className='hidden md:block'>
                            <ul className='flex items-center gap-6 text-sm'>
                                <li>
                                    <Link
                                        className='text-black font-bold transition hover:text-arsenic/75 dark:text-white dark:hover:text-white/75'
                                        href='/home'
                                    >
                                        Inicio
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className='text-black font-bold transition hover:text-arsenic/75 dark:text-white dark:hover:text-white/75'
                                        href='/'
                                    >
                                        Información
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className='text-black font-bold transition hover:text-arsenic/75 dark:text-white dark:hover:text-white/75'
                                        href='/'
                                    >
                                        Ayuda
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className='text-black font-bold transition hover:text-arsenic/75 dark:text-white dark:hover:text-white/75'
                                        href='/'
                                    >
                                        Contacto
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className='flex items-center gap-4'>
                            <div className='sm:flex sm:gap-4'>
                                <Link
                                    className='rounded-md bg-mySin font-bold px-7 py-1.5 text-sm text-white shadow dark:hover:bg-teal-500'
                                    href='/plans'
                                >
                                    Planes
                                </Link>
                            </div>

                            <div className='block md:hidden'>
                                <button
                                    className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-5 w-5'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M4 6h16M4 12h16M4 18h16'
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}