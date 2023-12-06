'use client'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import CommentModal from '@/components/home/comment-modal'
import Widgets from '@/components/home/widgets'
import Post from '@/components/home/post'
import Comment from '@/components/home/comment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { db } from '@/config/firebase.config'
import { DocumentData, QueryDocumentSnapshot, collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { AnimatePresence, motion } from "framer-motion"

export default function PostPage({ params }: { params: { id: string } }) {
    const { id } = params
    const router = useRouter()
    const [post, setPost] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>>()
    const [comments, setComments] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])

    // get the post data
    useEffect(() => {
        if (!id) return

        onSnapshot(
            doc(db, 'posts', id),
            (snapshot) => setPost(snapshot as QueryDocumentSnapshot<DocumentData, DocumentData>)
        )
    }, [id]);


    // get comments of the post
    useEffect(() => {
        return onSnapshot(
            query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')),
            (snapshot) => setComments(snapshot.docs)
        );
    }, [id]);

    return (
        <>
            <div className='border-l border-r border-silverSand xl:min-w-max min-h-screen flex-grow max-w-2xl '>
                <div className='flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-arsenic'>
                    <div className='hoverEffect' onClick={() => router.push('/home')}>
                        <ArrowLeftIcon className='h-5 ' />
                    </div>
                    <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>
                        Post
                    </h2>
                </div>


                <div className='h-[calc(100vh-100px)] max-w-2xl scrollbar-thumb-paste overflow-y-auto scrollbar-track-malibu scrollbar-thin text-sm xl:text-base'>
                    {
                        post && <Post id={id} post={post} />
                    }

                    {comments.length > 0 && (
                        <div className=''>
                            <AnimatePresence>
                                {comments.map((comment) => (
                                    <motion.div
                                        key={comment.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                    >
                                        <Comment
                                            key={comment.id}
                                            commentId={comment.id}
                                            originalPostId={id}
                                            comment={comment}
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>

            {/* Widgets */}

            {/* <Widgets
                    newsResults={newsResults.articles}
                    randomUsersResults={randomUsersResults.results}
                /> */}
            <Widgets />

            {/* Modal */}
            <CommentModal />
        </>
    )
}