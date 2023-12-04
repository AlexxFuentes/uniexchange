import { useRecoilState } from 'recoil';
import { modalState, postIdState } from '@/atom/modalAtom'
import { EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { db } from '@/config/firebase.config'
import { DocumentData, QueryDocumentSnapshot, addDoc, collection, doc, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { useAuth } from '@/context/auth-context'
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image'
import Modal from 'react-modal'

export default function CommentModal() {

    const [open, setOpen] = useRecoilState(modalState)
    const router = useRouter()
    const pathname = usePathname()
    const [postId] = useRecoilState(postIdState)
    const [post, setPost] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>>()
    const [input, setInput] = useState('')
    const { user } = useAuth()

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'posts', postId), (snapshot) => {
            setPost(snapshot as QueryDocumentSnapshot<DocumentData, DocumentData>);
        });
        return () => unsubscribe();
    }, [postId]);

    async function sendComment() {
        await addDoc(collection(db, 'posts', postId, 'comments'), {
            comment: input,
            name: user?.displayName,
            username: user?.email.split("@")[0],
            userImg: user?.photoURL,
            timestamp: serverTimestamp(),
            userId: user?.uid,
        });

        setOpen(false)
        setInput('')

        if (pathname === `/home/posts/${postId}`) {
            router.refresh();
        } else {
            router.push(`/home/posts/${postId}`);
        }
    }

    return (
        <div>
            {open && (
                <Modal
                    isOpen={open}
                    onRequestClose={() => setOpen(false)}
                    className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-arsenic rounded-xl shadow-md"
                >
                    <div className="p-1">
                        <div className="border-b border-arsenic py-2 px-1.5">
                            <div
                                onClick={() => setOpen(false)}
                                className="hoverEffect w-10 h-10 flex items-center justify-center"
                            >
                                <XIcon className="h-[23px] text-arsenic p-0" />
                            </div>
                        </div>
                        <div className="p-2 flex items-center space-x-1 relative">
                            <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-arsenic" />
                            <Image
                                className="h-11 w-11 rounded-full mr-4"
                                src={post?.data()?.userImg}
                                alt="user-img"
                                width={900}
                                height={100}
                            />
                            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
                                {post?.data()?.name}
                            </h4>
                            <span className="text-sm sm:text-[15px]">
                                @{post?.data()?.username} -{" "}
                            </span>
                            {/* <span className="text-sm sm:text-[15px] hover:underline">
                                {post?.data()?.timestamp?.toDate() || new Date().toLocaleDateString()}
                            </span> */}
                        </div>
                        <p className="text-arsenic text-[15px] sm:text-[16px] ml-16 mb-2">
                            {post?.data()?.text}
                        </p>

                        <div className="flex p-3 space-x-3">
                            <Image
                                src={user?.photoURL || '/avatar.svg'}
                                alt="user-img"
                                className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
                                width={900}
                                height={100}
                            />
                            <div className="w-full divide-y divide-arsenic">
                                <div className="">
                                    <textarea
                                        className="w-full border-none focus:ring-0 text-lg placeholder-arsenic tracking-wide min-h-[50px] text-arsenic"
                                        rows={2}
                                        placeholder="respuesta al post"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    ></textarea>
                                </div>

                                <div className="flex items-center justify-between pt-2.5">
                                    <div className="flex">
                                        <div
                                            className=""
                                            // onClick={() => filePickerRef.current.click()}
                                        >
                                            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-malibu hover:bg-mySin" />
                                            {/* <input
                                                type="file"
                                                hidden
                                                ref={filePickerRef}
                                                onChange={addImageToPost}
                                            /> */}
                                        </div>
                                        <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-malibu hover:bg-mySin" />
                                    </div>
                                    <button
                                        onClick={sendComment}
                                        disabled={!input.trim()}
                                        className="bg-malibu text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                                    >
                                        Responder
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}