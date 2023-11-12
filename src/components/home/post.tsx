import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db, storage } from '@/config/firebase.config'
import { deleteObject, ref } from 'firebase/storage'
import { useRecoilState } from 'recoil'
import { modalAtom, postIdState } from '@/atom/modalAtom'
import { useAuth } from '@/context/auth-context'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

interface PostProps {
    post: QueryDocumentSnapshot<DocumentData, DocumentData>,
    id: string
}

export default function Post({ post, id }: PostProps) {

    const router = useRouter()
    const [open, setOpen] = useRecoilState(modalAtom)
    const [postId, setPostId] = useRecoilState(postIdState)
    const { login, loginWithGoogle, user } = useAuth()
    const [likes, setLikes] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])
    const [hasLiked, setHasLiked] = useState(false)
    const [comments, setComments] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])

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

    async function likePost() {
        if (user) {
            if (hasLiked) {
                await deleteDoc(doc(db, "posts", id, "likes", user.uid));
            } else {
                await setDoc(doc(db, "posts", id, "likes", user.uid), {
                    displayName: user.displayName,
                });
            }
        } else {
            router.push('/auth/signin')
        }
    }

    async function deletePost() {
        if (window.confirm("Estas seguro de eliminar este post?")) {
            deleteDoc(doc(db, "posts", id));
            if (post.data().image) {
                deleteObject(ref(storage, `posts/${post.id}/image`));
            }
            router.push("/home");
        }
    }

    return (
        <div className='flex p-3 cursor-pointer border-b border-silverSand'>
            <Image className='h-10 w-10 rounded-full mr-4' src={post?.data()?.userImg || './avatar.svg'} alt={'user-img'} width={900} height={100} />

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
                <Image className='rounded-2xl mr-2' src={post?.data()?.image} alt={'post-img'} width={500} height={500} priority />

                <div className='flex justify-between text-gray-500 p-2'>
                    <ChatIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-mySin' />
                    <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-red' />
                    <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-red' />
                    <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-malibu' />
                    <ChartBarIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-malibu' />
                </div>
            </div>
        </div>
    )
}
