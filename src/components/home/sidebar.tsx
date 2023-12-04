"use client";
import {
  BellIcon,
  BookmarkIcon,
  DotsHorizontalIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  LibraryIcon,
  LogoutIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import SidebarMenuItem from "./sidebar-menu-item";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, login } = useAuth();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
    router.push("/");
  };

  /* Detener animacion del git (logo) */
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    // Ocultar el GIF después de 5 segundos (5000 ms)
    const timeout = setTimeout(() => {
      setShowGif(false);
    }, 2700);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timeout);
  }, []);

  return (
    
    <div className="hidden sm:flex flex-col p-2 xl:items-start h-screen xl:ml-10">
      {/* hidden sm:flex flex-col p-2 xl:items-start h-screen xl:ml-10 */}
      {/* fixed */}
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
            className=" mb-2 mx-auto hidden xl:block"
          />
        )}
        <Image
          src="/logo_favico.png"
          width={40}
          height={15}
          alt="logo img"
          className=" mb-2 mx-auto xl:hidden"
        />
      </div>

      {user && (
        <div
          className={`${
            pathname === "/university" ? "hoverUniversityProfiel" : ""
          } hover:hoverUniversityProfiel relative flex items-center justify-center xl:justify-start px-[2px] mt-5`}
        >
          <Link href={'/home/perfil'} className="flex items-center">
          <Image
            className="h-10 w-10 rounded-full xl:mr-2"
            width={900}
            height={100}
            src={user.photoURL || "./avatar.svg"}
            alt={"profile img"}
          />
          <div className="leading-5 hidden xl:inline whitespace-nowrap">
            <h4 className="font-bold 2xl:text-xl ">{user.displayName}</h4>
            <p className="text-xs 2xl:text-base">@{user.email.split("@")[0]}</p>
          </div>
          <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
          
          </Link>
        </div>
      )}
      
      <div className="mt-4 mb-2.5 xl:items-start w-full flex flex-col gap-5 border-t-[1px] border-t-silverSand pt-5">
        <SidebarMenuItem text="Inicio" Icon={HomeIcon} active link="/home" />
        <SidebarMenuItem text="Universidades" Icon={LibraryIcon} link="/home/seguir"/>
        {user && (
          <>
            <SidebarMenuItem text="Notificaciones" Icon={BellIcon} link="/home/notifications"/>
            <SidebarMenuItem text="Guardados" Icon={BookmarkIcon} link="/home/saved"/>
            <SidebarMenuItem text="Facultades" Icon={AcademicCapIcon} link="/home/faculties"/>
            {/* <SidebarMenuItem text="suscripciones" Icon={CurrencyDollarIcon} link="/home/home"/> */}
          </>
        )}
      </div>

      {user ? (
        <>
          {/* <button className="buttonOrange rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Post
          </button> */}
          <div className=" w-full hover:hoverUniversity text-arsenic flex items-center xl:justify-start mt-auto border-t-[1px] border-t-silverSand ">
            <button
              onClick={handleLogout}
              className="flex justify-center items-center "
            >
              <LogoutIcon className="h-6 w-6 md:h-8 md:w-8 xl:h-6 xl:w-6 xl:mr-1" />
              <span className="hidden xl:inline xl:text-sm 2xl:text-lg">Salir</span>
            </button>
          </div>
        </>
      ) : (
        <Link href="/auth/signin">
          <button className="buttonOrange rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Iniciar sesión
          </button>
        </Link>
      )}
    </div>
  );
}
