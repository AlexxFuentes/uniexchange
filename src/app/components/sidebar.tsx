'use client'
import Image from 'next/image'
import { HomeIcon } from '@heroicons/react/solid'
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'
import SidebarMenuItem from './sidebar-menu-item'

export default function Sidebar() {
    const logoUrl = './avatar.svg'
    const profileUrl = './avatar.svg'

    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
            <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
                <Image width={50} height={50} src={logoUrl} alt={'Logo UniExchange'} />
            </div>

            <div className='mt-4 mb-2.5 xl:items-start'>
                <SidebarMenuItem text='Home' Icon={HomeIcon} active />
                <SidebarMenuItem text='Explore' Icon={HashtagIcon} />
                <SidebarMenuItem text='Notifications' Icon={BellIcon} />
                <SidebarMenuItem text='Messages' Icon={InboxIcon} />
                <SidebarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
                <SidebarMenuItem text='Lists' Icon={ClipboardIcon} />
                <SidebarMenuItem text='Profile' Icon={UserIcon} />
                <SidebarMenuItem text='More' Icon={DotsCircleHorizontalIcon} />
            </div>

            <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
                Post
            </button>

            <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
                <Image className='h-10 w-10 rounded-full xl:mr-2' width={10} height={10} src={profileUrl} alt={''} /> 
                <div className='leading-5 hidden xl:inline'>
                    <h4 className='font-bold'>Alex Fuentes</h4>
                    <p className='text-gray-500'>@aafuentes</p>
                </div>
                <DotsHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
            </div>
        </div>
    )
}
