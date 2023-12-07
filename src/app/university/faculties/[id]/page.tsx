"use client";
import { AcademicCapIcon } from "@heroicons/react/outline";
import Header from "@/components/university/header";
import Box from "@/components/university/box";
import { FaTrash } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import ModalEliminar from "@/components/university/modalEliminar";
import ModalJefe from "@/components/university/modalJefe";
import Image from 'next/image'
import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "@/config/firebase.config";

interface Facult {
    id: number;
    image: any;
    nombre: string;
    jefe: string;
    descripcion: string;
}

const facultades: Facult[] = [
    {
        id: 1,
        image: "/img_prueba.png",
        nombre: "Ingenieria en sistemas",
        jefe: "Yhonny Aplicano",
        descripcion: "Reyes de ingenieria.",
    },
    {
        id: 2,
        image: "/img_prueba.png",
        nombre: "Ingenieria industrial",
        jefe: "Yhonny Aplicano",
        descripcion: "Ingenieria.",
    },
    {
        id: 3,
        image: "/img_prueba.png",
        nombre: "Ingenieria en sistemas",
        jefe: "Yhonny Aplicano",
        descripcion: "Reyes de ingenieria.",
    },
    {
        id: 4,
        image: "/img_prueba.png",
        nombre: "Ingenieria industrial",
        jefe: "Yhonny Aplicano",
        descripcion: "ingenieria.",
    },
];

export default function Faculties({ params }: { params: { id: string } }) {
    const { id } = params

    const [modalStates, setModalStates] = useState<boolean[]>(
        Array(facultades.length).fill(false)
    );

    const handleOpenModal = (index: number) => {
        // Crear una copia del array modalStates y actualizar el estado para la facultad seleccionado
        const updatedStates = [...modalStates];
        updatedStates[index] = true;
        setModalStates(updatedStates);
    };

    const handleCloseModal = (index: number) => {
        // Crear una copia del array modalStates y cerrar el modal para la facultad seleccionado
        const updatedStates = [...modalStates];
        updatedStates[index] = false;
        setModalStates(updatedStates);
    };

    /* Modal Asignar Jefe */
    const [modalStatesJefe, setModalStatesJefe] = useState<boolean[]>(
        Array(facultades.length).fill(false)
    );

    const handleOpenModalJefe = (index: number) => {
        // Crear una copia del array modalStates y actualizar el estado para la facultad seleccionado
        const updatedStates = [...modalStatesJefe];
        updatedStates[index] = true;
        setModalStatesJefe(updatedStates);
    };

    const handleCloseModalJefe = (index: number) => {
        // Crear una copia del array modalStates y cerrar el modal para la facultad seleccionado
        const updatedStates = [...modalStatesJefe];
        updatedStates[index] = false;
        setModalStatesJefe(updatedStates);
    };

    const [listFacultades, setListFacultades] = useState<QueryDocumentSnapshot<DocumentData, DocumentData>[]>([])

    const getIdUniversity = async () => {
        const res = query(collection(db, 'universities'), where("usr_id", "==", id));

        const universityDoc = await new Promise((resolve) => {
            const unsub = onSnapshot(res, (snapshot) => {
                if (snapshot.docs.length > 0) {
                    resolve(snapshot.docs[0]);
                } else {
                    resolve(null);
                }
            });
        });

        if (universityDoc) {
            const facultadesCollection = collection(db, 'universities', universityDoc.id, 'facultades');
            onSnapshot(
                query(facultadesCollection, orderBy('timestamp', 'desc')),
                (snapshot) => {
                    setListFacultades(snapshot.docs)
                }
            );
        }
    };


    // get data from firestore
    useEffect(() => {
        getIdUniversity();
    }, []);

    return (
        <div className=" px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0 text-arsenic">
            <Header head="Facultades" Icon={AcademicCapIcon} nameUniversity="UNAH" />

            <div className="overflow-x-auto py-3 h-[calc(100vh-70px)] text-sm xl:text-base flex flex-col ">
                <Box
                    text="Tus facultades"
                    subText="Manten actualizados los datos de tu universidad"
                    cuantity={25}
                    button="Crear facultad"
                />

                <section className="boxBig flex-1 flex flex-col">
                    {listFacultades.map((facultad, index) => (
                        <div className="mx-2 border-b-[1px] border-b-silverSand p-5 sm:flex justify-between items-center" key={facultad.id} >
                            <div className="sm:flex justify-center items-center gap-4 mr-2">

                                <Image className='rounded-lg w-full max-w-[10rem] md:max-w-[15rem] xl:max-w-xs m-auto'
                                    src={`${facultad.data().urlImg || "/LogoSistemas.jpg"}`} alt={'logo img'}
                                    width={900} height={100}
                                />

                                <div className="flex text-center sm:text-left flex-col gap-1 my-2 sm:my-0">
                                    <h1 className="font-bold text-base md:text-lg xl:text-xl">
                                        {facultad.data().name}
                                    </h1>
                                    <span>jefe: {facultad.data().jefe}</span>
                                    <span>Descripción: {facultad.data().descripcion}</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-1">
                                <button
                                    className="buttonBlack whitespace-nowrap  "
                                    onClick={() => handleOpenModalJefe(index)}
                                >
                                    Asignar jefe
                                </button>
                                <button
                                    className="buttonOrange p-2"
                                    onClick={() => handleOpenModal(index)}
                                >
                                    <FaTrash />
                                </button>

                                {/* Modales */}
                                {modalStates[index] && (
                                    <ModalEliminar
                                        shop={facultad.data().name}
                                        text="¡Esta facultad se eliminara de forma permanente!"
                                        handleCloseModal={() => handleCloseModal(index)}
                                    />
                                )}

                                {modalStatesJefe[index] && (
                                    <ModalJefe
                                        facult={facultad.data().name}
                                        text="¡Este docente administrara la facultad!"
                                        handleCloseModalJefe={() => handleCloseModalJefe(index)}
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
