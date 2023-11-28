'use client'
import Image from 'next/image'
import { IconGoogle } from '@/components/svg/icons'
import { useAuth } from '@/context/auth-context'
import { useState } from 'react'
import { Form } from '@/components/auth/form'

export default function SignUp() {

    const auth = useAuth()
    // const { displayName }  = auth.user
    // console.log(displayName ? displayName : 'no hay usuario');

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passConfirm, setPassConfirm] = useState<string>('')
    const [nameInstitution, setNameInstitution] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [descriotion, setDescriotion] = useState<string>('')

    const [is_university, setIsUniversity] = useState<boolean>(false);
    const [is_teacher, setIsTeacher] = useState<boolean>(false);
    const [is_student, setIsStudent] = useState<boolean>(false);

    const handleRegister = (e: React.MouseEvent) => {
        e.preventDefault()

        if (password !== passConfirm) {
            alert('Las contraseñas no coinciden')
            return
        }

        auth.register(email, password)
    }

    // const sendPost = async () => {
    //     if (loading) return;
    //     setLoading(true);

    //     const docRef = await addDoc(collection(db, 'posts'), {
    //         id: user?.uid,
    //         text: input,
    //         userImg: user?.photoURL,
    //         timestamp: serverTimestamp(),
    //         email: user?.email,
    //         username: user?.email?.split('@')[0],
    //     });

    //     const imageRef = ref(storage, `posts/${docRef.id}/image`);

    //     if (selectedFile) {
    //         await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
    //             const downloadURL = await getDownloadURL(imageRef);
    //             await updateDoc(doc(db, 'posts', docRef.id), {
    //                 image: downloadURL,
    //             });
    //         });
    //     }

    //     setInput('');
    //     setSelectedFile(null);
    //     setLoading(false);
    // };

    const handleLoginGoogle = (e: React.MouseEvent) => {
        e.preventDefault()
        auth.loginWithGoogle()
    }

    return (
        <div className='min-h-screen bg-silverSand text-arsenic flex justify-center'>
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='flex-1 bg-white text-center hidden lg:flex border-r'>
                    <div
                        className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
                        style={{ backgroundImage: "url('/logo_g.png')" }}
                    ></div>
                </div>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    {/* <div>
                        <Image 
                            src='/logo_favico.png' 
                            className='w-32 mx-auto' 
                            width={100} height={100} alt='logo' 
                            priority
                        />
                    </div> */}
                    <div className='mt-4 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extrabold mb-5'>
                            Registrate
                        </h1>
                        <Form
                            type
                            textButton='Registrate'
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setPassConfirm={setPassConfirm}
                            setNameInstitution={setNameInstitution}
                            setCountry={setCountry}
                            setAddress={setAddress}
                            setDescriotion={setDescriotion}
                            handleButton={handleRegister}
                        />

                        <div className='w-full flex-1'>
                            <div className='my-4 border-b text-center'>
                                <div className='leading-none px-2 inline-block text-sm text-arsenic tracking-wide font-medium bg-white transform translate-y-1/2'>
                                    <span>O registrate con</span>
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <button
                                    className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-electric text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                                    onClick={handleLoginGoogle}
                                >
                                    <div className='bg-white p-2 rounded-full'>
                                        <IconGoogle />
                                    </div>
                                    <span className='ml-4'>
                                        Registrate con Google
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
