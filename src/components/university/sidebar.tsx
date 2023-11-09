"use client";

import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import { AcademicCapIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { AiFillShop, AiFillCreditCard } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { ReactNode } from "react";

import { useState } from "react";
import { useEffect, useRef } from "react";

export default function Sidebar() {
  interface Link {
    name: string;
    icon: string;
    link: string;
  }

  const iconComponents: { [key: string]: ReactNode } = {
    HomeIcon: <HomeIcon className="h-10 w-10 p-1 mr-1" />,
    AcademicCapIcon: <AcademicCapIcon className="h-10 w-10 p-1 mr-1" />,
    FaChalkboardTeacher: <FaChalkboardTeacher className="h-10 w-10 p-1 mr-1" />,
    PiStudentBold: <PiStudentBold className="h-10 w-10 p-1 mr-1" />,
    AiFillShop: <AiFillShop className="h-10 w-10 p-1 mr-1" />,
    BiLogOut: <BiLogOut className="h-10 w-10 p-1 mr-1" />,
  };

  const links: Link[] = [
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

  const profileUrl = "../avatar.svg";

  /* Para dejar activos los li */
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeProfile, setActiveProfile] = useState(true);

  const activateElement = (elementType: string, index: number | null) => {
    if (elementType === "profile") {
      setActiveProfile(!activeProfile);
      setActiveIndex(null);
    } else if (elementType === "link") {
      setActiveIndex(index);
      setActiveProfile(false);
    }
  };

  /* Detener animacion del git (logo) */
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    // Ocultar el GIF después de 5 segundos (5000 ms)
    const timeout = setTimeout(() => {
      setShowGif(false);
    }, 3000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-[13%] px-5 min-h-screen border-r-[1px] border-r-silverSand text-xl text-arsenic py-2">
      <div className="border-b-[1px] border-b-silverSand h-[50px]">
        {showGif ? (
          <img
            src="/C_claro.gif"
            width={200}
            height={15}
            alt="Logo de la web"
            className=" mb-2 mx-auto"
          />
        ) : (
          <Image
            src="/logo_sidebar.png"
            width={200}
            height={15}
            alt="logo img"
            className=" mb-2 mx-auto"
          />
        )}
      </div>
      <ul className="h-[calc(100%-130px)]">
        <div className="border-b-[1px] border-b-silverSand py-3">
          <Link href="/university">
            <li>
              <div
                className={`${
                  activeProfile ? "hoverUniversityProfiel" : ""
                } hover:hoverUniversityProfiel relative flex items-center justify-center xl:justify-start `}
                onClick={() => {
                  activateElement("profile", null);
                }}
              >
                <Image
                  className="h-12 w-12 rounded-full xl:mr-2"
                  width={12}
                  height={12}
                  src={profileUrl}
                  alt="profile img"
                />
                <div className="leading-5 hidden xl:inline truncate w-full ">
                  <h4 className="font-bold text-xl whitespace-nowrap w-3">
                    Nombre Universidad
                  </h4>
                  <p className=" text-base">@correo</p>
                </div>
                <DotsHorizontalIcon className="h-5 hidden xl:block" />

                <div
                  className={`${
                    activeProfile ? "opacity-100" : "opacity-0"
                  } hoverUniversityLine group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            </li>
          </Link>
        </div>

        <div className="flex justify-between flex-col h-full">
          <div className="flex py-4 gap-3 flex-col border-b-[1px] border-b-silverSand">
            {links.map((link, index) => (
              <Link href={link.link} passHref>
                <li
                  className={`${
                    activeIndex === index ? "hoverUniversity group" : ""
                  } hover:hoverUniversity flex justify-between relative`}
                  key={link.name}
                  onClick={() => {
                    activateElement("link", index);
                  }}
                >
                  <div className="flex items-center">
                    {iconComponents[link.icon]}
                    {link.name}
                  </div>
                  <div
                    className={`${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    } hoverUniversityLine group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </li>
              </Link>
            ))}
          </div>

          <div className="border-b-[1px] border-b-silverSand py-1 mb-2 h-full flex items-end">
            <div className="flex items-center">
              <AiFillCreditCard className="h-11 w-11 p-1 mr-1" />
              <div>
                <p className="font-bold">Plan:</p>
                <p>Profesional</p>
              </div>
            </div>
          </div>
          <div>
            <li className="hover:hoverUniversity flex justify-between relative">
              <Link href="/" passHref>
                <div className="flex items-center">
                  <BiLogOut className="h-10 w-10 p-1 mr-1" />
                  Salir
                </div>
              </Link>
            </li>
          </div>
        </div>
      </ul>
    </section>
  );
}
