'use client'
import Image from 'next/image'
import Header from '@/components/landing-page/header'
import PricingCard from '@/components/plans/pricing-card'

export default function Plans() {

    return (
        <>
            <Header />
            <div className='bg-silverSand text-arsenic min-h-screen grid lg:flex max-xl:flex'>
                <div className='m-0 mt-16 bg-white shadow grid lg:flex justify-center flex-1'>
                    <div className='flex-1 bg-white text-center grid lg:flex justify-center items-center lg:border-r'>
                    {/* <div className='lg:w-1/2 xl:w-5/12 flex flex-col justify-center items-center lg:border-r'> */}
                        <Image
                            src={"/logo_g.png"}
                            className='px-16 hover:brightness-95' width={600} height={100} alt={'logo img'}
                        />
                    </div>
                    <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col gap-10 justify-center items-center'>

                        <h2 className='font-bold text-3xl'>Registrate</h2>

                        <PricingCard plan='Plan Básico' facultades={10} docentes={35} publicidad={5} precio={50} />
                        <PricingCard plan='Plan Profesional' facultades={50} docentes={55} publicidad={2} precio={100} />

                    </div>
                </div>
            </div>
        </>
    );
}