'use client'
import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import News from './news'
import Publicity from './publicity'
import Users from './users'
import { AnimatePresence, motion } from 'framer-motion'

export default function Widgets() {
    const [articleNum, setArticleNum] = useState(2);
    const [publicityNum, setPublicityNum] = useState(2);
    const [randomUserNum, setRandomUserNum] = useState(2);

    const newsResult = [
        { newTitle: 'Ingeneria en sistemas', newDescription: 'El olimpo.', newUrl: '/home/faculty', newImg: '/LogoSistemas.jpg' },
        { newTitle: 'Ciencias medicas', newDescription: 'Medicina', newUrl: '/home/faculty', newImg: '/LogoMedicina.png' },
      /*   { newTitle: 'Ingeneria en sistemas', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: '/home/faculty', newImg: '/img_prueba.png' },
        { newTitle: 'Ingeneria en sistemas', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: '/home/faculty', newImg: '/img_prueba.png' },
        { newTitle: 'Ingeneria en sistemas', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: '/home/faculty', newImg: '/img_prueba.png' },
        { newTitle: 'Ingeneria en sistemas', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: '/home/faculty', newImg: '/img_prueba.png' },
        { newTitle: 'Ingeneria en sistemas', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: '/home/faculty', newImg: '/img_prueba.png' } */
    ]

    const randomUsers = [
        { username: 'Heryweik', userImg: '/avatar.svg', firtsname: 'Yhonny', lastname: 'Aplicano' },
        { username: 'OSCAR', userImg: '/avatar.svg', firtsname: 'Oscar', lastname: 'Hernan' },
        { username: 'Ririchy', userImg: '/avatar.svg', firtsname: 'Ayline', lastname: 'Lopez' },
        { username: 'Soff', userImg: '/avatar.svg', firtsname: 'Sofy', lastname: 'Rodriguez' },
        /* { username: 'username5', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' },
        { username: 'username6', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' },
        { username: 'username7', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' } */
    ]

    const publicity = [
        { publicityTitle: 'Baleadas UNAH', publicityDescription: 'Las mejores baleadas de laaaaaaaaaaaaaa universidad.', publicityUrl: '/home/faculty', publicityImg: '/baleadas.png' },
        /* { publicityTitle: 'publicity 2', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: '/home/faculty', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 3', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: '/home/faculty', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 4', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: '/home/faculty', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 5', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: '/home/faculty', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 6', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: '/home/faculty', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 7', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: '/home/faculty', publicityImg: '/img_prueba.png' } */
    ]

    return (
        <div className='hidden xl:w-full lg:inline px-5 space-y-5 h-screen pb-7 overflow-y-auto scrollbar-thumb-paste scrollbar-track-silverSand scrollbar-thin'>
            <div className='w-[90%] xl:w-[75%] sticky top-0 py-1.5 z-50'>
                <div className='flex items-center p-3 rounded-full bg-white relative'>
                    <SearchIcon className='h-5 z-50 text-arsenic' />
                    <input
                        className='absolute inset-0 rounded-full pl-11 bg-white border-arsenic text-blackWhite shadow-2xl focus:shadow-lg focus:bg-white'
                        type='text'
                        placeholder='buscar'
                    />
                </div>
            </div>

            <div className='space-y-3 text-center bg-white shadow-2xl rounded-xl pt-2 w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4 text-arsenic'>Facultades</h4>

                <AnimatePresence>
                    {
                        newsResult.slice(0, articleNum).map((news) => (
                            <motion.div
                                key={news.newTitle}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <News key={news.newTitle} news={news} />
                            </motion.div>
                        ))
                    }
                </AnimatePresence>

                <button className='text-arsenic pl-4 pb-3 hover:text-mySin'
                    onClick={() => setArticleNum(articleNum + 2)}
                >
                    mostrar más
                </button>
            </div>

            <div className='space-y-3 text-center bg-white shadow-2xl rounded-xl pt-2 w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4 text-arsenic'>Publicidad</h4>

                <AnimatePresence>
                    {
                        publicity.slice(0, publicityNum).map((publicity) => (
                            <motion.div
                                key={publicity.publicityTitle}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <Publicity key={publicity.publicityTitle} publicity={publicity} />
                            </motion.div>
                        ))
                    }
                </AnimatePresence>

                <button className='text-arsenic pl-4 pb-3 hover:text-mySin'
                    onClick={() => setPublicityNum(publicityNum + 2)}
                >
                    mostrar más
                </button>
            </div>

            <div className=' top-16 text-center text-silverSand space-y-3 bg-white shadow-2xl py-2 rounded-xl w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4 text-arsenic'>Usuarios</h4>

                {
                    randomUsers.slice(0, randomUserNum).map((user) => (
                        <Users key={user.username} user={user} />
                    ))
                }

                <button className='text-arsenic pl-4 pb-3 hover:text-mySin'
                    onClick={() => setRandomUserNum(randomUserNum + 2)}
                >
                    mostrar más
                </button>
            </div>

        </div>
    );
}