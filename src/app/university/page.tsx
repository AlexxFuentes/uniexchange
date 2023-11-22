"use client";

import { LibraryIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { AcademicCapIcon } from "@heroicons/react/outline";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AiFillShop } from "react-icons/ai";
import Header from "@/components/university/header";
import Data from "@/components/university/data";
import Link from "next/link";


export default function Universities() {
  const profileUrl = "../avatar.svg";

  return (
    <>
      <div className=" px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0 text-arsenic">
        <Header head="Perfil" Icon={LibraryIcon} nameUniversity="UNAH" />

        <section className="overflow-x-auto py-3 h-[calc(100vh-70px)] text-sm xl:text-base">
          <div className="sm:flex w-full sm:h-1/3 border-b-[1px] border-b-silverSand">
            <div className="w-full sm:w-1/4 border-b-[1px] sm:border-r-[1px] sm:border-b-[0px] border-r-silverSand border-b-silverSand p-1 ">
              <Image
                className=" h-32 w-32 sm:h-full sm:w-full rounded-full m-auto"
                width={12}
                height={12}
                src={profileUrl}
                alt="profile img"
              />
            </div>
            <div className="w-full sm:w-9/12 px-3 p-3">
              <h1 className="font-bold text-base md:text-lg xl:text-xl">
                Informacion General
              </h1>
              <div className="flex flex-col gap-6">
                <p className="">Nombre Universidad</p>
                <p className="">Pais</p>
                <p className="">Direccion</p>
                <p className="">Plan</p>
              </div>
            </div>
          </div>

          <div className="w-full h-auto p-3 border-b-[1px] border-b-silverSand">
            <p className="">Descripcion</p>
          </div>

          <div className="w-full p-3 flex justify-center items-center border-b-[1px] border-b-silverSand">
            <button className="buttonOrange">Editar</button>
          </div>

          <div className="w-full p-3 flex justify-center items-center flex-col gap-2">
            <h1 className="font-bold text-base md:text-lg xl:text-xl">
              Datos Oficiales
            </h1>
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-4">
              <Data cuantity="25" Icon={AcademicCapIcon} name="Facultades" />
              <Data cuantity="75" Icon={FaChalkboardTeacher} name="Docentes" />
              <Data cuantity="1,500" Icon={PiStudentBold} name="Estudiantes" />
              <Data cuantity="18" Icon={AiFillShop} name="Comercios" />
            </div>
            <Link href="/university/home">
              <button
                className="buttonBlack"

                /* onClick={() => {
                  localStorage.setItem("activeIndex", "-1"); // o cualquier otro valor predeterminado válido
                  // Redirige a la pantalla de inicio
                }} */
              >
                Más detalles
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
