import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/ui/Section';
import dynamic from 'next/dynamic';

interface Section {
  id: string;
  Component: () => Promise<any>;
  priority?: boolean;
}

const sections: Section[] = [
  {
    id: 'introduction',
    Component: () => import('@/components/sections/Introduction'),
    priority: true
  },
  {
    id: 'problem',
    Component: () => import('@/components/sections/Problem')
  },
  {
    id: 'solution',
    Component: () => import('@/components/sections/Solution')
  },
  {
    id: 'value',
    Component: () => import('@/components/sections/Value')
  },
  {
    id: 'technology',
    Component: () => import('@/components/sections/Technology')
  },
  {
    id: 'business',
    Component: () => import('@/components/sections/Business')
  },
  {
    id: 'impact',
    Component: () => import('@/components/sections/Impact')
  },
  {
    id: 'validation',
    Component: () => import('@/components/sections/Validation')
  },
  {
    id: 'scalability',
    Component: () => import('@/components/sections/Scalability')
  },
  {
    id: 'team',
    Component: () => import('@/components/sections/Team')
  },
  {
    id: 'conclusion',
    Component: () => import('@/components/sections/Conclusion')
  },
  {
    id: 'call-to-action',
    Component: () => import('@/components/sections/CallToAction'),
    priority: true
  }
];

export default async function Home() {
  const loadSection = async (section: Section) => {
    const { default: Component } = await section.Component();
    return { id: section.id, Component };
  };

  const loadedSections = await Promise.all(
    sections.map(async (section) => {
      if (section.priority) {
        return await loadSection(section);
      }
      return {
        id: section.id,
        Component: dynamic(() => section.Component(), {
          loading: () => (
            <div className="animate-pulse bg-[#021526]/60 rounded-2xl h-96" />
          )
        })
      };
    })
  );

  return (
    <main className="min-h-screen">
      <Hero />
      
      {loadedSections.map(({ id, Component }) => (
        <Section key={id} id={id}>
          <Component />
        </Section>
      ))}

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MammoVision - YAIS
          </p>
        </div>
      </footer>
    </main>
  );
}