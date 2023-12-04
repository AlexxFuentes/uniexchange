
import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { BookmarkIcon } from '@heroicons/react/outline'
import Post from './post'
import { useEffect, useState } from 'react'
import { db } from '@/config/firebase.config'

export default function Saved() {
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
        <div className='border-l border-r border-silverSand xl:min-w-[576px] flex-grow max-w-2xl h-screen overflow-y-auto scrollbar-thumb-paste scrollbar-thin text-sm xl:text-base'>
            <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand bg-white'>
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Guardados</h2>
                <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                    <BookmarkIcon className='h-7 w-7 text-arsenic cursor-pointer' />
                </div>
            </div>

            {posts.map((post) => (<Post key={post.id} post={post} id={post.id} />))}
        </div>
    )
}