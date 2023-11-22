export default function Data({ cuantity, Icon, name }: { cuantity: string, Icon: any, name: string }) {
  return (
    <div className="box flex flex-col justify-center items-center gap-2">
      <Icon className="h-8 w-8 xl:h-10 xl:w-10" />
      <span className="font-semibold">{name}</span>
      <span>{cuantity}</span>
    </div>
  );
}
