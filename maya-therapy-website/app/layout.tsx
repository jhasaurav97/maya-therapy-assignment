import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* Load Inter Font */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* SEO Metadata */
export const metadata: Metadata = {
  title: {
    default:
      "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica, CA",
    template: "%s | Dr. Maya Reynolds, PsyD",
  },

  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA, offering therapy for anxiety, trauma, burnout, and perfectionism. In-person sessions and California telehealth available.",

  keywords: [
    "Santa Monica therapist",
    "anxiety therapy Santa Monica",
    "trauma therapist California",
    "burnout counseling",
    "CBT therapist Santa Monica",
    "EMDR therapy CA",
    "licensed psychologist Santa Monica",
    "telehealth therapy California",
  ],

  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],

  creator: "Dr. Maya Reynolds, PsyD",

  openGraph: {
    title:
      "Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapist in Santa Monica, CA",

    description:
      "Compassionate, evidence-based therapy for anxiety, trauma, and burnout. Serving Santa Monica and clients across California via telehealth.",

    type: "website",

    locale: "en_US",

    siteName: "Maya Reynolds Psychology",

  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Therapist",
    description:
      "Anxiety, trauma, and burnout therapy in Santa Monica. In-person and telehealth sessions available.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://mayareynoldspsych.com", // placeholder
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-(--bg-primary) text-(--text-primary)`}
      >
        {children}
      </body>
    </html>
  );
}
