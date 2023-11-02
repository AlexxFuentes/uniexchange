
interface CardProps {
    title: string;
    content: string;
    svg: React.ReactNode;
}

export default function Card({
    title = '50 +',
    content = 'Universidades',
    svg
}: CardProps) {

    return (
        <div className='bg-white px-32 rounded-lg py-6 shadow-2xl text-center'>
            <h2 className='text-arsenic text-xl font-bold mb-2'>{title} +</h2>
            <p className='text-arsenic font-semibold'>{content}</p>
            <div className="flex justify-center items-center">
                {svg}
            </div>
        </div>
    )
}