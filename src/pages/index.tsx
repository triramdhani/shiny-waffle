import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Hero from '@/components/UI/Hero';
import Service from '@/components/UI/Service';
import About from '@/components/UI/About';
import Portfolio from '@/components/UI/Portofolio';
// import { HeroSection, NavBar } from '@/components';


export default function Home() {
  return (
    <>
      <Head>
        <title>tri.dev</title>
        <meta name="description" content="Portofolio Project Showcase" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
    </>
  )
}
