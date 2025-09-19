'use client'
import { useLanguage } from '@/idiomas/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  MagnifyingGlassIcon, 
  ShieldCheckIcon, 
  ArrowPathIcon,
  GlobeAltIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';
import { translations } from '@/idiomas/translations';

export default function Solution() {

  const {lang} = useLanguage();
  const t = translations[lang];

  const solutions = [
    {
      icon: MagnifyingGlassIcon,
      title: t.solution1_title,
      description: t.solution1_description,
      metrics: [
        { label: t.solution1_label1, value: "48.5%" },
        { label: t.solution1_label2, value: "≥0.5" }
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: t.solution2_title,
      description: t.solution2_description,
      metrics: [
        { label: t.solution2_label1, value: "57%" },
        { label: t.solution2_label2, value: "54.5%" }
      ]
    },
    {
      icon: ArrowPathIcon,
      title: t.solution3_title,
      description: t.solution3_description,
      metrics: [
        { label: t.solution3_label1, value: "~1.2s" },
        { label: t.solution3_label2, value: "+65%" }
      ]
    },
    {
      icon: GlobeAltIcon,
      title: t.solution4_title,
      description: t.solution4_description,
      metrics: [
        { label: t.solution4_label1, value: "100%" },
        { label: t.solution4_label2, value: t.solution4_value1 }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title= {t.solution_title}
        subtitle= {t.solution_subtitle}
        badge={{
          text: t.solution_text,
          icon: SparklesIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{solution.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {solution.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-[#021526]/40 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-[#FFD700] mb-1">{metric.value}</div>
                    <div className="text-sm text-[#EIF3F9]/70">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}