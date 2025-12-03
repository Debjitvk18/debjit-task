export const metadata = {
  title: {
    default: "Noda – Improve Collaboration",
    template: "%s | Noda",
  },
 
  description:
    "Noda is an AI-powered collaboration and meeting assistant designed to streamline teamwork, capture insights, and improve productivity.",
 
  keywords: [
    "Noda",
    "AI meetings",
    "AI collaboration",
    "meeting assistant",
    "productivity tool",
    "team collaboration",
    "AI workspace",
  ],
 
  authors: [{ name: "Noda Team" }],
  creator: "Noda",
  publisher: "Noda",
 
  metadataBase: new URL("https://figma-to-nextjs-eosin.vercel.app/"),
 
  alternates: {
    canonical: "https://figma-to-nextjs-eosin.vercel.app/",
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
 
  openGraph: {
    title: "Noda - AI-Powered Collaboration",
    description:
      "Transform your meetings with Noda — an intelligent assistant that records, summarizes, and organizes your team's workflow.",
    url: "https://figma-to-nextjs-eosin.vercel.app/",
    siteName: "Noda",
    images: [
      {
        url: "/heroimage.png",
        width: 200,
        height: 200,
        alt: "Noda - AI Collaboration Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
 
  // --------------------------------------------------------
  // TWITTER META TAGS — Twitter does NOT fully use OpenGraph
  // --------------------------------------------------------
  twitter: {
    card: "summary_large_image",
    title: "Noda – AI-Powered Collaboration",
    description:
      "Noda helps teams run smarter meetings with AI summaries, action points, and workflow management.",
    images: ["/heroimage.png"],
    creator: "@noda",
  },
 
  icons: {
    apple: "/apple.png",
  },
 
  themeColor: "#eff3f9",
 
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
 
  category: "business",
 
  applicationName: "Noda AI",
};
 
 
import React from 'react'
import Navbar from './components/Navbar';
import HeroSection1 from './components/Herosection1';
import Features from './components/Features';
import MakeMeaningFul from './components/MakeMeaningFul';
import PiggyBank from './components/PiggyBank';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
const page = () => {
  return (
    <div className='max-w-[1670px] mx-auto w-full overflow-x-hidden'>
    <Navbar />
    <HeroSection1 />
    <Features />
    <MakeMeaningFul />
    <PiggyBank />
    <UseCases />  
    <Footer />
    </div>
   
  )
}

export default page