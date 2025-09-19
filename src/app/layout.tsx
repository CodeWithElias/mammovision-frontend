import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/idiomas/LanguageContext";
import { LanguageSelector } from "@/idiomas/LanguageSelector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MammoVision - Detección Inteligente de Cáncer de Mama",
  description: "Sistema de detección inteligente de cáncer de mama mediante Deep Learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <LanguageSelector />
            {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
