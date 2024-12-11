import { Hero } from '@/components/sections/Hero';
import Impact from '@/components/sections/Impact';
import Methodology from '@/components/sections/Methodology';
import Innovation from '@/components/sections/Innovation';
import Team from '@/components/sections/Team';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Impact Section */}
      <Impact />

      {/* Innovation Section */}
      <Innovation />

      {/* Methodology Section */}
      <Methodology />

      {/* Team Section */}
      <Team />

    

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 MammoVision - UAGRM FICCT
          </p>
        </div>
      </footer>
    </main>
  );
}