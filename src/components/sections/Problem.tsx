'use client'
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  ExclamationTriangleIcon, 
  ClockIcon, 
  UsersIcon, 
  ChartBarIcon,
  ExclamationCircleIcon 
} from '@heroicons/react/24/outline';
import { translations } from '@/idiomas/translations';
import { useLanguage } from '@/idiomas/LanguageContext';

export default function Problem() {
  
  const {lang} = useLanguage();
  const t = translations[lang];

  const problems = [
    {
      icon: ExclamationTriangleIcon,
      title: t.problem1_title,
      description: t.problem1_description,
      metrics: [
        { label: t.problem1_label1, value: "2.3M+" },
        { label: t.problem1_label2, value: "685K+" }
      ]
    },
    {
      icon: ChartBarIcon,
      title: t.problem2_title,
      description: t.problem2_description,
      metrics: [
        { label: t.problem2_label1, value: "20%" },
        { label: t.problem2_label2, value: "~15%" }
      ]
    },
    {
      icon: ClockIcon,
      title: t.problem3_title,
      description: t.problem3_description,
      metrics: [
        { label: t.problem3_label1, value: "+85%" },
        { label: t.problem3_label2, value: "~4min" }
      ]
    },
    {
      icon: UsersIcon,
      title: t.problem4_title,
      description: t.problem4_description,
      metrics: [
        { label: t.problem4_label1, value: "60%" },
        { label: t.problem4_label2, value: "-40%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title={t.titulo_problema}
        subtitle={t.subtitulo_problema}
        badge={{
          text: t.text_problema,
          icon: ExclamationCircleIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {problems.map((problem, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{problem.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {problem.metrics.map((metric, idx) => (
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