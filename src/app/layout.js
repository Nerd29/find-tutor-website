import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "./components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediQueue",
  description: "Master new skills with expert-led courses",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} font-sans scroll-smooth h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* <Providers> */}
          <Navbar />
        {children}
        <Footer />
        {/* </Providers> */}
        
           <Toaster />
      </body>
    </html>
  );
}
