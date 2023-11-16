export default function Box({
  text,
  subText,
  cuantity,
  button,
}: {
  text: string;
  subText: string;
  cuantity: number;
  button?: string;
}) {
  return (
    <section className="w-full p-3 flex justify-center items-center ">
      <div className="sm:flex sm:justify-center sm:items-center w-full sm:h-1/3  ">
        <div className="text-center sm:text-left w-full sm:w-9/12 px-3 p-3">
          <h1 className="font-bold text-base md:text-lg xl:text-xl">{text}</h1>
          <span>{subText}</span>
        </div>

        <div className="w-full sm:w-1/4 font-bold text-base md:text-lg xl:text-xl text-center">
          {cuantity}
        </div>

        <div className={`${!button && 'hidden'}  w-full sm:w-1/4 flex items-center justify-center `}>
          <button className=' buttonOrange'>
            {button}
          </button>
        </div>
      </div>
    </section>
  );
}
