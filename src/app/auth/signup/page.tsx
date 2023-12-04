'use client'
import Image from 'next/image'
import { IconGoogle } from '@/components/svg/icons'
import { useAuth } from '@/context/auth-context'
import { useState } from 'react'
import { Form } from '@/components/auth/form'
import FooterEnd from '@/components/landing-page/footer-end'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '@/config/firebase.config'

export default function SignUp() {

    const auth = useAuth()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passConfirm, setPassConfirm] = useState<string>('')
    const [nameInstitution, setNameInstitution] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const [is_university, setIsUniversity] = useState<boolean>(false);
    const [is_teacher, setIsTeacher] = useState<boolean>(false);
    const [is_student, setIsStudent] = useState<boolean>(false);

    const handleRegister = async (e: React.MouseEvent) => {
        e.preventDefault()

        if (password !== passConfirm) {
            alert('Las contraseñas no coinciden')
            return
        }

        const rest = await auth.register(email, password)

        if(is_university) {
            await addDoc(collection(db, 'universities'), {
                description: description,
                direccion: address,
                nombre: nameInstitution,
                pais: country,
                is_university: is_university,
                timestamp: serverTimestamp(),
                usr_id: rest.user.uid,
            });
        } else if(is_teacher) {
            await addDoc(collection(db, 'teachers'), {
                is_teacher: is_teacher,
                timestamp: serverTimestamp(),
                usr_id: rest.user.uid,
            });
        } else if(is_student) {
            await addDoc(collection(db, 'students'), {
                is_student: is_student,
                timestamp: serverTimestamp(),
                usr_id: rest.user.uid,
            });
        }
    }

    const handleLoginGoogle = (e: React.MouseEvent) => {
        e.preventDefault()
        auth.loginWithGoogle()
    }

    return (
        <>
            <div className='min-h-screen bg-silverSand text-arsenic flex justify-center'>
                <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                    <div className='flex-1 bg-white text-center hidden lg:flex border-r'>
                        <div
                            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
                            style={{ backgroundImage: "url('/logo_g.png')" }}
                        ></div>
                    </div>
                    <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>

                        {/* <Image
                            src='/logo_favico.png'
                            className='w-32 mx-auto'
                            width={100} height={100} alt='logo'
                            priority
                        /> */}

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
                                setDescriotion={setDescription}
                                setIsUniversity={setIsUniversity}
                                setIsTeacher={setIsTeacher}
                                setIsStudent={setIsStudent}
                                is_student={is_student}
                                is_teacher={is_teacher}
                                is_university={is_university}
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
            <FooterEnd />
        </>
    );
}
