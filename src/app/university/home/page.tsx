import { HomeIcon } from "@heroicons/react/solid";
import Header from "@/components/university/header";
import { AcademicCapIcon } from "@heroicons/react/outline";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AiFillShop } from "react-icons/ai";
import DataHome from "@/components/university/dataHome";

export default function Home() {
  return (
    <div className="px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0 text-arsenic flex flex-col">
      <Header head="Inicio" Icon={HomeIcon} nameUniversity="UNAH" />

      <div className="overflow-x-auto py-3 h-[calc(100vh-70px)] text-sm xl:text-base">
        <section className="w-full p-3 ">
          <div className="sm:flex w-full sm:h-1/3 ">
            <div className="text-center sm:text-left w-full sm:w-9/12 px-3 p-3">
              <h1 className="font-bold text-base md:text-lg xl:text-xl">
                Datos y estadisticas general
              </h1>
              <span>
                Organiza, evalua y manten actualizados los datos de tu
                universidad
              </span>
            </div>

            <div className="w-full sm:w-1/4 flex justify-center items-center ">
              <button className="buttonOrange">Fecha</button>
            </div>
          </div>
        </section>

        <section className="grid gap-5 grid-cols-1 md:grid-cols-2  h-[calc(100%-100px)] mx-3" >
              <DataHome cuantity="25" Icon={AcademicCapIcon} name="Facultades" link="/university/faculties" />
              <DataHome cuantity="75" Icon={FaChalkboardTeacher} name="Docentes" link="/university/professors"/>
              <DataHome cuantity="1,500" Icon={PiStudentBold} name="Estudiantes" link="/university/students"/>
              <DataHome cuantity="18" Icon={AiFillShop} name="Comercios" link="/university/shops"/>
            </section>
      </div>
    </div>
  );
}
