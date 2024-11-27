export default function Header() {
    return (
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-auto"
                  src="/logo.svg"  // Asegúrate de tener este logo
                  alt="MammoVision Logo"
                />
              </div>
              
              {/* Título */}
              <div>
                <h1 className="text-2xl font-bold text-white">MammoVision</h1>
                <p className="text-blue-100 text-sm">
                  Detección Inteligente de Cáncer de Mama
                </p>
              </div>
            </div>
  
            {/* Menú derecho */}
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-white hover:text-blue-100 transition-colors">
                Documentación
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                Contacto
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }