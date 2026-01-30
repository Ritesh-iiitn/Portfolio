import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritesh Singh | Full Stack Developer",
  description:
    "Portfolio of Ritesh Singh – Full Stack Developer and competitive programmer showcasing projects, skills, and achievements.",
  openGraph: {
    title: "Ritesh Singh Portfolio",
    description:
      "Full Stack Developer portfolio featuring AI projects and competitive programming achievements.",
    url: "https://portfolio-7ndy7s7g5-ritesh-singhs-projects-d542ea92.vercel.app/",
    siteName: "Ritesh Singh Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
