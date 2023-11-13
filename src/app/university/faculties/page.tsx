import { AcademicCapIcon } from "@heroicons/react/outline";
import Header from "@/components/university/header";

export default function Faculties() {
  return (
    <div className=" px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0">
      <Header head="Facultades" Icon={AcademicCapIcon} nameUniversity="UNAH" />

      {/* Crear componente para resumir codigo */}
      <div className="overflow-x-auto py-3 h-[calc(100vh-70px)] text-xs md:text-sm xl:text-base">
        <section className="w-full p-3 ">
          <div className="sm:flex w-full sm:h-1/3 ">
            <div className="text-center sm:text-left w-full sm:w-9/12 px-3 p-3">
              <h1 className="font-bold text-base md:text-lg xl:text-xl">
              Tus facultades
              </h1>
              <span>
              Manten actualizados los datos de tu universidad
              </span>
            </div>

            <div className="w-full sm:w-1/4 flex justify-center items-center font-bold text-base md:text-lg xl:text-xl">
              25
            </div>

            <div className="w-full sm:w-1/4 flex justify-center items-center ">
              <button className="buttonOrange">Añadir</button>
            </div>
          </div>
        </section>

        <section className="boxHome h-[calc(100vh-240px)] sm:h-[calc(100vh-185px)] md:h-[calc(100vh-190px)] xl:h-[calc(100vh-195px)]">

        </section>
      </div>
    </div>
  );
}
