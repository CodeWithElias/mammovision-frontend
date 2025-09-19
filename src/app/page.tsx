import { Hero } from '@/components/sections/Hero';
import Introduction from '@/components/sections/Introduction';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Value from '@/components/sections/Value';
import Technology from '@/components/sections/Technology';
import Business from '@/components/sections/Business';
import Impact from '@/components/sections/Impact';
import Validation from '@/components/sections/Validation';
import Scalability from '@/components/sections/Scalability';
import Team from '@/components/sections/Team';
import Conclusion from  '@/components/sections/Conclusion';
import CallToAction from '@/components/sections/CallToAction';
// main.tsx o App.tsx
import { LanguageProvider } from '../idiomas/LanguageContext'


export default function Home() {
  return (
    <main className="min-h-screen">
        <Hero />
        <Introduction/>
        <Problem />
        <Solution/>
        <Value />
        <Technology/>
        <Business />
        <Impact />
        <Validation />
        <Scalability/>
        <Team />
        <Conclusion/>     
        <CallToAction />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 MammoVision - YAIS
          </p>
        </div>
      </footer>
    </main>
  );
}