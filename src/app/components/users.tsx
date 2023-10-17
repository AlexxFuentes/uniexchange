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
        <div  key={user.username} className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out">
            <Image className="rounded-full" width={40} height={40} src={user.userImg} alt="user-img" />
            <div className="truncate ml-4 leading-5">
                <h4 className="font-bold hover:underline text-[14px] truncate">
                    {user.username}
                </h4>
                <h5 className="text-[13px] text-gray-500 truncate">
                    {user.firtsname + " " + user.lastname}
                </h5>
            </div>
            <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                Follow
            </button>
        </div>
    )
}