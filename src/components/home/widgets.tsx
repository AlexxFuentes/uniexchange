'use client'
import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import News from './news';
import Publicity from './publicity';
import Users from './users';

export default function Widgets() {
    const [articleNum, setArticleNum] = useState(2);
    const [publicityNum, setPublicityNum] = useState(2); // [TODO] add publicity
    const [randomUserNum, setRandomUserNum] = useState(2);

    const newsResult = [
        { newTitle: 'Facultad 1', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Facultad 2', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Facultad 3', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Facultad 4', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Facultad 5', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Facultad 6', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Facultad 7', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' }
    ]

    const randomUsers = [
        { username: 'username1', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' },
        { username: 'username2', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' },
        { username: 'username3', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' },
        { username: 'username4', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' },
        { username: 'username5', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' },
        { username: 'username6', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' },
        { username: 'username7', userImg: '/img_prueba.png', firtsname: 'firstname', lastname: 'lastname' }
    ]

    const publicity = [
        { publicityTitle: 'publicity 1', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: 'http://www.google.com', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 2', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: 'http://www.google.com', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 3', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: 'http://www.google.com', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 4', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: 'http://www.google.com', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 5', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: 'http://www.google.com', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 6', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: 'http://www.google.com', publicityImg: '/img_prueba.png' },
        { publicityTitle: 'publicity 7', publicityDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', publicityUrl: 'http://www.google.com', publicityImg: '/img_prueba.png' }
    ]

    return (
        <div className='xl:w-[600px] hidden lg:inline ml-8 mb-4 space-y-5'>
            <div className='w-[90%] xl:w-[75%] sticky top-0 py-1.5 z-50'>
                <div className='flex items-center p-3 rounded-full bg-silverSand relative'>
                    <SearchIcon className='h-5 z-50 text-arsenic' />
                    <input
                        className='absolute inset-0 rounded-full pl-11 bg-silverSand border-arsenic text-blackWhite focus:shadow-lg focus:bg-white'
                        type='text'
                        placeholder='buscar'
                    />
                </div>
            </div>

            <div className='space-y-3 text-center bg-white shadow-2xl rounded-xl pt-2 w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4 text-arsenic'>Facultades</h4>

                {
                    newsResult.slice(0, articleNum).map((news) => (
                        <News key={news.newTitle} news={news} />
                    ))
                }

                <button className='text-arsenic pl-4 pb-3 hover:text-mySin'
                    onClick={() => setArticleNum(articleNum + 2)}
                >
                    mostrar más
                </button>
            </div>

            <div className='space-y-3 text-center bg-white shadow-2xl rounded-xl pt-2 w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4 text-arsenic'>Publicidad</h4>

                {
                    publicity.slice(0, publicityNum).map((publicity) => (
                        <Publicity key={publicity.publicityTitle} publicity={publicity} />
                    ))
                }

                <button className='text-arsenic pl-4 pb-3 hover:text-mySin'
                    onClick={() => setPublicityNum(publicityNum + 2)}
                >
                    mostrar más
                </button>
            </div>

            <div className='sticky top-16 text-center text-silverSand space-y-3 bg-white shadow-2xl pt-2 rounded-xl w-[90%] xl:w-[75%]'>
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