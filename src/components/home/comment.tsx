import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { DocumentData, QueryDocumentSnapshot, collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db, storage } from '@/config/firebase.config'
import { useAuth } from '@/context/auth-context'
import { useState, useEffect } from 'react'
import { deleteObject, ref } from 'firebase/storage'
import { useRecoilState } from 'recoil'
import Image from 'next/image'
import { modalState, postIdState } from '@/atom/modalAtom'
import { useRouter } from 'next/navigation'

interface CommentProps {
    comment: QueryDocumentSnapshot<DocumentData, DocumentData>,
    commentId: string,
    originalPostId: string
}

export default function Comment({ comment, commentId, originalPostId }: CommentProps) {

    const { user } = useAuth()
    const [likes, setLikes] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])
    const [hasLiked, setHasLiked] = useState(false)
    const [open, setOpen] = useRecoilState(modalState)
    const [postId, setPostId] = useRecoilState(postIdState)
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'posts', originalPostId, 'comments', commentId, 'likes'),
            (snapshot) => setLikes(snapshot.docs)
        );
        return () => unsubscribe();
    }, [originalPostId, commentId]);

    useEffect(() => {
        setHasLiked(
            likes.findIndex((like) => like.id === user?.uid) !== -1
        )
    }, [likes, user?.uid]);

    async function likeComment() {
        if (user) {
            if (hasLiked) {
                await deleteDoc(
                    doc(db, 'posts', originalPostId, 'comments', commentId, 'likes', user?.uid)
                )
            } else {
                await setDoc(
                    doc(db, 'posts', originalPostId, 'comments', commentId, 'likes', user?.uid),
                    { username: user?.displayName }
                )
            }
        } else {
            router.push('/auth/signin')
        }
    }

    async function deleteComment() {
        if (window.confirm('¿Esta seguro que quiere eliminar el comentario?')) {
            deleteDoc(doc(db, 'posts', originalPostId, 'comments', commentId));
        }
    }

    return (
        <div className='flex p-3 cursor-pointer border-b border-arsenic pl-20'>
            {/* user image */}
            <Image
                className='h-11 w-11 rounded-full mr-4'
                src={comment?.data().userImg || '/avatar.svg'}
                alt='user-img'
                width={900}
                height={100}
            />
            {/* right side */}
            <div className='flex-1'>
                {/* Header */}
                <div className='flex items-center justify-between'>
                    {/* post user info */}
                    <div className='flex items-center space-x-1 whitespace-nowrap'>
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
                            {comment?.data().name}
                        </h4>
                        <span className='text-sm sm:text-[15px]'>
                            @{comment?.data().username} -{' '}
                        </span>
                        <span className='text-sm sm:text-[15px] hover:underline'>
                            {comment?.data().timestamp?.toDate().toLocaleDateString()}
                        </span>
                    </div>
                    <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 ' />
                </div>

                {/* post text */}
                <p className='text-gray-800 text-[15px sm:text-[16px] mb-2'>
                    {comment?.data().comment}
                </p>

                {/* icons */}
                <div className='flex justify-between text-gray-500 p-2'>
                    <div className='flex items-center select-none'>
                        <ChatIcon
                            onClick={() => {
                                if (!user) {
                                    router.push('/auth/signin');
                                } else {
                                    setPostId(originalPostId);
                                    setOpen(!open);
                                }
                            }}
                            className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100'
                        />
                    </div>
                    {user?.uid === comment?.data().userId && (
                        <TrashIcon
                            onClick={deleteComment}
                            className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100'
                        />
                    )}
                    <div className='flex items-center'>
                        {hasLiked ? (
                            <HeartIconFilled
                                onClick={likeComment}
                                className='h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100'
                            />
                        ) : (
                            <HeartIcon
                                onClick={likeComment}
                                className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100'
                            />
                        )}
                        {likes.length > 0 && (
                            <span
                                className={`${hasLiked && 'text-red-600'} text-sm select-none`}
                            >
                                {likes.length}
                            </span>
                        )}
                    </div>

                    <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
                    <ChartBarIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
                </div>
            </div>
        </div>
    )
}