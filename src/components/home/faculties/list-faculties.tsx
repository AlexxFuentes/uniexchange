'use client'
import Image from 'next/image'
import Link from "next/link"

const facultadesData = [
    {
        id: 1,
        description: ['Ingenieria en sistemas', 'UNAH', 'Jefe: Emilson Acosta.'],
        img: '/LogoSistemas.jpg',
    },
    {
        id: 2,
        description: ['Ciencias Medicas', 'UNAH', 'Jefe: Yhonny Aplicano.'],
        img: '/LogoMedicina.png',
    },
    /* {
        id: 3,
        description: ['Nombre facultad', 'Nombre Universidad', 'Jefe: Yhonny Aplicano.'],
        img: '/img_prueba.png',
    },
    {
        id: 4,
        description: ['Nombre facultad', 'Nombre Universidad', 'Jefe: Yhonny Aplicano.'],
        img: '/img_prueba.png',
    },
    {
        id: 5,
        description: ['Nombre facultad', 'Nombre Universidad', 'Jefe: Yhonny Aplicano.'],
        img: '/img_prueba.png',
    },
    {
        id: 6,
        description: ['Nombre facultad', 'Nombre Universidad', 'Jefe: Yhonny Aplicano.'],
        img: '/img_prueba.png',
    }, */
];

export default function Faculties() {

    return (
        <div className='border-l border-r border-silverSand xl:min-w-[600px] flex-grow max-w-xl h-screen overflow-y-auto scrollbar-thumb-paste scrollbar-thin text-sm xl:text-base'>
            <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand bg-white'>
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Facultades</h2>
            </div>

            {facultadesData.map((facultad) => (
                <div key={facultad.id} className='flex items-center border-b border-silverSand p-4'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={facultad.img || '/logo_favico.png'}
                            className='h-20 w-29 mb-2 mr-5 rounded-lg'
                            width={100} height={100}
                            alt={`Facultad ${facultad.id}`}
                            priority
                        />
                        <p className='text-base font-bold'>Descripción:</p>
                    </div>

                    <div className='flex-grow'>
                        <h3 className='text-2xl font-bold mb-2'>Titulo</h3>
                        <div className='text-base'>
                            {facultad.description.map((line, index) => (
                                <div key={index}>{line}</div>
                            ))}
                        </div>
                    </div>

                                <Link href="/home/faculty">
                    <button className='buttonBlack w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
                        Ver Facultad
                    </button>
                    </Link>
                </div>
            ))}

        </div>
    );
}