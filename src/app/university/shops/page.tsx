"use client";

import { AiFillShop } from "react-icons/ai";
import Header from "@/components/university/header";
import Box from "@/components/university/box";
import { FaChevronLeft } from "react-icons/fa6";
import React, { useState } from "react";
import ModalEliminar from "@/components/university/modalEliminar";

export default function Shops() {
  interface Shop {
    id: number;
    image: any;
    nombre: string;
    propietario: string;
    descripcion: string;
    ubicacion: string;
  }

  const shops: Shop[] = [
    {
      id: 1,
      image: "/img_prueba.png",
      nombre: "Baleadas Unah",
      propietario: "Yhonny Aplicano",
      descripcion: "Ricas valeadas",
      ubicacion: "Fuera de la UNAH frente al porton principal",
    },
    {
      id: 2,
      image: "/img_prueba.png",
      nombre: "Ingenieria en sistemas",
      propietario: "Yhonny Aplicano",
      descripcion: "Reyes de ingenieria.",
      ubicacion: "Fuera de la UNAH frente al porton principal",
    },
    {
      id: 3,
      image: "/img_prueba.png",
      nombre: "Ingenieria en sistemas",
      propietario: "Yhonny Aplicano",
      descripcion: "Reyes de ingenieria.",
      ubicacion: "Fuera de la UNAH frente al porton principal",
    },
    {
      id: 4,
      image: "/img_prueba.png",
      nombre: "Ingenieria industrial",
      propietario: "Yhonny Aplicano",
      descripcion: "ingenieria.",
      ubicacion: "Fuera de la UNAH frente al porton principal",
    },
  ];

  const [modalStates, setModalStates] = useState<boolean[]>(
    Array(shops.length).fill(false)
  );

  const handleOpenModal = (index: number) => {
    // Crear una copia del array modalStates y actualizar el estado para el comercio seleccionado
    const updatedStates = [...modalStates];
    updatedStates[index] = true;
    setModalStates(updatedStates);
  };

  const handleCloseModal = (index: number) => {
    // Crear una copia del array modalStates y cerrar el modal para el comercio seleccionado
    const updatedStates = [...modalStates];
    updatedStates[index] = false;
    setModalStates(updatedStates);
  };

  return (
    <div className="px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0 text-arsenic">
      <Header head="Comercios" Icon={AiFillShop} nameUniversity="UNAH" />

      <div className="overflow-x-auto py-3 h-[calc(100vh-70px)] text-sm xl:text-base flex flex-col relative">
        {/* <FaChevronLeft className= 'absolute w-6 h-6'/> */}
        <Box
          text="Tus comercios"
          subText="Estos comercios aparecerán como publicidad"
          cuantity={30}
          button="Añadir comercio"
        />

        <section className="boxBig flex-1 flex flex-col">
          {shops.map((shop, index) => (
            <div
              className="mx-2 border-b-[1px] border-b-silverSand p-5 sm:flex justify-between items-center"
              key={shop.id}
            >
              <div className="sm:flex justify-center items-center gap-4 mr-2">
                <img
                  src={`${shop.image}`}
                  alt="logo img"
                  className="rounded-lg w-full max-w-[10rem] md:max-w-[15rem] xl:max-w-xs m-auto "
                />

                <div className="flex text-center sm:text-left flex-col gap-1 my-2 sm:my-0">
                  <h1 className="font-bold text-base md:text-lg xl:text-xl">
                    {shop.nombre}
                  </h1>
                  <span>Propietario: {shop.propietario}</span>
                  <span>Direccion: {shop.ubicacion}</span>
                  <span>Descripcion: {shop.descripcion}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <button
                  className="buttonBlack"
                  onClick={() => handleOpenModal(index)}
                >
                  Eliminar
                </button>

                {/* Modal */}
                {modalStates[index] && (
                  <ModalEliminar
                    shop={shop.nombre}
                    text="¡Este comercio se eliminara de forma permanente!"
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
