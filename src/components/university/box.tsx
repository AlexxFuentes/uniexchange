import ModalDocente from "@/components/university/modalDocente";
import ModalFacultad from "@/components/university/modalFacultad";
import ModalComecio from "@/components/university/modalComercio";
import React, { useState } from "react";
import { useAuth } from "@/context/auth-context";

export default function Box({
    text,
    subText,
    cuantity,
    button,
}: {
    text: string;
    subText: string;
    cuantity: number;
    button?: string;
}) {
    const { user } = useAuth()
    /* Modal de docentes */
    const [modalStatesDocente, setModalStatesDocente] = useState(false)
    const [modalStatesFacultad, setModalStatesFacultad] = useState(false)
    const [modalStatesComercio, setModalStatesComercio] = useState(false)

    const handleOpenModal = () => {
        // Abre el modal de Docente
        // Esta condicion tambien puede ser atravez de la ruta usando next navigation
        if (button === "Añadir docente") {
            setModalStatesDocente(true);
        }

        // Abre el modal de Facultad
        else if (button === "Crear facultad") {
            setModalStatesFacultad(true);
        }

        // Abre el modal de Facultad
        else if (button === "Añadir comercio") {
            setModalStatesComercio(true);
        }
    };

    const handleCloseModalDocente = () => {
        setModalStatesDocente(false);
    };

    const handleCloseModalFacultad = () => {
        setModalStatesFacultad(false);
    };

    const handleCloseModalComercio = () => {
        setModalStatesComercio(false);
    };

    return (
        <section className="w-full p-3 flex justify-center items-center ">
            <div className="sm:flex sm:justify-center sm:items-center w-full sm:h-1/3  ">
                <div className="text-center sm:text-left w-full sm:w-9/12 px-3 p-3">
                    <h1 className="font-bold text-base md:text-lg xl:text-xl">{text}</h1>
                    <span>{subText}</span>
                </div>

                <div className="w-full sm:w-1/4 font-bold text-base md:text-lg xl:text-xl text-center">
                    {cuantity}
                </div>

                <div className={`${!button && "hidden"} w-full sm:w-1/4 flex items-center justify-center `}>

                    <button className=" buttonOrange" onClick={handleOpenModal}>
                        {button}
                    </button>

                    {modalStatesDocente && (
                        <ModalDocente
                            university="nombreUniversidad"
                            text="¡Aqui se listan todos los usuarios registrados como docentes!"
                            handleCloseModalDocente={() => handleCloseModalDocente()}
                        />
                    )}

                    {modalStatesFacultad && (
                        <ModalFacultad
                            university="nombreUniversidad"
                            text="¡Asegurate de llenar todos los campos!"
                            handleCloseModalFacultad={() => handleCloseModalFacultad()}
                            id_user={user?.uid || ""}
                        />
                    )}

                    {modalStatesComercio && (
                        <ModalComecio
                            university="nombreUniversidad"
                            text="¡Asegurate de llenar todos los campos!"
                            handleCloseModalComercio={() => handleCloseModalComercio()}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
