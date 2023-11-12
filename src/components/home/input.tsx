'use client'
import Image from 'next/image'
import { useAuth } from '@/context/auth-context'
import { EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '@/config/firebase.config'
import React, { useState, useRef } from 'react'

export default function Input() {

    const profileUrl = './avatar.svg'
    const { user } = useAuth()

    const [input, setInput] = useState<string>('')
    const [selectedFile, setSelectedFile] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const filePickerRef = useRef<HTMLInputElement>(null)

    const sendPost = async () => {
        if (loading) return;
        setLoading(true);

        const docRef = await addDoc(collection(db, 'posts'), {
            id: user?.uid,
            text: input,
            userImg: user?.photoURL,
            timestamp: serverTimestamp(),
            email: user?.email,
            username: user?.email?.split('@')[0],
        });

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        if (selectedFile) {
            await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, 'posts', docRef.id), {
                    image: downloadURL,
                });
            });
        }

        setInput('');
        setSelectedFile(null);
        setLoading(false);
    };

    const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
            setSelectedFile(readerEvent.target && readerEvent.target.result as string);
        };
    };

    return (
        <>{
            user && (
                <div className='flex border-b border-silverSand p-3 space-x-3'>
                    <Image
                        className='h-10 w-10 rounded-full cursor-pointer hover:brightness-95' 
                        width={900} height={100} 
                        src={user.photoURL || './avatar.svg'} 
                        alt={'user-imh'}
                    />

                    <div className='w-full divide-y divide-silverSand'>
                        <div className=''>
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className='w-full bg-silverSand rounded border-none focus:right-0 text-lg placeholder-arsenic tracking-wide min-h-[50px] text-arsenic' 
                                rows={2} placeholder='¿Qué estas pensando?'
                            >
                            </textarea>
                        </div>

                        {
                            selectedFile && (
                                <div className='relative'>
                                    <XIcon
                                        onClick={() => setSelectedFile(null)}
                                        className='border h-7 text-mySin absolute cursor-pointer shadow-md border-mySin m-1 rounded-full'
                                    />
                                    <Image
                                        src={selectedFile}
                                        className={`w-full  ${loading && 'animate-pulse'}`}
                                        width={900} height={100}
                                        alt='img'
                                    />
                                </div>
                            )
                        }

                        <div className='flex items-center justify-between pt-2.5'>
                            {
                                !loading && (
                                    <>
                                        <div className='flex'>
                                            <div
                                                className=''
                                                onClick={() => filePickerRef?.current?.click()}
                                            >
                                                <PhotographIcon className='h-10 w-10 hoverEffect p-2 text-malibu hover:bg-arsenic' />
                                                <input
                                                    type='file'
                                                    hidden
                                                    ref={filePickerRef}
                                                    onChange={addImageToPost}
                                                />
                                            </div>
                                            <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 text-malibu hover:bg-arsenic' />
                                        </div>
                                        <button
                                            onClick={sendPost}
                                            disabled={!input.trim()}
                                            className='bg-malibu text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'
                                        >
                                            Nuevo post
                                        </button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        }</>
    )
}