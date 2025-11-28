import React from 'react'

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
 
  metadataBase: new URL("https://yourdomain.com"),
 
  alternates: {
    canonical: "https://yourdomain.com",
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
    title: "Noda – AI-Powered Collaboration",
    description:
      "Transform your meetings with Noda — an intelligent assistant that records, summarizes, and organizes your team's workflow.",
    url: "https://yourdomain.com",
    siteName: "Noda",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noda – AI Collaboration Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
 
  twitter: {
    card: "summary_large_image",
    title: "Noda – AI-Powered Collaboration",
    description:
      "Noda helps teams run smarter meetings with AI summaries, action points, and workflow management.",
    images: ["/og-image.png"],
    creator: "@noda",
  },
 
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
 
  themeColor: "#eff3f9",
 
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
 
  category: "business",
 
  applicationName: "Noda AI",
};
 

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