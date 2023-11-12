import Image from 'next/image'

interface PublicityProps {
    publicity: {
        publicityTitle: string;
        publicityDescription: string;
        publicityUrl: string;
        publicityImg: string;
    }
}

export default function Publicity({ publicity }: PublicityProps) {
    const { publicityTitle, publicityDescription, publicityUrl, publicityImg } = publicity;

    return (
        <a href={publicityUrl} target='_blank'>
            <div className='flex flex-col items-center justify-between px-4 py-2 space-x-1 hover:bg-blackWhite transition duration-200'>
                <h6 className='text-base font-medium text-mySin'>{publicityTitle}</h6>
                {publicityImg && <Image className='rounded-xl w-40' width={900} height={70} src={publicityImg} alt='article-img' priority />}
                <p className='text-base font-normal text-arsenic hover:text-mySin'>
                    {publicityDescription}
                </p>
            </div>
        </a>
    );
}