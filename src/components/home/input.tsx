'use client'
import Image from 'next/image'
import { useAuth } from '@/context/auth-context'
import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline'

export default function Input() {

    const profileUrl = './avatar.svg'
    const { user, logout } = useAuth()

    console.log(user);
    return (
        <>{
            user && (
                <div className='flex border-b border-silverSand p-3 space-x-3'>
                    <Image 
                        className='h-11 w-11 rounded-full cursor-pointer hover:brightness-95' width={10} height={10} src={profileUrl} alt={'user-imh'} 
                        onClick={() => logout()}
                    />

                    <div className='w-full divide-y divide-silverSand'>
                        <div className=''>
                            <textarea className='w-full bg-silverSand rounded border-none focus:right-0 text-lg placeholder-arsenic tracking-wide min-h-[50px] text-arsenic' rows={2} placeholder="¿Qué estas pensando?">
                            </textarea>
                        </div>
                        <div className='flex items-center justify-between pt-2.5'>
                            <div className='flex'>
                                <PhotographIcon className='h-10 w-10 hoverEffect p-2 text-black hover:bg-silverSand' />
                                <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 text-black hover:bg-silverSand' />
                            </div>
                            <button className='bg-malibu text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'>
                                Nuevo post
                            </button>
                        </div>
                    </div>
                </div>
            )
        }</>
    )
}