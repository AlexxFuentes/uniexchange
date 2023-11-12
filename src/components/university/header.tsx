

export default function Header({ head, Icon, nameUniversity }: { head: string, Icon: any, nameUniversity: string }) {

  return (
    <section className=" w-full h-[50px] border-b-[1px] border-b-silverSand font-bold flex justify-between items-center text-lg md:text-xl xl:text-2xl">
          <h1>{head}</h1>
          <h1>{nameUniversity}</h1>
          <Icon className="h-7 w-7 md:h-9 md:w-9 xl:h-10 xl:w-10 2xl:h-11 2xl:w-11" />
        </section>
  )
}
