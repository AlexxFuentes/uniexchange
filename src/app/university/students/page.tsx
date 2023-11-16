"use client";

import { PiStudentBold } from "react-icons/pi";
import Header from "@/components/university/header";
import Box from "@/components/university/box";
import React, { useState } from "react";
import Image from "next/image";

export default function Students() {
  interface Student {
    id: number;
    image: any;
    nombre: string;
    apellido: string;
    genero: string;
    direccion: string;
    correo: string;
    descripcion: string;
    publicaciones: number;
    facultades: number;
  }

  const students: Student[] = [
    {
      id: 1,
      image: "../avatar.svg",
      nombre: "Erick",
      apellido: "Vladimir",
      genero: "Masculino",
      direccion: "Valle de angeles",
      correo: "erick@gmail.com",
      descripcion: "Estudiante de ingenieria.",
      publicaciones: 3,
      facultades: 1,
    },
    {
      id: 2,
      image: "../avatar.svg",
      nombre: "Yhonny",
      apellido: "Aplicano",
      genero: "Masculino",
      direccion: "Miraflores",
      correo: "yhonny@gmail.com",
      descripcion: "Estudiante de ingenieria.",
      publicaciones: 13,
      facultades: 2,
    },
    {
      id: 3,
      image: "../avatar.svg",
      nombre: "Yhonny",
      apellido: "Aplicano",
      genero: "Masculino",
      direccion: "Miraflores",
      correo: "yhonny@gmail.com",
      descripcion: "Estudiante de ingenieria.",
      publicaciones: 13,
      facultades: 2,
    },
    {
      id: 4,
      image: "../avatar.svg",
      nombre: "Yhonny",
      apellido: "Aplicano",
      genero: "Masculino",
      direccion: "Miraflores",
      correo: "yhonny@gmail.com",
      descripcion: "Estudiante de ingenieria.",
      publicaciones: 13,
      facultades: 2,
    },
  ];

  const [modalStates, setModalStates] = useState<boolean[]>(Array(students.length).fill(false));

  const handleOpenModal = (index: number) => {
    // Crear una copia del array modalStates y actualizar el estado para el estudiante seleccionado
    const updatedStates = [...modalStates];
    updatedStates[index] = true;
    setModalStates(updatedStates);
  };

  const handleCloseModal = (index: number) => {
    // Crear una copia del array modalStates y cerrar el modal para el estudiante seleccionado
    const updatedStates = [...modalStates];
    updatedStates[index] = false;
    setModalStates(updatedStates);
  };

  return (
    <div className="px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0 text-arsenic">
      <Header head="Estudiantes" Icon={PiStudentBold} nameUniversity="UNAH" />

      <div className="overflow-x-auto py-3 h-[calc(100vh-70px)] text-sm xl:text-base flex flex-col">
        <Box
          text="Tus estudiantes"
          subText="Manten actualizados los datos de tu universidad"
          cuantity={1300}
        />

        <section className="boxBig flex-1 flex flex-col">
          {students.map((student, index) => (
            <div
              className="mx-2 border-b-[1px] border-b-silverSand p-5 sm:flex justify-between items-center"
              key={student.id}
            >
              <div className="sm:flex justify-center items-center gap-4 mr-2">
                <img
                  src={`${student.image}`}
                  alt="logo img"
                  className="rounded-lg w-full max-w-[6rem] md:max-w-[9rem] xl:max-w-[13rem] m-auto "
                />

                <div className="flex text-center sm:text-left flex-col gap-1 my-2 sm:my-0">
                  <h1 className="font-bold text-base md:text-lg xl:text-xl">
                    {student.nombre} {student.apellido}
                  </h1>
                  <span>{student.correo}</span>

                  <div>Descripcion: {student.descripcion}</div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="buttonBlack whitespace-nowrap"
                  onClick={() => handleOpenModal(index)}
                >
                  Mas informacion
                </button>

                {/* Modal */}
                {modalStates[index] && (
                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    {/* ... contenido del modal ... */}
                    <div
                      className="relative z-10"
                      aria-labelledby="modal-title"
                      role="dialog"
                      aria-modal="true"
                    >
                      <div className="fixed inset-0 bg-arsenic/40 bg-opacity-100 transition-opacity">
                        {" "}
                      </div>

                      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-4 w-3/4 sm:max-w-lg">
                            <div className="bg-white">
                              <div className="sm:flex sm:items-center">
                                <div className=" text-center  sm:text-left w-full ">

                                  <div className="sm:flex justify-center w-full sm:h-1/3 border-b-[1px] border-b-silverSand">
                                    <div className="w-full sm:w-2/5 border-b-[1px] sm:border-r-[1px] sm:border-b-[0px] border-r-silverSand border-b-silverSand p-1 ">
                                      <Image
                                        className=" h-32 w-32 sm:h-full sm:w-full rounded-full m-auto"
                                        width={12}
                                        height={12}
                                        src={student.image}
                                        alt="profile img"
                                      />
                                    </div>
                                    <div className="w-full sm:w-9/12 px-3 p-3">
                                      <h1 className="font-bold text-base md:text-lg xl:text-xl">
                                      {student.nombre} {student.apellido}
                                      </h1>
                                      <div className="flex flex-col gap-6">
                                        <p className="">{student.correo}</p>
                                        <p className="">Genero: {student.genero}</p>
                                        <p className="">Direccion: {student.direccion}</p>
                                        <p className="">Facultades: {student.facultades}</p>
                                        <p className="">Publicaciones: {student.publicaciones}</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="w-full h-auto p-3 ">
                                    <p className="">
                                      {student.descripcion}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-t-[1px] border-t-silverSand px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                onClick={() => handleCloseModal(index)}
                                type="button"
                                className=" m-auto inline-flex w-full justify-center buttonOrange sm:w-auto"
                              >
                                Cerrar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
