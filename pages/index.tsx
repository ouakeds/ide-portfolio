import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/Navbar'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sabri Ouaked</title>
        <meta name="description" content="Développeur Fullstack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen bg-slate-100">
        <NavBar/>
    
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
