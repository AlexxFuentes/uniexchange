import {DotsHorizontalIcon, HeartIcon,} from '@heroicons/react/outline'
import Image from 'next/image'

interface PostProps {
    post: {
        id: string;
        name: string;
        username: string;
        userImg: string;
        img: string;
        text: string;
        timestamp: string;
    };
}

export default function Comentarios() {

    return (
        <div className='flex p-3 cursor-pointer border-b mr-4 ml-4 border-silverSand'>
            <Image className='h-10 w-11 rounded-full mr-4' src={'/avatar.svg'} alt={'/avatar.svg'} width={11} height={11} />

            <div className='flex-1'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-1 whitespace-nowrap'>
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
                        Oscar Hernan
                        </h4>
                        <span className='text-sm sm:text-[12px] text-arsenic p-7'>
                        </span>
                        <span className="text-sm sm:text-[12px] hover:underline p-2">
                            1 hour ago
                        </span>
                        <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-silverSand hover:text-black p-2' />
                    </div>
                </div>
                <p className='text-arsenic text-[15px] sm:text-[16px] mb-2'>
                Excelente docente!
                </p>
                <div className='flex justify-between text-gray-500 p-2'>
                    <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-red' />
                </div>
            </div>
        </div>
    )
}
