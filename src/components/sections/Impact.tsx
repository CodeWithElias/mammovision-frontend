'use client'
import { useLanguage } from '@/idiomas/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  ArrowTrendingDownIcon,
  ClockIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ChartBarSquareIcon 
} from '@heroicons/react/24/outline';
import { translations } from '@/idiomas/translations';

export default function Impact() {

  const {lang} = useLanguage();
  const t = translations[lang];

  const impacts = [
    {
      icon: ArrowTrendingDownIcon,
      title: t.impact1_title ,
      description: t.impact1_description ,
      metrics: [
        { label: t.impact1_label1, value: "+20%" },
        { label: t.impact1_label2, value: "+30%" }
      ]
    },
    {
      icon: ClockIcon,
      title: t.impact2_title,
      description: t.impact2_description,
      metrics: [
        { label: t.impact2_label1, value: "-40%" },
        { label: t.impact2_label2, value: "+65%" }
      ]
    },
    {
      icon: GlobeAltIcon,
      title: t.impact3_title,
      description: t.impact3_description,
      metrics: [
        { label: t.impact3_label1, value: "+60%" },
        { label: t.impact3_label2, value: "89%" }
      ]
    },
    {
      icon: CurrencyDollarIcon,
      title: t.impact4_title,
      description: t.impact4_description,
      metrics: [
        { label: t.impact4_label1, value: "40%" },
        { label: t.impact4_label2, value: "+65%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title= {t.impact_title}
        subtitle= {t.impact_subtitle}
        badge={{
          text: t.impact_text,
          icon: ChartBarSquareIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {impacts.map((impact, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <impact.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{impact.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{impact.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {impact.metrics.map((metric, idx) => (
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