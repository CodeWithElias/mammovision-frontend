'use client'
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  HeartIcon, 
  ClockIcon, 
  ExclamationTriangleIcon,
  LightBulbIcon 
} from '@heroicons/react/24/outline';
import { Lang, useLanguage } from '@/idiomas/LanguageContext';
import { translations } from '@/idiomas/translations';

export default function Introduction() {

  const {lang} = useLanguage();
  const t = translations[lang];
  
  const challenges = [
    {
      icon: HeartIcon,
      title: t.desafio1_titulo,
      description: t.desafio1_description,
      metrics: [
        { label: t.desafio1_label1, value: "2.3M+" },
        { label: t.desafio1_label2, value: t.desafio1_value }
      ]
    },
    {
      icon: ClockIcon,
      title: t.desafio2_titulo,
      description: t.desafio2_description,
      metrics: [
        { label: t.desafio2_label1, value: "+30%" },
        { label: t.desafio2_label2, value: t.desafio2_value }
      ]
    },
    {
      icon: ExclamationTriangleIcon,
      title: t.desafio3_titulo,
      description: t.desafio3_description,
      metrics: [
        { label: t.desafio3_label1, value: "10-20%" },
        { label: t.desafio3_label2, value: t.desafio3_value }
      ]
    },
    {
      icon: LightBulbIcon,
      title: t.desafio4_titulo,
      description: t.desafio4_description,
      metrics: [
        { label: t.desafio4_label1, value: "91.2%" },
        { label: t.desafio4_label2, value: "~1.2s" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title={t.titulo_desafio}
        subtitle={t.subtitulo_desafio}
        badge={{
          text: t.text_desafio,
          icon: HeartIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {challenges.map((challenge, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <challenge.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{challenge.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{challenge.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {challenge.metrics.map((metric, idx) => (
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