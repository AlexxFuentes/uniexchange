import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { AcademicCapIcon } from '@heroicons/react/outline'
import { useState, useRef } from 'react'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import InputCalifications from '@/components/Calification/InputCalifications'
import Estrellas from '@/components/Calification/Estrellas'
import Comentarios from "@/components/Calification/Comentarios"

export default function Perfil() {
    
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
        <div className='w-full border-l border-r border-silverSand ml-0 flex-grow  '>
            {/*El Encabezado*/}
            <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand'>
                <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Estudiantes</h2>
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
                <img
                  src={`../avatar.svg`}
                  alt="logo img"
                  className="cursor-pointer rounded-lg w-full max-w-[6rem] md:max-w-[9rem] xl:max-w-[8rem] m-auto "
                />
                {/*Perfil profesor*/}
                <div className="flex text-center sm:text-justify flex-col gap-1 my-2 sm:my-0">
                  <h1 className="font-semibold text-base md:text-lg xl:text-xl inset-0 opacity-80">Nombre: Erick Reyes</h1>
                    <div className="ml-2 font-normal text-base md:text-md xl:text-md inset-0 opacity-70">
                        <div>Género: Masculino</div>
                        <div>Dirección:______________ </div>
                    </div>
                    <div className='p-2 flex opacity-40'></div>
                  <h2 className='font-semibold text-base md:text-lg xl:text-xl inset-0 opacity-80'>Información general</h2>
                        <div className="ml-2 font-thin opacity-70">Te has unido a: 0 Facultades</div>
                        <div className="ml-2 font-thin opacity-70">Has hecho: 0 Publicaciones</div>
                </div>
              </div>
            </div>
          ))}
        </section> 

        <section className='border-b border-silverSand'>
                <div className='p-4 sm:ml-[23px] sm:text-x text-arsenic'>
                    El ingeniero Erick, un gran catedrático que se unió a nosotros en el 
                    año xxxx y que lleva una gran trayectoria como profesional con sus proyectos y productos, 
                    entre ellos Betty, un producto que viene a generar empleos y a dar soluciones en varios ámbitos. 
                    Sus conocimientos vienen a dar un aprendizaje diferente y muy bueno para los estudiantes.
                </div>
        </section>
        <section>
            <button className='p-4 mb-8 bg-malibu text-white px-6 py-1 rounded-lg font-bold shadow-md hover:bg-arsenic disabled:opacity-70'>
                Editar
            </button>
        </section>

        <section>
            <button className='p-4 mb-8  bg-malibu text-white px-6 py-1 rounded-lg font-bold shadow-md hover:bg-arsenic disabled:opacity-70'>
                Ver Universidades
            </button>
        </section>

        </div>
    )
}