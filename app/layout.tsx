"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { store } from "./redux/store";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecom Shop With Tailwind and Typescript",
  description: "Given From Hishabee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-20">
        {/* <Providers>
          <Navbar />
          {children}
        </Providers> */}
        <Provider store={store}>
          <Navbar />
          <ToastContainer autoClose={3000} />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
