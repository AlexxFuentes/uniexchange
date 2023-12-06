'use client'
import Image from 'next/image'
import { AcademicCapIcon } from '@heroicons/react/outline'
import { useState, useRef, useEffect } from 'react'
import { DocumentData, QueryDocumentSnapshot, collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@/config/firebase.config';
import { useAuth } from '@/context/auth-context';

export default function Perfil({ params }: { params: { id: string } }) {

    const { id } = params
    const { user } = useAuth()
    const [loading, setLoading] = useState<boolean>(false)
    const filePickerRef = useRef<HTMLInputElement>(null)
    const [student, setStudent] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>>()
    const [professor, setProfessor] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>>()


    useEffect(() => {
        if (!id) return

        if(user?.is_estudiante){   
            const res = query(collection(db, 'students'), where("usr_id", "==", id));         
            
            onSnapshot(
                res,
                (snapshot) => setStudent(snapshot.docs[0] as QueryDocumentSnapshot<DocumentData, DocumentData>)
            )

        } else if(user?.is_profesor){
            const res = query(collection(db, 'teachers'), where("usr_id", "==", id)); 
            
            onSnapshot(
                res,
                (snapshot) => setProfessor(snapshot.docs[0] as QueryDocumentSnapshot<DocumentData, DocumentData>)
            )
        }
        
    }, [id, user?.is_estudiante, user?.is_profesor]);

    return (
        <main className='flex justify-start w-full min-h-screen mx-auto'>
            <div className='w-full border-l border-r border-silverSand ml-0 flex-grow  '>
                <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand'>
                    <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>{(student && `Estudiante`) || (professor && `Docente`)}</h2>
                    <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                        <AcademicCapIcon className='h-7 w-7 text-arsenic cursor-pointer' />
                    </div>
                </div>
                <section className="boxBig flex-1 flex flex-col my-3">
                        <div className="mx-2 border-b-[1px] border-b-silverSand p-5 sm:flex justify-between items-center"
                            key={(student && student?.data().usr_id) || (professor && professor?.data().usr_id)}>
                            <div className="sm:flex justify-center items-center gap-4 mr-2">
                                <Image
                                    src={`/avatar.svg`}
                                    className="cursor-pointer rounded-lg w-full max-w-[6rem] md:max-w-[9rem] xl:max-w-[8rem] m-auto"
                                    width={900} height={100}
                                    alt='img'
                                    priority
                                />
                                <div className="flex text-center sm:text-justify flex-col gap-1 my-2 sm:my-0">
                                    <h1 className="font-semibold text-base md:text-lg xl:text-xl inset-0 opacity-80">Nombre: {(student && student?.data().names) || (professor && professor?.data().names)}</h1>
                                    <div className="ml-2 font-normal text-base md:text-md xl:text-md inset-0 opacity-70">
                                        <div><span className='font-bold pr-2'>Dirección:</span>{(student && student?.data().direccion) || (professor && professor?.data().direccion)}</div>
                                        <div><span className='font-bold pr-2'>Correo:</span>{(student && student?.data().correo) || (professor && professor?.data().correo)}</div>
                                        <div><span className='font-bold pr-2'>País:</span>País: {(student && student?.data().pais) || (professor && professor?.data().pais)}</div>
                                        <div><span className='font-bold pr-2'>Género:</span>Masculino</div>
                                    </div>
                                    <div className='p-2 flex opacity-40'></div>
                                    <h2 className='font-semibold text-base md:text-lg xl:text-xl inset-0 opacity-80'>Información general</h2>
                                    <div className="ml-2 font-thin opacity-70">Te has unido a: 0 Facultades</div>
                                    <div className="ml-2 font-thin opacity-70">Has hecho: 0 Publicaciones</div>
                                </div>
                            </div>
                        </div>
                </section>

                <section className='border-b border-silverSand'>
                    <div className='p-4 sm:ml-[23px] sm:text-x text-arsenic'>
                        El {(student && `estudiante ${student?.data().names}`) || (professor && `docente ${professor?.data().names}`)}, se unió a nosotros en el
                        año 2023 y que lleva una gran trayectoria como profesional.
                    </div>
                </section>
                <section className='flex flex-col justify-center items-center py-5'>
                    <button className='p-4 mb-8 bg-malibu text-white px-6 py-1 rounded-lg font-bold shadow-md hover:bg-arsenic disabled:opacity-70'>
                        Editar
                    </button>
                    <button className='p-4 mb-8  bg-malibu text-white px-6 py-1 rounded-lg font-bold shadow-md hover:bg-arsenic disabled:opacity-70'>
                        Ver Universidades
                    </button>
                </section>
            </div>
        </main>
    );
}