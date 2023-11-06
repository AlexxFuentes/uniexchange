import Image from 'next/image'

interface NewsProps {
    news: {
        newTitle: string;
        newDescription: string;
        newUrl: string;
        newImg: string;
    }
}

export default function News({ news }: NewsProps) {
    const { newTitle, newDescription, newUrl, newImg } = news;

    return (
        <a href={newUrl} target='_blank'>
            <div className='flex flex-col items-center justify-between px-4 py-2 space-x-1 hover:bg-blackWhite transition duration-200'>
                <h6 className='text-base font-medium text-mySin'>{newTitle}</h6>
                {newImg && <Image className='rounded-xl w-40' width={900} height={70} src={newImg} alt='article-img' />}
                <p className='text-base font-normal text-arsenic hover:text-mySin'>
                    {newDescription}
                </p>
            </div>
        </a>
    );
}
