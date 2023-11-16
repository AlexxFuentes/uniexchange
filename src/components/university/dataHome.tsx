import Link from "next/link";

export default function DataHome({
  cuantity,
  Icon,
  name,
  link,
}: {
  cuantity: string;
  Icon: any;
  name: string;
  link: string;
}) {
  return (
    <div className="boxHome m-auto md:m-0 w-4/5 md:w-auto flex flex-col sm:flex-row justify-between items-center gap-5">
      <div className="flex flex-col gap-5 justify-center items-center sm:items-start">
        <Icon className="h-10 w-10 sm:h-12 sm:w-12 xl:h-14 xl:w-14" />
        <h1 className=" text-base md:text-lg xl:text-xl">{name}</h1>
        <h1 className="font-semibold text-base md:text-lg xl:text-xl">
          {cuantity}
        </h1>
      </div>
      <div className="">
        <Link href={link}>
          <button className="buttonBlack">Ver {name}</button>
        </Link>
      </div>
    </div>
  );
}
