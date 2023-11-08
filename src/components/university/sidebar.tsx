import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from '@heroicons/react/solid'
import {
    BellIcon, BookmarkIcon,
    DotsHorizontalIcon, UserIcon,
    CurrencyDollarIcon, AcademicCapIcon, LibraryIcon, LogoutIcon
} from '@heroicons/react/outline'
import {Close} from "@/components/svg/icons";

export default function Sidebar() {
  return (
    <section className="w-2/12 px-5 min-h-screen border-r-[1px] border-r-silverSand text-xl">
      <div className="border-b-[1px] border-b-silverSand py-2">
        <Image
          src={"/logo_sidebar.png"}
          width={900}
          height={30}
          alt={"logo img"}
        />
      </div>
      <ul className="h-[calc(100%-120px)]">
        <div className="border-b-[1px] border-b-silverSand py-4">
          <li>
            <Link href={"/university"}>Perfil</Link>
          </li>
        </div>

        <div className="flex justify-between flex-col h-full">
          <div className="flex py-4 gap-3 flex-col border-b-[1px] border-b-silverSand">
            <li>
              <Link href={"/university/home"}  className="flex items-center">
              <HomeIcon className='h-10 w-10 p-1 ' />
                Inicio</Link>
            </li>

            <li>
              <Link href={"/university/faculties"} className="flex items-center">
              <AcademicCapIcon className='h-10 w-10 p-1 ' />
                Facultades</Link>
            </li>

            <li>
              <Link href={"/university/professors"}>
              <AcademicCapIcon className='h-10 w-10 p-1  ' />
                Docentes</Link>
            </li>
            <li>
              <Link href={"/university/students"}>Estudiantes</Link>
            </li>
            <li>
              <Link href={"/university/shops"}>Comercios</Link>
            </li>
          </div>
          <div className="border-b-[1px] border-b-silverSand py-1 mb-2 h-full flex items-end">
            <p>Plan</p>
          </div>
          <div>
            <li>
              <Link href={"/"}>
                
              <Close  />
                Salir</Link>
            </li>
          </div>
        </div>
      </ul>
    </section>
  );
}
