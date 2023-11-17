'use client'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import CommentModal from '@/components/home/comment-modal'
import Sidebar from '@/components/home/sidebar'
import Widgets from '@/components/home/widgets'
import Post from '@/components/home/post'
import Comment from '@/components/home/comment'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { db } from '@/config/firebase.config'
import { DocumentData, QueryDocumentSnapshot, collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore'

export default function PostPage({ params }: { params: { id: string } }) {
    const router = useRouter()
    const { id } = params

    const [post, setPost] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>>();
    const [comments, setComments] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([]);

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
        <main className='flex min-h-screen mx-auto'>
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <div className='xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
                <div className='flex items-center space-x-2  py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
                    <div className='hoverEffect' onClick={() => router.push('/home')}>
                        <ArrowLeftIcon className='h-5 ' />
                    </div>
                    <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>
                        Post
                    </h2>
                </div>

                {
                    post && <Post id={id} post={post} />                    
                }

                {comments.length > 0 && (
                    <div className=''>
                        {comments.map((comment) => (

                            <Comment
                                key={comment.id}
                                commentId={comment.id}
                                originalPostId={id}
                                comment={comment}
                            />

                        ))}
                    </div>
                )}
            </div>

            {/* Widgets */}

            {/* <Widgets
                    newsResults={newsResults.articles}
                    randomUsersResults={randomUsersResults.results}
                /> */}
            <Widgets />

            {/* Modal */}
            <CommentModal />
        </main>
    )
}