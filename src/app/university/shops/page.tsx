import { AiFillShop } from "react-icons/ai";
import Header from "@/components/university/header";
import Box from "@/components/university/box";
import { FaChevronLeft } from "react-icons/fa6";

export default function Shops() {

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
      image: '/img_prueba.png',
      nombre: 'Ingenieria en sistemas',
      jefe: 'Yhonny Aplicano',
      descripcion: 'Reyes de ingenieria.',
    },
    {
      id: 2,
      image: '/img_prueba.png',
      nombre: 'Ingenieria en sistemas',
      jefe: 'Yhonny Aplicano',
      descripcion: 'Reyes de ingenieria.',
    },
    {
      id: 3,
      image: '/img_prueba.png',
      nombre: 'Ingenieria en sistemas',
      jefe: 'Yhonny Aplicano',
      descripcion: 'Reyes de ingenieria.',
    },
    {
      id: 4,
      image: '/img_prueba.png',
      nombre: 'Ingenieria industrial',
      jefe: 'Yhonny Aplicano',
      descripcion: 'ingenieria.',
    }
  ];

  return (
    <div className="px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0 text-arsenic">
      <Header head='Comercios' Icon={AiFillShop} nameUniversity="UNAH"/>

      <div className="overflow-x-auto py-3 h-[calc(100vh-70px)] text-sm xl:text-base flex flex-col relative">
      {/* <FaChevronLeft className= 'absolute w-6 h-6'/> */}
        <Box
          text="Tus comercios"
          subText="Estos comercios aparecerán como publicidad"
          cuantity={30}
          button="Añadir comercio"
        />

<section className="boxBig flex-1 flex flex-col">
        {facultades.map((facultad) => (
          <div className="mx-2 border-b-[1px] border-b-silverSand p-5 sm:flex justify-between items-center">
            <div className="sm:flex justify-center items-center gap-4 mr-2">
                <img
                  src={`${facultad.image}`}
                  alt="logo img"
                  className="rounded-lg w-full max-w-[10rem] md:max-w-[15rem] xl:max-w-xs m-auto " />

                <div className="flex text-center sm:text-left flex-col gap-1 my-2 sm:my-0">
                  <h1 className="font-bold text-base md:text-lg xl:text-xl">
                    {facultad.nombre}
                  </h1>
                  <span>jefe: {facultad.jefe}</span>
                  <span>Descripcion: {facultad.descripcion}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                  <button className="buttonBlack">
                    Eliminar
                  </button>
                </div>
          </div>
            ))}
        </section>
      </div>
    </div>
  )
}
