import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jwellery-app",
  description: "jwellery website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} "maz-w-screen-xl mx-auto"`}>
        <Header/>
        {children}</body>
        <Footer/>
    </html>
  );
}
