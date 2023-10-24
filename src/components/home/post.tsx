import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/outline'
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

export default function Post({ post }: PostProps) {

    return (
        <div className='flex p-3 cursor-pointer border-b border-silverSand'>
            <Image className='h-11 w-11 rounded-full mr-4' src={post?.userImg} alt={'user-img'} width={11} height={11} />

            <div className='flex-1'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-1 whitespace-nowrap'>
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
                            {post?.name}
                        </h4>
                        <span className='text-sm sm:text-[15px] text-arsenic'>
                            @{post?.username}-{" "}
                        </span>
                        <span className="text-sm sm:text-[15px] hover:underline">
                            {post?.timestamp}
                        </span>
                        <DotsHorizontalIcon className='h-10 hoverEffect w-10 hover:bg-silverSand hover:text-black p-2' />
                    </div>
                </div>
                <p className='text-arsenic text-[15px] sm:text-[16px] mb-2'>
                    {post?.text}
                </p>
                <Image className='rounded-2xl mr-2' src={post?.img} alt={'post-img'} width={500} height={500} />

                <div className='flex justify-between text-gray-500 p-2'>
                    <ChatIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-mySin' />
                    <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-red' />
                    <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-red' />
                    <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-malibu' />
                    <ChartBarIcon className='h-9 w-9 hoverEffect p-2 hover:bg-arsenic hover:text-malibu' />
                </div>
            </div>
        </div>
    )
}
