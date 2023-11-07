import { IconCheck } from '@/components/svg/icons'
//{ plan }

interface PricingCardProps {
    plan: string;
    precio: number;
    facultades: number;
    docentes: number;
    publicidad: number;
}


export default function PricingCard({
    plan,
    precio,
    facultades,
    docentes,
    publicidad
}: PricingCardProps) {

    return (
        <div className='rounded-xl border bg-mySin border-mySin p-6 shadow-2xl sm:px-8 lg:py-7 lg:px-16 relative'>
            <div className='text-center'>
                <h2 className='text-lg font-bold text-arsenic'>
                    {plan}
                    <span className='sr-only'>Plan</span>
                </h2>
            </div>

            <ul className='mt-6 space-y-2'>
                <li className='flex items-center gap-1'>
                    <IconCheck />
                    <span className='text-arsenic'> Limite de Facultades {facultades} </span>
                </li>

                <li className='flex items-center gap-1'>
                    <IconCheck />
                    <span className='text-arsenic'> Limite Docentes {docentes} </span>
                </li>

                <li className='flex items-center gap-1'>
                    <IconCheck />
                    <span className='text-arsenic'> Ganancias de Publicidad {publicidad}% </span>
                </li>
            </ul>

            <div className='text-center mb-4'>
                <p className='mt-2 sm:mt-4'>
                    <strong className='text-3xl font-bold text-arsenic sm:text-4xl'>
                        {precio}$
                    </strong>
                    <span className='text-sm font-medium text-arsenic'>/mes</span>
                </p>
            </div>

            <a
                href='#'
                className='z-[1] absolute -bottom-4 left-14 md:left-16 lg:left-24 mt-8 block rounded border font-bold border-arsenic bg-arsenic px-12 py-3 text-center text-sm text-white hover:ring-1 hover:ring-silverSand focus:outline-none focus:ring active:text-blackWhite'
            >
                Eligir plan
            </a>
        </div>
    );
}