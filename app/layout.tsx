import type { Metadata } from "next";
import { Inter,Roboto,Salsa } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/providers";
const salsa = Salsa({subsets:['latin'],weight:['400']})


export const metadata: Metadata = {
  title: "Esi's Kitchen",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children:React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={salsa.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
