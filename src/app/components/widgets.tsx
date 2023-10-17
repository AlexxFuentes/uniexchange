'use client'
import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import News from './news';
import Users from './users';

export default function Widgets() {
    const [articleNum, setArticleNum] = useState(3);
    const [randomUserNum, setRandomUserNum] = useState(3);

    const newsResult = [
        { newTitle: 'Titulo de Articulo', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Titulo de Articulo', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Titulo de Articulo', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Titulo de Articulo', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Titulo de Articulo', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Titulo de Articulo', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' },
        { newTitle: 'Titulo de Articulo', newDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', newUrl: 'http://www.google.com', newImg: '/img_prueba.png' }
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

    return (
        <div className='xl:w-[600px] hidden lg:inline ml-8 space-y-5'>
            <div className='w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50'>
                <div className='flex items-center p-3 rounded-full bg-red-300 relative'>
                    <SearchIcon className='h-5 z-50 text-gray-500' />
                    <input
                        className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100'
                        type='text'
                        placeholder='Search Twitter'
                    />
                </div>
            </div>

            <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4'>Whats happening</h4>

                {
                    newsResult.slice(0, articleNum).map((news) => (
                        <News key={news.newTitle} news={news} />
                    ))
                }

                <button className='text-blue-300 pl-4 pb-3 hover:text-blue-400'
                    onClick={() => setArticleNum(articleNum + 3)}
                >
                    Show more
                </button>
            </div>

            <div className='sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]'>
                <h4 className='font-bold text-xl px-4'>Who to follow</h4>

                {
                    randomUsers.slice(0, randomUserNum).map((user) => (
                        <Users key={user.username} user={user} />
                    ))
                }

                <button className='text-blue-300 pl-4 pb-3 hover:text-blue-400'
                    onClick={() => setRandomUserNum(randomUserNum + 3)}
                >
                    Show more
                </button>
            </div>

        </div>
    );
}