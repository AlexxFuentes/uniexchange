'use client'
import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'
import Widgets from '@/components/home/widgets'

const SeguirData = [
    {
        description: ['Nombre Universidad', 'Honduras', 'Facultades 20+'],
        img: '/img_prueba.png',
    },
    {
        description: ['Nombre Universidad', 'Honduras', 'Facultades 20+'],
        img: '/img_prueba.png',
    },
    {
        description: ['Nombre Universidad', 'Honduras', 'Facultades 20+'],
        img: '/img_prueba.png',
    },
];

export default function Seguir() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedFacultad, setSelectedFacultad] = useState(null);

    const openModal = (facultad: any) => {
        setSelectedFacultad(facultad);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedFacultad(null);
        setModalOpen(false);
    };

    const customStyles = {
        content: {
            width: '50%',
            height: '50%', 
            margin: 'auto',
        },
    };
    
    return (
        <main className='flex min-h-screen mx-auto'>
            {/* Sidebar y otros elementos */}
            <div className='border-l border-r border-silverSand xl:min-w-[576px] flex-grow max-w-xl'>
                <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand'>
                    <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Universidades</h2>
                </div>

                {SeguirData.map((seg, index) => (
                    <div key={index} className={`flex items-center p-4 ${index === 0 ? 'border-b border-silverSand mb-4' : ''}`}>
                        {/* Imagen a la izquierda */}


                        <div className='flex-grow'>
                            {/* Texto adicional solo antes del segundo cuadro */}
                            {index === 1 && (
                                <div className='text-base text-gray-600 mt-[-1rem] mb-3 ml-[4rem] whitespace-nowrap'>
                                    Únete a otras universidades y forma parte de sus facultades.
                                </div>
                            )}
                            {/* Agregar el buscador solo en el segundo bloque */}
                            {index === 1 && (
                                <div className='w-full mb-8 ml-[0rem]'>
                                    <input type='text' placeholder='Buscar...' className='border rounded p-1 mr-8 mt 12 w-full' />
                                    {/* Otros elementos del buscador, como botones o filtros, pueden ir aquí */}
                                </div>
                            )}
                            {/* Imagen a la izquierda */}
                            <div className='flex-shrink-0'>
                                <Image
                                    src={seg.img}
                                    className='h-32 w-60 mb-2 mr-5 rounded-lg'
                                    style={{ zIndex: '1' }}
                                    width={900} height={100}
                                    alt={`Facultad ${index + 1}`}
                                    priority
                                />
                            </div>

                            <h3 className='text-2xl font-bold mb-2 ml-[-1rem]  mt-[-8rem]'>{/* Agrega un identificador único, por ejemplo, seg.id */}</h3>
                            <div className='text-base ml-[20rem]'>
                                {seg.description.map((line, idx) => (
                                    <div key={idx}>{line}</div>
                                ))}
                            </div>
                            {/* Botón debajo del texto */}
                            <button
                                onClick={() => openModal(seg)}
                                className='bg-black rounded-lg border-b text-white w-60 h-12 font-bold shadow-md hover:brightness-95 text-lg ml-[17rem] mt-[ 1rem]'>
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
                                className='bg-yellow rounded-lg border-b text-black w-40 h-12 font-bold shadow-md hover:brightness-95 text-lg ml-[4rem] mt-[-3rem]'>
                                Unirse
                            </button>
                            <button
                                className='bg-black rounded-lg border-b text-white w-60 h-12 font-bold shadow-md hover:brightness-95 text-lg ml-[-12rem] mt-[6rem]'>
                                Ver Facultad
                            </button>
                        </div>

                    </div>
                )}
            </Modal>

        </main>
    );
}
