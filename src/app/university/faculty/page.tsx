'use client'
import Image from 'next/image'
import Feed from '@/components/home/feed'
import Sidebar from '@/components/home/sidebar'
import Widgets from '@/components/home/widgets'

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
];

export default function Faculty() {
    return (
        <main className='flex'>
            {/* flex min-h-screen mx-auto */}
            <div className='border-l border-r border-silverSand xl:min-w-[576px] flex-grow max-w-xl relative'>
                <div className='flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand'>
                    <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>
                        Facultades
                    </h2>
                </div>

                <Image
                    src='/img_prueba.png'
                    className='ml-auto w-full h-36 object-cover hidden relative sm:block'
                    style={{ zIndex: '1' }}
                    width={900} height={100}
                    alt='Imagen de portada'
                    priority
                />
                <Image
                    src='/img_prueba.png'
                    className='w-32 h-32 object-cover rounded-full border-4 relative border-white mt-[-40px] ml-[25px]'
                    style={{ zIndex: '2' }}
                    width={900} height={100}
                    alt='Foto de perfil'
                    priority
                />

                <div className="ml-4 mt-8">
                    {/* Contenido del perfil */}
                    <div className="flex items-center space-x-4">
                        <div>
                            <h1 className="text-base font-semibold text-gray-700" style={{ marginTop: '-23px' }}>
                                Universidad Nacional Autónoma de Honduras
                            </h1>
                            <h2 className="text-lg font-semibold text-gray-700">
                                Nombre Facultad
                            </h2>
                        </div>
                    </div>

                    {/* Botón de unirse */}
                    <div className=' flex items-center justify-center mt-8'>
                        <div className="relative">
                            <div style={{ position: 'absolute', top: '-100px', left: '90%', transform: 'translateX(-50%)', color: 'Black', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                                340 miembros
                            </div>
                            <div className='flex items-center justify-center mt-4'>
                                <button className='bg-orange-100 text-white font-bold hover:brightness-90 text-lg rounded-full px-4 py-2' style={{ backgroundColor: 'orange', marginLeft: '400px', marginTop: '-100px' }}>
                                    Unirse
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Línea */}
                    <div className='mb-4 border-b border-silverSand ml-39'></div>

                    {/* Párrafo */}
                    <p className="ml-8">
                        La facultad de ingeniería más conocida como “El Olimpo” de la Universidad XXXXXXXX es una de las principales unidades académicas del país que ha logrado graduar a más de ####### egresados quienes han logrado destacar en numerosos proyectos de interés nacional e internacional.
                    </p>
                    <div className='mb-4 border-b border-silverSand ml-39'></div>

                    {/* Formulario de publicación */}
                    <div className='flex items-center mt-4'>
                        <Image
                            src='/img_prueba.png'
                            className='w-8 h-8 object-cover rounded-full ring-2 ring-white mr-2'
                            width={900} height={100}
                            alt='Foto de perfil'
                            priority
                        />
                        <textarea
                            className='w-full h-16 border rounded p-2 mr-2'
                            placeholder='¿Qué estás pensando?'
                        />
                    </div>

                    <div className='flex items-center justify-end mt-2'>
                        <button className='bg-mySin text-white font-bold hover:bg-blue-700 px-4 py-2 rounded'>
                            Publicar
                        </button>
                    </div>
                    <div className='mt-3 border-b border-silverSand ml-39'></div>

                    {/* Lista de publicaciones */}
                    {posts.map(post => (
                        <div key={post.id} className="mt-4">
                            <div className="flex items-center" >
                                <Image
                                    src={post.userImg || './avatar.svg'}
                                    className='w-8 h-8 object-cover rounded-full ring-2 ring-white mr-2'
                                    width={900} height={100}
                                    alt='Foto de perfil del usuario'
                                    priority
                                />
                                <div>
                                    <p className="font-semibold">{post.name}</p>
                                    <p className="text-gray-500 text-sm ml-80 -mt-5">{post.timestamp}</p>
                                </div>
                            </div>
                            <p>{post.text}</p>

                        </div>
                    ))}
                </div>
            </div>
            <Widgets />
        </main>
    );
};
