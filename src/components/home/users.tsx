import Image from 'next/image'

interface UserProps {
    user: {
        username: string;
        userImg: string;
        firtsname: string;
        lastname: string;
    };
}

export default function Users({ user }: UserProps) {

    return (
        <div  key={user.username} className="flex items-center px-4 py-2 cursor-pointer hover:bg-arsenic/20 transition duration-500 ease-out">
            <Image className="rounded-full w-10 h-10" width={40} height={40} src={user.userImg} alt="user-img" priority />
            <div className="truncate ml-4 leading-5">
                <h4 className="font-bold text-arsenic hover:underline hover:text-mySin text-[14px] truncate">
                    {user.username}
                </h4>
                <h5 className="text-[13px] text-arsenic truncate hover:text-malibu">
                    {user.firtsname + " " + user.lastname}
                </h5>
            </div>
            <button className="ml-auto bg-mySin text-arsenic rounded-full text-sm px-3.5 py-1.5 font-bold">
                Seguir
            </button>
        </div>
    )
}