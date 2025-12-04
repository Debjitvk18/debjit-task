export const metadata = {
  title: {
    default: "Sign Up – Noda",
    template: "%s | Noda",
  },

  description:
    "Create your Noda account to collaborate smarter with AI-powered meeting tools, summaries, and workflow automation.",

  keywords: [
    "Noda signup",
    "Noda create account",
    "AI meeting signup",
    "team onboarding",
    "AI workspace registration",
  ],

  authors: [{ name: "Noda Team" }],
  creator: "Noda",
  publisher: "Noda",

  metadataBase: new URL("https://figma-to-nextjs-eosin.vercel.app/"),

  alternates: {
    canonical: "https://figma-to-nextjs-eosin.vercel.app/signup",
  },

  robots: { index: true, follow: true },

  openGraph: {
    title: "Sign Up – Noda",
    description: "Create your Noda account and unlock AI collaboration tools.",
    url: "https://figma-to-nextjs-eosin.vercel.app/signup",
    siteName: "Noda",
    images: [
      {
        url: "/heroimage.png",
        width: 10,
        height: 10,
        alt: "Noda Signup Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sign Up – Noda",
    description: "Join Noda today and enhance your team's workflow with AI.",
    images: ["/heroimage.png"],
    creator: "@noda",
  },

  themeColor: "#eff3f9",
  applicationName: "Noda AI",
};

import SignupClient from "./SignupClient";

export default function Page() {
  return <SignupClient />;
}
