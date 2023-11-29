import Image from 'next/image'

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
                    <button className='mt-2 bg-arsenic text-white px-6 py-1 rounded-lg font-normal shadow-md hover:bg-malibu disabled:opacity-70'>
                        Novedades
                    </button>
                </div>
            </div>
        </a>
    );
}
