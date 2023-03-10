import Head from 'next/head';
import { Jost } from '@next/font/google';
import Header from '@/wrappers/header/Header';
import Hero from '@/wrappers/hero/Hero';
import Services from '@/components/services-section/Services';
import Bestsellers from '@/components/bestsellers/Bestsellers';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Max Electronics | Home</title>
        <meta name='description' content='Main page of E-commerce' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Header />
      <main className={jost.className}>
        <Hero />
        <Services />
        <Bestsellers />
      </main>
    </>
  );
}
