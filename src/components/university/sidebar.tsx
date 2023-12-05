"use client"
import Link from "next/link"
import Image from "next/image"
import { HomeIcon } from "@heroicons/react/solid"
import { AcademicCapIcon, DotsHorizontalIcon } from "@heroicons/react/outline"
import { FaChalkboardTeacher } from "react-icons/fa"
import { PiStudentBold } from "react-icons/pi"
import { AiFillShop, AiFillCreditCard } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { ReactNode } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { useRouter } from "next/navigation"

interface Links {
    name: string;
    icon: string;
    link: string;
}

const iconComponents: { [key: string]: ReactNode } = {
    HomeIcon: (
        <HomeIcon className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
    ),
    AcademicCapIcon: (
        <AcademicCapIcon className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
    ),
    FaChalkboardTeacher: (
        <FaChalkboardTeacher className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
    ),
    PiStudentBold: (
        <PiStudentBold className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
    ),
    AiFillShop: (
        <AiFillShop className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
    ),
    BiLogOut: (
        <BiLogOut className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
    ),
};

const links: Links[] = [
    {
        name: "Inicio",
        icon: "HomeIcon",
        link: "/university/home",
    },
    {
        name: "Facultades",
        icon: "AcademicCapIcon",
        link: "/university/faculties",
    },
    {
        name: "Docentes",
        icon: "FaChalkboardTeacher",
        link: "/university/professors",
    },
    {
        name: "Estudiantes",
        icon: "PiStudentBold",
        link: "/university/students",
    },
    {
        name: "Comercios",
        icon: "AiFillShop",
        link: "/university/shops",
    },
];

export default function Sidebar() {

    const profileUrl = "../avatar.svg";
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout, logoutGoogle, login } = useAuth();
    const [showGif, setShowGif] = useState(true);

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();

        if (user?.providerId === "google.com") {
            logoutGoogle();
            router.push("/");
        } else {
            logout();
            router.push("/");
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowGif(false);
        }, 2700);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="w-[10%] xl:w-[19%] sm:p-1 sm:px-2 xl:px-5 xl:py-2 min-h-screen border-r-[1px] border-r-silverSand xl:text-sm 2xl:text-lg text-arsenic">
            <div className="border-b-[1px] border-b-silverSand h-[50px] flex items-center justify-center ">
                {showGif ? (
                    <Image
                        src="/C_claro.gif"
                        width={200}
                        height={15}
                        alt="Logo de la web"
                        className="mb-2 mx-auto hidden xl:block"
                    />
                ) : (
                    <Image
                        src="/logo_sidebar.png"
                        width={200}
                        height={15}
                        alt="logo img"
                        className=" mb-2 mx-auto hidden xl:block w-auto"
                        priority
                    />
                )}
                <Image
                    src="/logo_favico.png"
                    width={40}
                    height={15}
                    alt="logo img"
                    className=" mb-2 mx-auto xl:hidden w-auto"
                    priority
                />
            </div>
            <ul className="h-[calc(100%-130px)]">
                <div className="border-b-[1px] border-b-silverSand py-3">
                    <Link href="/university">
                        <li>
                            <div className={`${pathname === "/university" ? "hoverUniversityProfiel" : ""} hover:hoverUniversityProfiel relative flex items-center justify-center xl:justify-start px-[2px]`}>
                                <Image
                                    className=" h-12 w-12 rounded-full xl:mr-2"
                                    width={12}
                                    height={12}
                                    src={profileUrl}
                                    alt="profile img"
                                />
                                <div className="leading-5 hidden xl:inline truncate w-full ">
                                    <h4 className="font-bold 2xl:text-xl whitespace-nowrap w-3">
                                        Nombre Universidad
                                    </h4>
                                    <p className="text-xs 2xl:text-base">@correo</p>
                                </div>
                                <DotsHorizontalIcon className="h-5 hidden xl:block" />

                                <div className={`${pathname === "/university" ? "opacity-100" : "opacity-0"} hoverUniversityLine group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </div>
                        </li>
                    </Link>
                </div>

                <div className="flex justify-between flex-col h-full">
                    <div className="flex py-4 gap-3 flex-col border-b-[1px] border-b-silverSand">
                        {links.map((link, index) => (
                            <Link href={link.link} key={index}>
                                <li className={`${pathname === link.link ? "hoverUniversity group" : ""} hover:hoverUniversity flex justify-between relative `}
                                /*                   onClick={() => {
                                  activateElement("link", index);
                                }} */
                                >
                                    <div className=" m-auto xl:flex xl:items-center xl:m-0">
                                        <div className="">{iconComponents[link.icon]}</div>
                                        <div className=" hidden xl:block">{link.name}</div>
                                    </div>
                                    <div
                                        className={`${pathname === link.link ? "opacity-100" : "opacity-0"
                                            } hoverUniversityLine group-hover:opacity-100 transition-opacity duration-300`}
                                    ></div>
                                </li>
                            </Link>
                        ))}
                    </div>

                    <div className="border-b-[1px] border-b-silverSand py-1 mb-2 h-full flex items-end">
                        <div className="mx-auto xl:flex xl:items-center xl:m-0">
                            <AiFillCreditCard className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
                            <div>
                                <div className=" hidden xl:block">
                                    <p className="font-bold">Plan: <span className="font-normal">Profesional</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-full hover:hoverUniversity text-arsenic flex items-center xl:justify-start mt-auto border-t-[1px] border-t-silverSand ">
                            <button
                                onClick={handleLogout}
                                className="flex justify-center items-center "
                            >
                                <BiLogOut className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
                                <span className="hidden xl:inline xl:text-sm 2xl:text-lg">Salir</span>
                            </button>
                        </div>
                    </div>
                </div>
            </ul>
        </section>
    );
}
