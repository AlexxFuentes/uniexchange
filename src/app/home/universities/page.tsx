'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Widgets from '@/components/home/widgets'
import Link from "next/link"
import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '@/config/firebase.config'

export default function Seguir() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedFacultad, setSelectedFacultad] = useState(null);
    const [universities, setUniversities] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])

    const openModal = (facultad: any) => {
        setSelectedFacultad(facultad);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedFacultad(null);
        setModalOpen(false);
    };

    useEffect(() => {
        return onSnapshot(
            query(collection(db, 'universities'), orderBy('timestamp', 'desc')),
            (snapshot) => {
                setUniversities(snapshot.docs)
            }
        )
    }, [])

    const customStyles = {
        content: {
            width: '50%',
            height: '50%',
            margin: 'auto',
        },
    };

    return (
        <main className='flex min-h-screen'>
            <div className='border-l border-r border-silverSand xl:min-w-[600px] flex-grow max-w-xl'>
                <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand'>
                    <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Universidades</h2>
                </div>

                <div className='p-5'>
                    <div className='text-base text-gray-600 mt-[-1rem] mb-3 ml-[4rem] whitespace-nowrap'>
                        Únete a otras universidades y forma parte de sus facultades.
                    </div>

                    <div className='w-full mb-8 ml-[0rem]'>
                        <input type='text' placeholder='Buscar...' className='border rounded p-1 mr-8 mt 12 w-full' />
                    </div>
                </div>

                {universities.map((university, index) => (
                    <div key={index} className={`flex items-center p-4 ${index === 0 ? 'border-b border-silverSand mb-4' : ''}`}>

                        <div className='flex-grow'>
                            {/* Imagen a la izquierda */}
                            <div className='flex-shrink-0'>
                                <Image
                                    src={university?.data().urlImg || '/img_prueba.png'}
                                    className='h-32 w-60 mb-2 mr-5 rounded-lg'
                                    style={{ zIndex: '1' }}
                                    width={900} height={100}
                                    alt={`Facultad ${index + 1}`}
                                    priority
                                />
                            </div>

                            <h3 className='text-2xl font-bold mb-2 -ml-4 -mt-32'>{/* Agrega un identificador único, por ejemplo, seg.id */}</h3>
                            <div className='text-base ml-72'>
                                <span className='font-bold'>nombre:</span>{university.data().nombre}
                            </div>
                            <div className='text-base ml-72'>
                                <span className='font-bold'>dirección:</span>{university.data().direccion}
                            </div>
                            <div className='text-base ml-72'>
                                <span className='font-bold'>País:</span>{university.data().pais}
                            </div>
                            <button
                                onClick={() => openModal(university.data().usr_id)}
                                className='buttonBlack border-b text-white w-60 h-12 font-bold shadow-md hover:brightness-95 text-base ml-[17rem] mt-[1rem]'>
                                Ver Facultades
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Otros elementos, como Widgets */}
            <Widgets />
            {/* Modal con el estilo personalizado */}

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel='Modal con Estilo Personalizado'
                style={customStyles}
            >
                {selectedFacultad && (
                    <div className='text-center'>
                        <h2>Nombre de la facultad</h2>
                        <h1 className='text-lg font-bold'>Facultades de Nombre Universidad</h1>
                        <input
                            className='w-[500px] h-7 p-5 mx-5 my-3 border-2 border-arsenic outline-none rounded-md transition-all duration-300 ease-in-out hover:border-paste'
                            type='text'
                            placeholder='Buscar...'
                            onFocus={(e) => e.target.style.border = '1px solid #007BFF'} // Estilo al enfocar
                            onBlur={(e) => e.target.style.border = '1px solid #ccc'} // Estilo al dejar de enfocar
                        />
                        <div className='flex items-center mx-5 my-0'>
                            <div className='flex-shrink-0'>
                                <Image
                                    src="/img_prueba.png"
                                    className='h-32 w-[230px] mr-4'
                                    style={{ zIndex: '1' }}
                                    width={900} height={100}
                                    alt="Descripción de la imagen"
                                    priority
                                />
                            </div>
                            <div>
                                <h3
                                    className='text-2xl font-bold mb-2 ml-0'>Nombre de la facultad</h3>
                                <span>Jefe: Luis Mejia</span>
                            </div>
                            <button
                                className='buttonOrange border-b text-black w-40 h-12 font-bold shadow-md hover:brightness-95 text-lg ml-[4rem] mt-[-3rem]'>
                                Unirse
                            </button>
                            <Link href="/home/faculty">
                                <button
                                    className='buttonBlack border-b text-white w-60 h-12 font-bold shadow-md hover:brightness-95 text-lg ml-[-12rem] mt-[6rem]'>
                                    Ver Facultad
                                </button>
                            </Link>
                        </div>

                    </div>
                )}
            </Modal>
        </main>
    );
}
