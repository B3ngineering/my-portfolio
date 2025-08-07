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
            className="object-cover filter brightness-75 contrast-125 group-hover:brightness-100 transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-orbitron font-semibold text-matrix-400">
            &gt; {experience.title.toUpperCase()}
          </h3>
          <span className="text-sm text-green-300 font-medium font-jetbrains-mono">
            [{experience.duration}]
          </span>
        </div>
        
        {(experience.company || experience.organization) && (
          <p className="text-green-300 font-medium mb-3 font-share-tech-mono">
            @ {(experience.company || experience.organization)?.toUpperCase()}
          </p>
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
                  className="inline-block bg-terminal-100 border border-green-400 text-green-400 text-xs px-2 py-1 font-jetbrains-mono hover:bg-green-400 hover:text-black transition-colors duration-200"
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
