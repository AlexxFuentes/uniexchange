import { LibraryIcon } from "@heroicons/react/outline";

export default function Universities() {
  return (
    <>
      <div className="sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0">
        <section className=" w-full h-[50px] border-b-[1px] border-b-silverSand font-bold flex justify-between items-center text-4xl">
          <h1>Perfil</h1>
          <h1>Nombre Universidad</h1>
          <LibraryIcon className="h-11 w-12" />
        </section>

        <section className="py-3 h-[calc(100%-50px)]">
          <div className="flex w-full h-1/3 border-b-[1px] border-b-silverSand">
            <div className="w-1/4  border-r-[1px] border-r-silverSand "></div>
            <div className="w-9/12 px-3"></div>
          </div>

          <div className="w-full h-auto p-3 border-b-[1px] border-b-silverSand">
            <h1>asdasljkd ajshdkjahsdjk hakjs hd</h1>
          </div>

          <div className="w-full h-1/6 flex justify-center items-center border-b-[1px] border-b-silverSand">
            <button className="buttonOrange">Editar</button>
          </div>

          <div className="w-full h-[45%] p-3 flex justify-center items-center" >
          <button className="buttonBlack">Editar</button>
          </div>
        </section>
      </div>
    </>
  );
}
