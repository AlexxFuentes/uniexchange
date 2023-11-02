import Image from 'next/image'
import Head from 'next/head'
import Header from '@/components/landing-page/header'
import Footer from '@/components/landing-page/footer'
import Card from '@/components/landing-page/card'
import { IconUniversity, IconNimbus, IconStudent } from '@/components/svg/icons'

export default function Home() {
  return (
    <div>
      <Head>
        <title>UniExchange</title>
        <meta name="description" content="UniExchange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='bg-silverSand text-arsenic min-h-screen flex '>
        <div className='m-0 bg-white flex justify-center flex-1'>
          <div className='flex-1 bg-white text-center hidden lg:flex justify-center items-center'>
            {/* <div className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
              style={{ backgroundImage: "url('/logo_g.png')" }}
            ></div> */}
            <Image
              src={"/logo_g.png"}
              className='px-16 pb-[340px] hover:brightness-95' width={600} height={100} alt={'logo img'}
            />
          </div>
          <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12 flex flex-col gap-4 justify-center items-center'>

          </div>
        </div>
      </div>

      <div className='relative flex justify-center items-center'>
        <div className='flex justify-around items-center gap-7 z-[1] absolute -top-[300px]'>
          <Card
            title='50' content='Universidades'
            svg={<IconUniversity />}
          />

          <Card
            title='50' content='Universidades'
            svg={<IconNimbus />}
          />

          <Card
            title='50' content='Universidades'
            svg={<IconStudent />}
          />
        </div>
        <Footer />
      </div>
    </div>
  )
}
