"use client";
import Image from "next/image";
import Feed from "@/components/home/feed";
import Sidebar from "@/components/home/sidebar";
import Widgets from "@/components/home/widgets";
import React, { useState } from "react";
import Calification from "@/components/university/calification";
import Link from "next/link";

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
  },
];

export default function Faculty() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <main className="flex">
      {/* flex min-h-screen mx-auto */}
      <div className="border-l border-r border-silverSand xl:min-w-[576px] flex-grow max-w-xl relative h-screen overflow-y-auto">
        <div className="flex py-2 px-3 sticky top-0 z-50 border-b border-silverSand bg-white">
          <h2 className="text-lg sm:text-xl font-bold cursor-pointer">
            Facultad
          </h2>
        </div>

        <Image
          src="/img_prueba.png"
          className="ml-auto w-full h-36 object-cover hidden relative sm:block"
          style={{ zIndex: "1" }}
          width={900}
          height={100}
          alt="Imagen de portada"
          priority
        />
        <Image
          src="/img_prueba.png"
          className="w-32 h-32 object-cover rounded-full border-4 relative border-white mt-[-40px] ml-[25px]"
          style={{ zIndex: "2" }}
          width={900}
          height={100}
          alt="Foto de perfil"
          priority
        />

        <div className="ml-4 mt-8">
          {/* Contenido del perfil */}
          <div className="flex items-center space-x-4">
            <div>
              <h1
                className="text-base font-semibold text-gray-700"
                style={{ marginTop: "-23px" }}
              >
                Universidad Nacional Autónoma de Honduras
              </h1>
              <h2 className="text-lg font-semibold text-gray-700">
                Nombre Facultad
              </h2>
            </div>
          </div>

          {/* Botón de unirse */}
          <div className=" flex items-center justify-center mt-8">
            <div className="relative">
              <div
                style={{
                  position: "absolute",
                  top: "-100px",
                  left: "90%",
                  transform: "translateX(-50%)",
                  color: "Black",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
              >
                340 miembros
              </div>
              <div className="flex items-center justify-center mt-4">
                <button
                  className="buttonOrange  font-bold hover:brightness-90 text-lg px-4 py-2"
                  style={{
                    backgroundColor: "orange",
                    marginLeft: "400px",
                    marginTop: "-100px",
                  }}
                >
                  Unirse
                </button>
              </div>
            </div>
          </div>

          {/* Línea */}
          <div className="mb-4 border-b border-silverSand ml-39"></div>

          {/* Párrafo */}
          <p className="ml-8">
            La facultad de ingeniería más conocida como “El Olimpo” de la
            Universidad XXXXXXXX es una de las principales unidades académicas
            del país que ha logrado graduar a más de ####### egresados quienes
            han logrado destacar en numerosos proyectos de interés nacional e
            internacional.
          </p>
          <div className="mb-4 p-5 border-t border-t-silverSand ml-39 border-b border-silverSand ml-39 w-full grid">
            <button className="buttonBlack m-auto" onClick={handleClick}>
              Docentes
            </button>
          </div>

          {/* Formulario de publicación */}
          <div className={`${active ? "hidden" : "block"}`}>
            <div className="flex items-center mt-4">
              <Image
                src="/img_prueba.png"
                className="w-8 h-8 object-cover rounded-full ring-2 ring-white mr-2"
                width={900}
                height={100}
                alt="Foto de perfil"
                priority
              />
              <textarea
                className="w-full h-16 border rounded p-2 mr-2"
                placeholder="¿Qué estás pensando?"
              />
            </div>

            <div className="flex items-center justify-end mt-2">
              <button className="buttonOrange font-bold hover:bg-blue-700 px-4 py-2">
                Publicar
              </button>
            </div>
            <div className="mt-3 border-b border-silverSand ml-39"></div>

            {/* Lista de publicaciones */}
            {posts.map((post) => (
              <div key={post.id} className="mt-4">
                <div className="flex items-center">
                  <Image
                    src={post.userImg || "./avatar.svg"}
                    className="w-8 h-8 object-cover rounded-full ring-2 ring-white mr-2"
                    width={900}
                    height={100}
                    alt="Foto de perfil del usuario"
                    priority
                  />
                  <div>
                    <p className="font-semibold">{post.name}</p>
                    <p className="text-gray-500 text-sm ml-80 -mt-5">
                      {post.timestamp}
                    </p>
                  </div>
                </div>
                <p>{post.text}</p>
              </div>
            ))}
          </div>

          {/* Docentes */}
          <div className={`${active ? "block" : "hidden"}`}>
            <div className="mx-2 border-b-[1px] border-b-silverSand p-3 sm:flex justify-between items-center flex-col">
              <div className="sm:flex justify-center items-center gap-4 mr-2">
                <Image
                  src={`../avatar.svg`}
                  className="rounded-lg w-full max-w-[4rem] md:max-w-[5rem] xl:max-w-[7rem] m-auto"
                  width={900}
                  height={100}
                  alt="logo img"
                  priority
                />
                {/* <img
                  src={`${professor.image}`}
                  alt="logo img"
                  className="rounded-lg w-full max-w-[6rem] md:max-w-[9rem] xl:max-w-[13rem] m-auto "
                /> */}

                <div className="flex text-center sm:text-left flex-col gap-1 my-2 sm:my-0">
                  <h1 className="font-bold text-base md:text-lg xl:text-xl inset-0">
                    q we qwe q
                  </h1>
                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="bg-mySin rounded-full p-2 border-[2px] border-arsenic z-20">
                      <h1 className="font-bold text-base md:text-lg xl:text-xl">
                        3.3
                      </h1>
                    </div>
                    <div className="bg-mySin p-2 pl-7 rounded-2xl border-[2px] border-arsenic ml-[-25px] z-10">
                      <Calification cuantity={3} />
                    </div>
                  </div>
                  <div>5 calificaciones</div>
                </div>
                <div className="flex justify-center">
                  <Link href="/home/calificationprofessors">
                    <button className="buttonBlack whitespace-nowrap">
                      Ver
                    </button>
                  </Link>
                </div>
              </div>

              <span>Descripcion: werwer werwer wer w</span>
            </div>
          </div>
        </div>
      </div>
      <Widgets />
    </main>
  );
}
