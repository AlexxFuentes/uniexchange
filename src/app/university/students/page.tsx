import { PiStudentBold } from "react-icons/pi";

export default function Students() {
  return (
    <div className="px-5 py-2 w-[87%] min-h-screen m-0">
      <section className=" w-full h-[50px] border-b-[1px] border-b-silverSand font-bold flex justify-between items-center text-4xl">
        <h1>Estudiantes</h1>
        <h1>Nombre Universidad</h1>
        <PiStudentBold className="h-11 w-12" />
      </section>
    </div>
  )
}
