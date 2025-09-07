import Image from 'next/image';
import { Experience } from '@/data/portfolio';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-black border-2 border-matrix-400 shadow-terminal hover:shadow-matrix transition-all duration-300 overflow-hidden group">
      {experience.image && (
        <div className="relative h-48 w-full border-b-2 border-matrix-400">
          <Image
            src={experience.image}
            alt={`${experience.title} at ${experience.company || experience.organization}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-orbitron font-semibold text-matrix-400">
            &gt; {experience.projectUrl ? (
              <a
                href={experience.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-200 hover:underline"
              >
                {experience.title.toUpperCase()}
              </a>
            ) : (
              <span>{experience.title.toUpperCase()}</span>
            )}
          </h3>
          <span className="text-sm text-green-300 font-medium font-jetbrains-mono">
            [{experience.duration}]
          </span>
        </div>
        
        {(experience.company || experience.organization) && (
          <div className="text-green-300 font-medium mb-3 font-share-tech-mono">
            @ {experience.companyUrl || experience.organizationUrl ? (
              <a
                href={experience.companyUrl || experience.organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-matrix-400 transition-colors duration-200 hover:underline"
              >
                {(experience.company || experience.organization)?.toUpperCase()}
              </a>
            ) : (
              <span>{(experience.company || experience.organization)?.toUpperCase()}</span>
            )}
          </div>
        )}
        
        <p className="text-green-200 mb-4 leading-relaxed font-jetbrains-mono border-l-2 border-matrix-400 pl-3">
          <span className="text-matrix-400">&gt;&gt;&gt;</span> {experience.description}
        </p>
        
        {experience.highlights && experience.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-orbitron font-semibold text-matrix-400 mb-2">
              [ACHIEVEMENTS.LOG]
            </h4>
            <ul className="list-none text-sm text-green-200 space-y-1 font-jetbrains-mono">
              {experience.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-matrix-400 mr-2">&gt;</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {experience.technologies && experience.technologies.length > 0 && (
          <div>
            <h4 className="text-sm font-orbitron font-semibold text-matrix-400 mb-2">
              [TECH_STACK.CFG]
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-terminal-100 border border-green-400 text-green-400 text-xs px-2 py-1 font-jetbrains-mono hover:bg-green-400 hover:text-white transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
