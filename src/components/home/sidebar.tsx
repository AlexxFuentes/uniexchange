'use client'
import {
    BellIcon, BookmarkIcon,
    DotsHorizontalIcon, CurrencyDollarIcon,
    AcademicCapIcon, LibraryIcon, LogoutIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import { HomeIcon } from '@heroicons/react/solid'
import SidebarMenuItem from './sidebar-menu-item'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    const profileUrl = './avatar.svg'
    const router = useRouter()

    const { user, logout, login, } = useAuth()

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault()
        logout()
        router.push('/')
    }

    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>

            {
                user && (
                    <div className='hoverEffect text-arsenic flex items-center justify-center xl:justify-start'>
                        <Image 
                            className='h-10 w-10 rounded-full xl:mr-2' 
                            width={900} height={100} 
                            src={user.photoURL} 
                            alt={'profile img'} 
                        />
                        <div className='leading-5 hidden xl:inline'>
                            <h4 className='font-bold'>{user.displayName}</h4>
                            <p className='text-arsenic'>@{user.email.split('@')[0]}</p>
                        </div>
                        <DotsHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
                    </div>
                )
            }

            <div className='mt-4 mb-2.5 xl:items-start'>
                <SidebarMenuItem text='Inicio' Icon={HomeIcon} active />
                <SidebarMenuItem text='Universidades' Icon={LibraryIcon} />
                {
                    user && (
                        <>
                            <SidebarMenuItem text='Notificaciones' Icon={BellIcon} />
                            <SidebarMenuItem text='Guardados' Icon={BookmarkIcon} />
                            <SidebarMenuItem text='Facultades' Icon={AcademicCapIcon} />
                            <SidebarMenuItem text='suscripciones' Icon={CurrencyDollarIcon} />
                        </>
                    )
                }
            </div>

            {
                user ? (
                    <>
                        <button className='bg-malibu text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
                            Post
                        </button>
                        <div className='hoverEffect text-arsenic flex items-center xl:justify-end mt-auto'>
                            <button onClick={handleLogout} className='flex justify-center items-center'>
                                <LogoutIcon className='h-9 px-3' />
                                <span className='hidden xl:inline'>Salir</span>
                            </button>
                        </div>
                    </>
                ) : (
                    <Link href='/auth/signin'>
                        <button
                            className='bg-malibu text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'
                        >
                            Iniciar sesión
                        </button>
                    </Link>
                )
            }
        </div>
    )
}
