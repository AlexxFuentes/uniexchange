"use client"
import { LibraryIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { AcademicCapIcon } from "@heroicons/react/outline"
import { FaChalkboardTeacher } from "react-icons/fa"
import { PiStudentBold } from "react-icons/pi"
import { AiFillShop } from "react-icons/ai"
import Header from "@/components/university/header"
import Data from "@/components/university/data"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useAuth } from "@/context/auth-context"
import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "@/config/firebase.config"

export default function Universities() {
    const profileUrl = "../avatar.svg"
    const { user } = useAuth()
    const [university, setUniversity] = useState<QueryDocumentSnapshot<DocumentData, DocumentData> | null>(null)

    function findUniversity(fieldValue: string): Promise<QueryDocumentSnapshot<DocumentData, DocumentData> | null> {
        const res = query(collection(db, 'universities'), where("usr_id", "==", fieldValue));

        return new Promise((resolve) => {
            const unsub = onSnapshot(res, (snapshot) => {

                if (snapshot.docs.length > 0) {
                    resolve(snapshot.docs[0]);
                } else {
                    resolve(null);
                }
            });
        });
    }

    useEffect(() => {
        if (user) {
            findUniversity(user.uid).then((res) => {
                if (res) {
                    setUniversity(res);
                }
            });
        }
    }, [user]);

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
                            <h1 className="font-bold p-2 text-base md:text-lg xl:text-xl">
                                Informacion General
                            </h1>
                            <div className="flex flex-col gap-3">
                                <p className="">
                                    <span className="font-bold px-2">
                                        Nombre Universidad:
                                    </span>
                                    {university?.data().nombre}
                                </p>
                                <p className="">
                                    <span className="font-bold px-2">
                                        Pais:
                                    </span>
                                    {university?.data().pais}
                                </p>
                                <p className="">
                                    <span className="font-bold px-2">
                                        Dirección:
                                    </span>
                                    {university?.data().direccion}
                                </p>
                                <p className="">
                                    <span className="font-bold px-2">
                                        Plan:
                                    </span>
                                    {university?.data().plan || "No tiene plan"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-auto p-3 border-b-[1px] border-b-silverSand">
                        <p className="">
                            <span className="font-bold px-2">
                                Descripción:
                            </span>
                            {university?.data().description || "No tiene descripción"}
                        </p>
                    </div>

                    <div className="w-full p-3 flex justify-center items-center border-b-[1px] border-b-silverSand">
                        <button className="buttonOrange">Editar</button>
                    </div>

                    <div className="w-full p-3 flex justify-center items-center flex-col gap-2">
                        <h1 className="font-bold text-base md:text-lg xl:text-xl">
                            Datos Oficiales
                        </h1>
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-4">
                            <Data cuantity="2" Icon={AcademicCapIcon} name="Facultades" />
                            <Data cuantity="2" Icon={FaChalkboardTeacher} name="Docentes" />
                            <Data cuantity="4" Icon={PiStudentBold} name="Estudiantes" />
                            <Data cuantity="1" Icon={AiFillShop} name="Comercios" />
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
