'use client'
import Image from 'next/image'
import { useAuth } from '@/context/auth-context'
import { EmojiHappyIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '@/config/firebase.config'
import React, { useState, useRef } from 'react'

export default function InputCalificationProf() {

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


    return (
        <>{
            user && (
                <div className='flex border-b border-silverSand p-6 space-x-3'>
                    
                    <Image
                        className='h-10 w-10 rounded-full cursor-pointer hover:brightness-95' 
                        width={900} height={100} 
                        src={user.photoURL || './avatar.svg'} 
                        alt={'user-imh'}
                    />
                    
                    <div className='w-4/5 divide-silverSand'>
                        <div className=''>
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className='w-full bg-white rounded-lg border border-arsenic text-md placeholder-gray tracking-wide min-h-[30px] text-center h-6' 
                                rows={2} placeholder='¿Cuál es tu opinión sobre el docente?'
                            >
                            </textarea>
                        </div>

                        <div className='flex items-center justify-between pt-1.0'>
                            {
                                !loading && (
                                    <>
                                        <div className='flex'>
                                            <div
                                                className=''
                                                onClick={() => filePickerRef?.current?.click()}
                                            >
                                            </div>
                                            <EmojiHappyIcon className='h-10 w-10 hoverEffect p-2 text-arsenic hover:bg-malibu' />
                                        </div>
                                        <button
                                            onClick={sendPost}
                                            disabled={!input.trim()}
                                            className='bg-arsenic text-white px-6 py-1 rounded-lg font-bold shadow-md hover:bg-malibu disabled:opacity-70'
                                        >
                                            Comentar
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