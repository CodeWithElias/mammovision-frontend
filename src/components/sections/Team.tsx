import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "Mauricio Núñez",
      role: "Desarrollo Principal",
      image: "/images/team/member1.jpg",
      github: "sm-nunez404",
      linkedin: "smnunez404"
    },
    {
      name: "Silvia Colque",
      role: "Investigación y Desarrollo",
      image: "/images/team/member2.jpg",
      github: "silvia-colque",
      linkedin: "colque-silvia-3825902b3"
    },
    {
      name: "Keila Rojas",
      role: "Machine Learning",
      image: "/images/team/member3.jpg",
      github: "keila-rojas",
      linkedin: "keila-rojas-213161329"
    },
    {
      name: "Elias Puma",
      role: "Frontend",
      image: "/images/team/member4.jpg",
      github: "elias-puma",
      linkedin: "elias-puma-3ab976281"
    }
  ];

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Equipo de Investigación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un equipo multidisciplinario comprometido con la innovación en salud.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            ¿Interesado en Colaborar?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Estamos buscando colaboradores para expandir el alcance de MammoVision.
          </p>
          <a
            href="https://github.com/sm-nunez404/mammovision"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
            <span>Contribuir en GitHub</span>
          </a>
        </div>
      </section>
    </>
  );
}
