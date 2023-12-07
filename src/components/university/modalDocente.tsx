import { SearchIcon } from "@heroicons/react/outline";
import Calification from "@/components/university/calification";
import { useState } from "react";

export default function ModalDocente({
  university,
  text,
  handleCloseModalDocente,
}: {
  university: string;
  text: string;
  handleCloseModalDocente: () => void;
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
                      ¿Que docentes forman parte de {/* {university} */} UNAH?
                    </h1>
                    <div className="">
                      <p className="">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="boxBig flex items-center p-3 rounded-full bg-white relative mx-5">
                <SearchIcon className="h-5 z-50 text-arsenic" />
                <input
                  className="absolute inset-0 rounded-full pl-11 bg-white text-arsenic focus:bg-white focus:border-[1px] focus:border-mySin placeholder:text-silverSand focus:outline-none"
                  type="text"
                  placeholder="buscar"
                />
              </div>
              <div className="p-3 text-left w-full h-auto">
                <section className="boxBig flex-1 flex flex-col h-[calc(100vh-350px)] overflow-y-auto ">
                  {professors.map((professor, index) => (
                    <div
                      className="mx-2 border-b-[1px] border-b-silverSand p-5 sm:flex justify-between items-center"
                      key={professor.id}
                    >
                      <div className="sm:flex justify-center items-center gap-4 mr-2">
                        <img
                          src={`${professor.image}`}
                          alt="logo img"
                          className="rounded-lg w-full max-w-[6rem] md:max-w-[7rem] xl:max-w-[8rem] m-auto "
                        />

                        <div className="flex text-center sm:text-left flex-col gap-1 my-2 sm:my-0">
                          <h1 className="font-bold text-base md:text-lg xl:text-xl inset-0">
                            {professor.nombre}
                          </h1>
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
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <button
                          className={`whitespace-nowrap ${
                            professorSelection[index]
                              ? "buttonOrange"
                              : "buttonBlack"
                          }`}
                          onClick={() => handleSeleccionado(index)}
                          disabled={professorSelection[index]}
                        >
                          {professorSelection[index]
                            ? "Seleccionado"
                            : "Seleccionar"}
                        </button>
                      </div>
                    </div>
                  ))}
                </section>
              </div>
              <div className="border-t-[1px] border-t-silverSand px-4 py-3 sm:flex justify-end gap-2 sm:px-6">
                <button
                  type="button"
                  className=" w-full buttonBlack sm:w-auto  mb-2 sm:mb-0"
                >
                  Añadir docente
                </button>

                <button
                  onClick={() => handleCloseModalDocente()}
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