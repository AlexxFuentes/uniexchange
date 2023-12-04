'use client'
import { BellIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Notification from './notification';

const NotificationsResult = [
    { title: 'Nombre de Facultad 1', imgn: '/img_prueba.png' },
    { title: 'Nombre de Facultad 2', imgn: '/img_prueba.png' },
    { title: 'Nombre de Facultad 3', imgn: '/img_prueba.png' },
    { title: 'Nombre de Facultad 4', imgn: '/img_prueba.png' },
    { title: 'Nombre de Facultad 5', imgn: '/img_prueba.png' },
    { title: 'Nombre de Facultad 6', imgn: '/img_prueba.png' },
    { title: 'Nombre de Facultad 7', imgn: '/img_prueba.png' },
    { title: 'Nombre de Facultad 8', imgn: '/img_prueba.png' },
]

export default function Notifications() {

    const [articleNum, setArticleNum] = useState(2);

    return (
        <div className='border-l border-r border-silverSand xl:min-w-[600px] flex-grow max-w-2xl h-screen overflow-y-auto scrollbar-thumb-paste scrollbar-thin text-sm xl:text-base'>
            <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand bg-white'>
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Notificaciones</h2>
                <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                    <BellIcon className='h-7 w-7 text-arsenic cursor-pointer' />
                </div>
            </div>

            <div className='xl:w-[600px] hidden lg:inline mb-4 space-y-5'>
                <div className='w-[90%] xl:w-[75%] sticky top-0 py-1.5 z-50'></div>
                {
                    NotificationsResult.slice(0, articleNum).map((notification) => (<Notification key={notification.title} notification={notification} />))
                }

                <div className='flex justify-center pb-3'>
                    <button className='text-arsenic hover:text-mySin' onClick={() => setArticleNum(articleNum + 3)}>
                        mostrar más
                    </button>
                </div>
            </div>
        </div>
    );
}