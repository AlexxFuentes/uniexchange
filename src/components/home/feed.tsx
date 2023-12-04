import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { SparklesIcon } from '@heroicons/react/outline'
import Post from './post'
import Input from './input'
import { useEffect, useState } from 'react'
import { db } from '@/config/firebase.config'

export default function Feed() {

    const [posts, setPosts] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])

    useEffect(() => {
        return onSnapshot(
            query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
            (snapshot) => {
                setPosts(snapshot.docs)
            }
        )
    }, [])

    return (
        <div className='border-l border-r border-silverSand xl:min-w-max min-h-screen flex-grow max-w-2xl'>
            <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand'>
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Inicio</h2>
                <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                    <SparklesIcon className='h-5 w-5 text-malibu cursor-pointer' />
                </div>
            </div>

            <Input />

            <div className='h-[calc(100vh-200px)] max-w-2xl scrollbar-thumb-paste overflow-y-auto scrollbar-track-malibu scrollbar-thin text-sm xl:text-base'>
                {
                    posts.map((post) => (<Post key={post.id} post={post} id={post.id} />))
                }
            </div>
        </div>
    )
}
