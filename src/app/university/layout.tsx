import { ReactNode } from "react";
import Link from "next/link";

type UniversityLayoutProps = {
  children: ReactNode;
};

export default function UniversityLayout({ children }: UniversityLayoutProps) {
  return (
    <>
      <section>
        <ul>
        <li>
            <Link href={"/university"}>Perfil</Link>
          </li>

          <li>
            <Link href={"/university/home"}>Inicio</Link>
          </li>

          <li>
            <Link href={"/university/faculties"}>Faculades</Link>
          </li>

          <li>
            <Link href={"/university/professors"}>Docentes</Link>
          </li>
          <li>
            <Link href={"/university/students"}>Estudiantes</Link>
          </li>
          <li>
            <Link href={"/university/shops"}>Comercios</Link>
          </li>
        </ul>
      </section>
      {children}
    </>
  );
}
