'use client'
import { useLanguage } from '@/idiomas/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  CpuChipIcon, 
  BeakerIcon, 
  ServerIcon,
  AdjustmentsHorizontalIcon,
  CommandLineIcon 
} from '@heroicons/react/24/outline';
import { translations } from '@/idiomas/translations';

export default function Technology() {

  const {lang} = useLanguage();
  const t = translations[lang];

  const technologies = [
    {
      icon: CpuChipIcon,
      title: t.tecnology1_title,
      description: t.tecnology1_description,
      metrics: [
        { label: t.tecnology1_label1, value: "48.5%" },
        { label: t.tecnology1_label2, value: "≥0.5" }
      ]
    },
    {
      icon: BeakerIcon,
      title: t.tecnology2_title,
      description: t.tecnology2_description,
      metrics: [
        { label: t.tecnology2_label1, value: "2.8K+" },
        { label: t.tecnology2_label2, value: "3.4K+" }
      ]
    },
    {
      icon: ServerIcon,
      title: t.tecnology3_title,
      description: t.tecnology3_description,
      metrics: [
        { label: t.tecnology3_label1, value: "P100" },
        { label: t.tecnology3_label2, value: "16GB" }
      ]
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: t.tecnology4_title,
      description: t.tecnology4_description,
      metrics: [
        { label: t.tecnology4_label1, value: "54.5%" },
        { label: t.tecnology4_label2, value: "57.1%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title= {t.tecnology_title}
        subtitle= {t.tecnology_subtitle}
        badge={{
          text: t.tecnology_text,
          icon: CommandLineIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{tech.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {tech.metrics.map((metric, idx) => (
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