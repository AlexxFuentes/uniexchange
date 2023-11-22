import { LuAlertCircle } from "react-icons/lu";
import { useState, useEffect } from 'react';

export default function ModalEliminar({
  shop,
  text,
  handleCloseModal,
}: {
  shop: string;
  text: string;
  handleCloseModal: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [eliminado, setEliminado] = useState(false);

  const handleEliminarClick = () => {
    setVisible(true);

    // Iniciar la animación después de un breve retraso
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        return newProgress <= 100 ? newProgress : prevProgress;
      });
    }, 30); // Intervalo de tiempo para suavizar la animación

    setTimeout(() => {
      clearInterval(intervalId);
      // Ocultar el componente después de la animación
      setVisible(false);
      handleCloseModal()
      // Marcar como eliminado después de la animación
      setEliminado(true);
    }, 3000);
  };

  return (
    <div className={`fixed inset-0 z-30 w-screen overflow-y-auto bg-arsenic/40 transition-opacity `}>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className={`absolute bg-white w-1/2 sm:w-1/4 p-3 right-0 m-5 rounded-xl overflow-auto text-center font-semibold transform ${visible ? 'block' : 'hidden'}`}>
          <h1 className="text-base md:text-lg xl:text-xl mb-2">{eliminado ? '¡Eliminado!' : '¡Eliminando!'}</h1>
          <div className=" h-1 bg-mySin" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative rounded-lg bg-white text-left shadow-xl  sm:my-4 w-full sm:max-w-xl ">
              <div className="bg-white rounded-lg">
                <div className="sm:flex sm:items-center p-2  text-center">
                  <div className="p-3 m-auto bg-red/10 rounded-full w-fit">
                    <LuAlertCircle className="text-3xl sm:text-4xl md:text-5xl text-red m-auto" />
                  </div>
                  <div className="w-full px-3 p-3 flex justify-center items-center sm:items-start flex-col gap-2">
                    <h1 className="font-bold text-base md:text-lg xl:text-xl">
                      ¿Quieres eliminar a {shop}?
                    </h1>
                    <div className="">
                      <p className="">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t-[1px] border-t-silverSand px-4 py-3 sm:flex justify-end gap-2 sm:px-6">
                <button
                  onClick={handleEliminarClick}
                  type="button"
                  className=" w-full buttonBlack sm:w-auto  mb-2 sm:mb-0"
                >
                  Eliminar
                </button>

                <button
                  onClick={() => handleCloseModal()}
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

