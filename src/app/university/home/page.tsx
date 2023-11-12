import { HomeIcon } from "@heroicons/react/solid";
import Header from "@/components/university/header";

export default function Home() {
  return (
    <div className="px-1 sm:p-1 sm:px-2 xl:px-5 xl:py-2 w-[90%] xl:w-[87%] min-h-screen m-0">
      <Header head='Inicio' Icon={HomeIcon} nameUniversity="UNAH"/>
    </div>
  );
}
