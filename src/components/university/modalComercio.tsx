import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function ModalComercio({
  university,
  text,
  handleCloseModalComercio,
}: {
  university: string;
  text: string;
  handleCloseModalComercio: () => void;
}) {
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

  const [professorSelection, setProfessorSelection] = useState(
    professors.map(() => false)
  );

  const handleSeleccionado = (index: number) => {
    const newSelection = [...professorSelection];
    newSelection[index] = !newSelection[index];

    if (!newSelection[index]) {
      setProfessorSelection(newSelection);
    } else {
    /* else if (newSelection[index]) {
        setProfessorSelection(newSelection);
      } */
      const updatedSelection = newSelection.map((_, i) =>
        i === index ? true : false
      );
      setProfessorSelection(updatedSelection);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-30 w-screen overflow-y-auto bg-arsenic/40 transition-opacity max-h-screen`}
    >
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center">
            <div className="relative rounded-lg bg-white text-center shadow-xl  sm:my-4 w-full sm:max-w-3xl ">
              <div className="bg-white rounded-lg">
                <div className="sm:flex sm:items-center p-2  text-center">
                  <div className="w-full px-3 p-3 flex justify-center items-center flex-col gap-2">
                    <h1 className="font-bold text-base md:text-lg xl:text-xl">
                      Nuevo comercio de {university}
                    </h1>
                    <div className="">
                      <p className="">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 text-left w-full h-auto">
                <section className="boxBig flex flex-col items-center justify-center h-[calc(100vh-350px)] overflow-y-auto p-3">
                  <form className=" w-full h-full max-w-xl m-3 flex flex-col justify-center gap-5 ">
                    <label htmlFor="">
                      Ingresa una imagen para el comercio
                    </label>
                    <div className="w-full h-44 p-8 rounded-xl font-medium bg-transparent border border-arsenic text-sm flex justify-center items-center cursor-pointer">
                      <FaPlus className="w-12 h-12 text-mySin" />
                    </div>

                    <input
                      className="w-full px-8 py-4 rounded-xl font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                      type="text"
                      placeholder="Nombre del comercio"
                      required
                    />

                    <input
                      className="w-full px-8 py-4 rounded-xl font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                      type="text"
                      placeholder="Propietario del comercio"
                      required
                    />

                    <input
                      className="w-full px-8 py-4 rounded-xl font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white"
                      type="text"
                      placeholder="Direccion del comercio"
                      required
                    />

                    <textarea
                      className="w-full px-8 py-4 rounded-xl font-medium bg-transparent border border-arsenic placeholder-silverSand text-sm focus:outline-none focus:border-mySin focus:bg-white "
                      placeholder="Descripcion"
                      rows={5}
                      required
                    />

                    <button type="submit" className=" buttonBlack">
                      Crear comercio
                    </button>
                  </form>
                </section>
              </div>
              <div className="border-t-[1px] border-t-silverSand px-4 py-3 sm:flex justify-center gap-2 sm:px-6">
                <button
                  onClick={() => handleCloseModalComercio()}
                  type="button"
                  className="w-full buttonOrange sm:w-auto"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
