'use client'
import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Image from 'next/image'
import { AcademicCapIcon } from '@heroicons/react/outline'
import InputCalifications from './InputCalifications'
import { useState, useRef } from 'react'
import Estrellas from './Estrellas'
import Comentarios from "./Comentarios"
import { EmojiHappyIcon } from '@heroicons/react/outline'


export default function Professors() {

    interface Professor {
        id: number;
        image: any;
        nombre: string;
        descripcion: string;
        calificacion: number;
        cantidadCalificaciones: number;
    }

    const professors: Professor[] = [
        {
            id: 1,
            image: "../avatar.svg",
            nombre: "Erick Vladimir",
            descripcion: "Docente de ingenieria.",
            calificacion: 4.5,
            cantidadCalificaciones: 20,
        },
    ];

    const posts = [
        {
            id: "1",
            name: "John Doe",
            username: "johndoe",
            userImg: "./avatar.svg",
            img: "/img_prueba.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eu nisl. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eu nisl.",
            timestamp: "1 hour ago",
        },
        {
            id: "2",
            name: "John Doe",
            username: "johndoe",
            userImg: "./avatar.svg",
            img: "/img_prueba.png",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eu nisl. Sed euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl eu nisl.",
            timestamp: "1 hour ago",
        }
    ]


    const [loading, setLoading] = useState<boolean>(false)
    const filePickerRef = useRef<HTMLInputElement>(null)

    return (
        // border-l border-r border-silverSand xl:min-w-max h-full flex-grow max-w-xl
        <div className=' border-l border-r border-silverSand xl:min-w-[576px] flex-grow max-w-xl'>
            {/*El Encabezado*/}
            <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand'>
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Docentes</h2>
                <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                    <AcademicCapIcon className='h-7 w-7 text-arsenic cursor-pointer' />
                </div>
            </div>

            {/*Sub Encabezado*/}
            <section className="boxBig flex-1 flex flex-col">
                {professors.map((professor) => (
                    <div className="mx-2 border-b-[1px] border-b-silverSand p-5 sm:flex justify-between items-center"
                        key={professor.id}>
                        <div className="sm:flex justify-center items-center gap-4 mr-2">
                            <Image
                                src='../avatar.svg'
                                className='rounded-lg w-full max-w-[6rem] md:max-w-[9rem] xl:max-w-[8rem] m-auto'
                                width={100} height={100} alt='logo img'
                                priority
                            />
                            {/* <img
                                src={`../avatar.svg`}
                                alt="logo img"
                                className="rounded-lg w-full max-w-[6rem] md:max-w-[9rem] xl:max-w-[8rem] m-auto "
                            /> */}
                            {/*Perfil profesor*/}
                            <div className="flex text-center sm:text-justify flex-col gap-1 my-2 sm:my-0">
                                <h1 className="font-bold text-base md:text-lg xl:text-xl inset-0">
                                    Erick Vladimir
                                </h1>

                                <h2 className="flex items-center justify-center sm:justify-start">
                                    <div className="bg-mySin rounded-full p-2 border-[2px] border-arsenic z-10">
                                        <h1 className="font-bold text-base md:text-lg xl:text-xl">{professor.calificacion}</h1>
                                    </div>
                                    <div className="bg-mySin p-2 pl-7 rounded-2xl border-[2px] border-arsenic ml-[-25px]">
                                        <Estrellas cuantity={professor.calificacion} />
                                    </div>
                                    <div className='text-silverSand font-light p-4'>{professor.cantidadCalificaciones} calificaciones</div>
                                </h2>

                                <div className="font-thin">
                                    El ingeniero Erick, un gran catedrático que se unió a nosotros en el
                                    año 2023 y que lleva una gran trayectoria como profesional con sus proyectos y productos,
                                    entre ellos Betty, un producto que viene a generar empleos y a dar soluciones en varios ámbitos.
                                    Sus conocimientos vienen a dar un aprendizaje diferente y muy bueno para los estudiantes.
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/*Asignar calificación*/}
            <section>
                <div className="mb-4 mr-5 ml-5 border-b border-silverSand flex p-6 pl-20"> {/* ml-[-25px] */}
                    <Estrellas cuantity={0} />
                    <div className="pl-20 justify-end">
                        <button className='bg-arsenic text-white px-6 rounded-lg font-normal shadow-md hover:bg-malibu disabled:opacity-70'>
                            Calificar
                        </button>
                    </div>
                </div>
            </section>
            <section className=''>
                <div className='mb-4 sm:ml-[23px] text-xl sm:text-x font-bold cursor-pointer text-arsenic h-4'> Comentarios
                </div>
            </section>
            <section>
                <div className='flex items-center justify-between pt-2.5'>
                    {
                        !loading && (
                            <>
                                <div className='flex'>
                                    <div
                                        className=''
                                        onClick={() => filePickerRef?.current?.click()}
                                    >
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </section>

            <section>
                <InputCalifications />
                {
                    posts.map((post) => (<Comentarios key={post.id} post={post} />))
                }
            </section>
        </div>
    )
}