'use client'
import { useLanguage } from '@/idiomas/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { 
  ChartBarIcon,
  CloudArrowUpIcon,
  BuildingLibraryIcon,
  DeviceTabletIcon,
  RocketLaunchIcon 
} from '@heroicons/react/24/outline';
import { translations } from '@/idiomas/translations';

export default function Scalability() {

  const {lang} = useLanguage();
  const t = translations[lang];

  const plans = [
    {
      icon: ChartBarIcon,
      title: t.scalability1_title,
      description: t.scalability1_description,
      metrics: [
        { label: t.scalability1_label1, value: "+5K" },
        { label: t.scalability1_label2, value: "+15%" }
      ]
    },
    {
      icon: CloudArrowUpIcon,
      title: t.scalability2_title,
      description: t.scalability2_description,
      metrics: [
        { label: "mAP", value: "+20%" },
        { label: "IoU", value: "≥0.7" }
      ]
    },
    {
      icon: BuildingLibraryIcon,
      title: t.scalability3_title,
      description: t.scalability3_description,
      metrics: [
        { label: t.scalability3_label1, value: "10+" },
        { label: t.scalability3_label2, value: "95%" }
      ]
    },
    {
      icon: DeviceTabletIcon,
      title: t.scalability4_title,
      description: t.scalability4_description,
      metrics: [
        { label: t.scalability4_label1, value: "3+" },
        { label: t.scalability4_label2, value: "+25%" }
      ]
    }
  ];

  return (
    <Section decorative>
      <SectionHeader
        title= {t.scalability_title}
        subtitle= {t.scalability_subtitle}
        badge={{
          text: t.scalability_text,
          icon: RocketLaunchIcon
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-xl" />
            <div className="relative bg-[#021526]/60 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFD700]/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <plan.icon className="w-7 h-7 text-[#021526]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{plan.title}</h3>
              <p className="text-[#EIF3F9]/80 leading-relaxed mb-6 flex-grow">{plan.description}</p>
              <div className="grid grid-cols-2 gap-4">
                {plan.metrics.map((metric, idx) => (
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