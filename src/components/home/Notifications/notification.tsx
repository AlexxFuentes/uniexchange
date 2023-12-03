import Image from 'next/image'

import Link from "next/link"
interface NotificationProps {
    notification: {
        title: string;
        imgn: string;
    }
}

export default function Notification({ notification }: NotificationProps) {
    const { title, imgn } = notification;

    return (
        <a target='_blank' className='flex border-b border-silverSand mr-4 ml-4'>
            <div className='flex px-4 py-2 space-x-4 items-center transition duration-200'>
                {imgn && <Image className='rounded-md w-60' width={900} height={70} src={imgn} alt='article-img' priority />}
                <div className='flex flex-col'>
                    <h6 className='text-base font-medium text-arsenic'>{title}</h6>
                    <Link href="/home/faculty">
                    <button className='buttonBlack w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
                        Ver Facultad
                    </button>
                    </Link>
                </div>
            </div>
        </a>
    );
}
