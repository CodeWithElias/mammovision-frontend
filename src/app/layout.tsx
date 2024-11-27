import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MammoVision - Detección de Cáncer de Mama",
  description: "Sistema de detección inteligente de cáncer de mama mediante Deep Learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50`}>
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-white">MammoVision</h1>
                <p className="text-blue-100 text-sm hidden sm:block">
                  Detección Inteligente de Cáncer de Mama
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/sm-nunez404/mammovision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-white hover:text-blue-100 transition-colors"
                >
                  Documentación
                </a>
                <button className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                  Contacto
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {children}
        
        {/* Footer */}
        <footer className="mt-auto py-6 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 text-sm">
            © 2024 MammoVision. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
