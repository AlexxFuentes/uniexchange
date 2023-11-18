'use client'

import { FaChalkboardTeacher } from "react-icons/fa";
import Header from "@/components/university/header";
import Box from "@/components/university/box";
import Calification from "@/components/university/calification";
import React, { useState } from "react";
import ModalEliminar from "@/components/university/modalEliminar";

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
      cantidadCalificaciones: 5,
    },
    {
      id: 2,
      image: "../avatar.svg",
      nombre: "Alex Alfredo",
      descripcion: "Docente de ingenieria.",
      calificacion: 3.2,
      cantidadCalificaciones: 5,
    },
    {
      id: 3,
      image: "../avatar.svg",
      nombre: "Erick Vladimir",
      descripcion: "Docente de ingenieria.",
      calificacion: 2.5,
      cantidadCalificaciones: 5,
    },
    {
      id: 4,
      image: "../avatar.svg",
      nombre: "Erick Vladimir",
      descripcion: "Docente de ingenieria.",
      calificacion: 4.5,
      cantidadCalificaciones: 5,
    },
  ];

  const [modalStates, setModalStates] = useState<boolean[]>(
    Array(professors.length).fill(false)
  );

  const handleOpenModal = (index: number) => {
    // Crear una copia del array modalStates y actualizar el estado para el docente seleccionado
    const updatedStates = [...modalStates];
    updatedStates[index] = true;
    setModalStates(updatedStates);
  };

  const handleCloseModal = (index: number) => {
    // Crear una copia del array modalStates y cerrar el modal para el docente seleccionado
    const updatedStates = [...modalStates];
    updatedStates[index] = false;
    setModalStates(updatedStates);
  };

  return (
    <div className="px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0 text-arsenic">
      <Header
        head="Docentes"
        Icon={FaChalkboardTeacher}
        nameUniversity="UNAH"
      />

      <div className="overflow-x-auto py-3 h-[calc(100vh-70px)] text-sm xl:text-base flex flex-col">
        <Box
          text="Tus docentes"
          subText="Manten actualizados los datos de tu universidad"
          cuantity={75}
          button="Añadir docente"
        />

        <section className="boxBig flex-1 flex flex-col">
          {professors.map((professor, index) => (
            <div className="mx-2 border-b-[1px] border-b-silverSand p-5 sm:flex justify-between items-center"
            key={professor.id}>
              <div className="sm:flex justify-center items-center gap-4 mr-2">
                <img
                  src={`${professor.image}`}
                  alt="logo img"
                  className="rounded-lg w-full max-w-[6rem] md:max-w-[9rem] xl:max-w-[13rem] m-auto "
                />

                <div className="flex text-center sm:text-left flex-col gap-1 my-2 sm:my-0">
                  <h1 className="font-bold text-base md:text-lg xl:text-xl inset-0">
                    {professor.nombre}
                  </h1>
                  <span>Descripcion: {professor.descripcion}</span>
                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="bg-mySin rounded-full p-2 border-[2px] border-arsenic z-20">
                      <h1 className="font-bold text-base md:text-lg xl:text-xl">
                        {professor.calificacion}
                      </h1>
                    </div>
                    <div className="bg-mySin p-2 pl-7 rounded-2xl border-[2px] border-arsenic ml-[-25px] z-10">
                      <Calification cuantity={professor.calificacion} />
                    </div>
                  </div>
                  <div>{professor.cantidadCalificaciones} calificaciones</div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="buttonBlack whitespace-nowrap"
                onClick={() => handleOpenModal(index)}>
                  Eliminar
                </button>

                {/* Modal */}
                {modalStates[index] && (
                  <ModalEliminar
                    shop={professor.nombre}
                    text="¡Este docente se eliminara de forma permanente!"
                    handleCloseModal={() => handleCloseModal(index)}
                  />
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
