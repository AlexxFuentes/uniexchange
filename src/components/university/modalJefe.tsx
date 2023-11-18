
export default function ModalJefe({
    facult,
    text,
    handleCloseModalJefe,
  }: {
    facult: string;
    text: string;
    handleCloseModalJefe: () => void;
  }) {
  return (
    <div className={`fixed inset-0 z-30 w-screen overflow-y-auto bg-arsenic/40 transition-opacity `}>
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
                      ¿Que docente signaras como jefe de la facultad "{facult}"?
                    </h1>
                    <div className="">
                      <p className="">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 text-left">
                    <div className="w-full  border-b-[1px] border-b-silverSand">
                        check nombre docentes
                    </div>
              </div>
              <div className="border-t-[1px] border-t-silverSand px-4 py-3 sm:flex justify-end gap-2 sm:px-6">
                <button
                  type="button"
                  className=" w-full buttonBlack sm:w-auto  mb-2 sm:mb-0"
                >
                  Asignar jefe
                </button>

                <button
                  onClick={() => handleCloseModalJefe()}
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
  )
}
