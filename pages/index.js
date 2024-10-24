import Image from "next/image";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [year, setYear] = useState();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <div className='container text-center'>
          <h2 className='text-4xl mb-6'>Hola bienvenido a</h2>
          <h1 className="text-7xl typewriter w-fit">SULANS</h1>
        </div>
        <Link href="/login" className="shadow-lg px-5 py-3 w-fit m-auto text-lg">Iniciar Sesión</Link>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <span>@{year} | Desarrollado por codesaint</span> -
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://portafolio-david-granados.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/window.svg'
            alt='Window icon'
            width={16}
            height={16}
          />
          Portafolio
        </a>
      </footer>
    </div>
  );
}
