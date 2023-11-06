import Image from 'next/image'
import Header from '@/components/landing-page/header'
import Footer from '@/components/landing-page/footer'
import Card from '@/components/landing-page/card'
import Link from 'next/link'
import { IconUniversity, IconNimbus, IconStudent, IconUser, IconUserRegister } from '@/components/svg/icons'

export default function Home() {
  return (
    <>
      <Header />

      <div className='text-arsenic min-h-screen flex'>
        <div className='m-0 mt-16 bg-white flex justify-center flex-1'>
          <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex justify-center items-center'>
            <Image
              src={"/logo_g.png"}
              className='w-full' width={600} height={100} alt={'logo img'}
            />
          </div>
          <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col gap-4 justify-center items-center'>
            <h2 className='font-bold text-2xl'>Se parte de esta gran comunidad</h2>
            <h2 className='font-bold'>Y empieza a aprender</h2>
            <Link
                className="mt-5 tracking-wide font-semibold bg-arsenic text-white py-4 px-10 rounded-lg hover:bg-electric hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                href="/auth/signin"
            >
                <IconUser />
                <span className="ml-3">Iniciar Sesión</span>
            </Link>
            <Link
                className="mt-5 tracking-wide font-semibold bg-arsenic text-white py-4 px-12 rounded-lg hover:bg-electric hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                href="/auth/signup"
            >
                <IconUserRegister />
                <span className="ml-3">Registrate</span>
            </Link>
          </div>
        </div>
      </div>

      <div className='grid lg:flex md:gap-4 md:grid justify-around items-center gap-6 z-[1] relative top-[100px]'>
        <Card
          title='50' content='Universidades'
          svg={<IconUniversity />}
        />

        <Card
          title='1,200' content='Facultades'
          svg={<IconNimbus />}
        />

        <Card
          title='66,000' content='Estudiantes'
          svg={<IconStudent />}
        />
      </div>

      <Footer />
    </>
  )
}
