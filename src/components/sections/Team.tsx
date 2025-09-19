'use client'
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { UsersIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguage } from '@/idiomas/LanguageContext';
import { translations } from '@/idiomas/translations';

export default function Team() {

  const { lang } = useLanguage();
  const t = translations[lang];

  const team = [
    {
      name: "Sergio Mauricio Nuñez",
      role: t.team1_role,
      image: "/images/team/mauricio.jpg",
      github: "sm-nunez404",
      linkedin: "smnunez404"
    },
    {
      name: "Silvia Colque",
      role: t.team2_role,
      image: "/images/team/silvia.jpg",
      github: "silvia-colque",
      linkedin: "colque-silvia-3825902b3"
    },
    {
      name: "Keila Rojas",
      role: t.team3_role,
      image: "/images/team/keila.jpg",
      github: "keila-rojas",
      linkedin: "keila-rojas-213161329"
    },
    {
      name: "Elias Puma",
      role: t.team4_role,
      image: "/images/team/elias.jpg",
      github: "elias-puma",
      linkedin: "elias-puma-3ab976281"
    }
  ];

  return (
    <>
      <Section decorative>
        <SectionHeader
          title= {t.team_title}
          subtitle={t.team_subtitle}
          badge={{
            text: t.team_text,
            icon: UsersIcon
          }}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021526] to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#021526]/20 group-hover:bg-[#021526]/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-white/80 mb-4">{member.role}</p>
                  <div className="flex gap-3">
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#FFD700] transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#FFD700] transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <SectionHeader
            title= {t.colaboration_title}
            subtitle= {t.colaboration_subtitle}
          />
          
          <Button
            href="https://github.com/sm-nunez404/mammovision"
            variant="secondary"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#021526] transform hover:scale-105 transition-all duration-200"
          >
            <FaGithub className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>{t.colaboration_span}</span>
          </Button>
        </div>
      </Section>
    </>
  );
}
