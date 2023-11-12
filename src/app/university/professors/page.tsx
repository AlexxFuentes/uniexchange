import { FaChalkboardTeacher } from "react-icons/fa";
import Header from "@/components/university/header";

export default function Professors() {
  return (
    <div className="px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0">
      <Header head='Docentes' Icon={FaChalkboardTeacher} nameUniversity="UNAH"/>
    </div>
  );
}
