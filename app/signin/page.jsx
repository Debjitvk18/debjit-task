export const metadata = {
  title: {
    default: "Sign In – Noda",
    template: "%s | Noda",
  },

  description: "Sign in to Noda to access AI-powered meeting tools and collaboration features.",

  keywords: [
    "Noda login",
    "Noda sign in",
    "AI meetings",
    "team login",
    "collaboration tool access",
  ],

  authors: [{ name: "Noda Team" }],
  creator: "Noda",
  publisher: "Noda",

  metadataBase: new URL("https://figma-to-nextjs-eosin.vercel.app/"),

  alternates: {
    canonical: "https://figma-to-nextjs-eosin.vercel.app/login",
  },

  robots: { index: true, follow: true },

  openGraph: {
    title: "Sign In – Noda",
    description: "Access your Noda dashboard and AI meeting tools.",
    url: "https://figma-to-nextjs-eosin.vercel.app/login",
    siteName: "Noda",
    images: [
      {
        url: "/heroimage.png",
        width: 200,
        height: 200,
        alt: "Noda Login Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sign In – Noda",
    description: "Sign in to your Noda workspace.",
    images: ["/heroimage.png"],
    creator: "@noda",
  },

  themeColor: "#eff3f9",
  applicationName: "Noda AI",
};

import SigninClient from "./SigninClient";

export default function Page() {
  return <SigninClient />;
}
