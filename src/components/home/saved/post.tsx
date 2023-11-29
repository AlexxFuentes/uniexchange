'use client'
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, TrashIcon } from '@heroicons/react/outline'
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/config/firebase.config'
import { useAuth } from '@/context/auth-context'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface PostProps {
    post: {
        id: string;
        name: string;
        username: string;
        userImg: string;
        img: string;
        text: string;
        timestamp: string;
    };
}

export default function Post({ post, id }: PostProps) {

    const { login, loginWithGoogle, user } = useAuth()
    const [likes, setLikes] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])
    const [hasLiked, setHasLiked] = useState(false)
    const [comments, setComments] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'posts', id, 'comments'),
            (snapshot) => setComments(snapshot.docs)
        )
        return () => unsubscribe()
    }, [db])

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'posts', id, 'likes'),
            (snapshot) => setLikes(snapshot.docs)
        )
        return () => unsubscribe()
    }, [db])

    useEffect(() => {
        setHasLiked(likes.findIndex((like) => like.id === user?.uid) !== -1)
    }, [likes])

    return (
        <div className='flex p-4 cursor-pointer border-b border-silverSand'>
            <Image className='h-10 w-10 rounded-full mr-4' src={post?.data()?.userImg || './avatar.svg'} alt={'user-img'} width={600} height={80} />

            <div className='flex-1'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-1 whitespace-nowrap'>
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
                            {post?.data()?.name}
                        </h4>
                        <span className='text-sm sm:text-[15px] text-arsenic'>
                            @{post?.data()?.username}-{" "}
                        </span>
                        <span className="text-sm sm:text-[15px] hover:underline">
                            {post?.data().timestamp?.toDate().toLocaleDateString()}
                        </span>
                        <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-silverSand hover:text-black p-2' />
                    </div>
                </div>
                <p 
                    onClick={() => router.push(`/post/${post.id}`)}
                    className='text-arsenic text-[15px] sm:text-[16px] mb-2'
                >
                    {post?.data()?.text}
                </p>
                <Image className='rounded-2xl mr-4' src={post?.data()?.image} alt={'post-img'} width={400} height={400} priority />

                <div className='flex justify-left p-2'>
                    <HeartIcon className='ml-2 text-gray-500 h-10 w-10 hoverEffect p-2 hover:bg-arsenic hover:text-red' />
                    <ChatIcon className='ml-2 text-gray-500 h-10 w-10 hoverEffect p-2 hover:bg-arsenic hover:text-mySin' />
                    <TrashIcon className='ml-2 text-gray-500 h-10 w-10 hoverEffect p-2 hover:bg-arsenic hover:text-red' />
                    <BookmarkIcon className='ml-2 h-10 w-10 hoverEffect p-2 hover:text-mySin text-mySin' />
                </div>
            </div>
        </div>
    )
}
