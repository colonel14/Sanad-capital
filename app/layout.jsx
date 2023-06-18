import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Sanad Capital",
  description: "Sanad Capital",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
