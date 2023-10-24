import Head from 'next/head'
import Sidebar from '../components/home/sidebar'
import Feed from '../components/home/feed'
import Widgets from '../components/home/widgets'

export default function Home() {
  return (
    <div>
      <Head>
        <title>UniExchange</title>
        <meta name="description" content="UniExchange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex min-h-screen mx-auto'>
    	  <Sidebar />

        <Feed />

        <Widgets />
      </main>
    </div>
  )
}
