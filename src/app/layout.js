import Header from "@/components/header";
import Footer from "@/components/footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next and Fast Auth | Authentication made easy with Next.js and FastAPI",
  description:
    "Next and Fast Auth is a powerful authentication solution built with Next.js and FastAPI. Simplify your authentication flow and secure your application effortlessly.",
  keywords: "Next.js, FastAPI, authentication, security",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div
          className={`${geistSans.variable} ${geistMono.variable} font-sans`}
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
