import Image from 'next/image'

interface NewsProps {
    news: {
        newTitle: string;
        newDescription: string;
        newUrl: string;
        newImg: string;
    };
}

export default function News({ news }: NewsProps) {
    const { newTitle, newDescription, newUrl, newImg } = news;

    return (
        <a href={newUrl} target='_blank'>
            <div className='flex items-center justify-between px-4 py-2 space-x-1 hover:bg-arsenic transition duration-200'>
                <div className='space-y-0.5'>
                    <h6 className='text-sm font-bold text-white'>{newTitle}</h6>
                    <p className='text-xs font-semibold text-arsenic hover:text-mySin'>
                        {newDescription}
                    </p>
                </div>
                {newImg && <Image className='rounded-xl' width={70} height={70} src={newImg} alt='article-img'/>}
            </div>
        </a>
    );
}
