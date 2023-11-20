
import { useState } from "react";

export default function ModalFacultad({
  university,
  text,
  handleCloseModalFacultad,
}: {
  university: string;
  text: string;
  handleCloseModalFacultad: () => void;
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
    }
    /* else if (newSelection[index]) {
        setProfessorSelection(newSelection);
      } */
    else {
      const updatedSelection = newSelection.map((_, i) => (i === index ? true : false));
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
                      Nueva facultad de {university}
                    </h1>
                    <div className="">
                      <p className="">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 text-left w-full h-auto">
                <section className="boxBig flex-1 flex flex-col h-[calc(100vh-350px)] overflow-y-auto ">
                  Hola
                </section>
              </div>
              <div className="border-t-[1px] border-t-silverSand px-4 py-3 sm:flex justify-end gap-2 sm:px-6">
                <button
                  type="button"
                  className=" w-full buttonBlack sm:w-auto  mb-2 sm:mb-0"
                >
                  Crear facultad
                </button>

                <button
                  onClick={() => handleCloseModalFacultad()}
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