'use client'
import { useLanguage } from '@/idiomas/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  CurrencyDollarIcon, 
  CloudIcon, 
  WrenchIcon, 
  BeakerIcon,
  BuildingOfficeIcon 
} from '@heroicons/react/24/outline';
import { translations } from '@/idiomas/translations';

export default function Business() {

  const {lang} = useLanguage();
  const t = translations[lang];

  const businessModels = [
    {
      icon: CurrencyDollarIcon,
      title: t.business1_title,
      description: t.business1_description,
      metrics: [
        { label: t.business1_label1, value: "40%" },
        { label: t.business1_label2 , value: "+65%" }
      ]
    },
    {
      icon: CloudIcon,
      title: t.business2_title,
      description: t.business2_description,
      metrics: [
        { label: t.business2_label1 , value: "~48h" },
        { label: t.business2_label2 , value: "99.9%" }
      ]
    },
    {
      icon: WrenchIcon,
      title: t.business3_title,
      description: t.business3_description,
      metrics: [
        { label: t.business3_label1 , value: "24/7" },
        { label: t.business3_label2 , value: "≤2h" }
      ]
    },
    {
      icon: BeakerIcon,
      title: t.business4_title,
      description: t.business4_description,
      metrics: [
        { label: t.business4_label1 , value: "30d" },
        { label: t.business4_label2 , value: "95%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title= {t.business_title}
        subtitle= {t.business_subtitle}
        badge={{
          text: t.business_text,
          icon: BuildingOfficeIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {businessModels.map((model, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <model.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{model.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{model.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {model.metrics.map((metric, idx) => (
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