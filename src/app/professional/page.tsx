import ExperienceCard from "@/components/ExperienceCard";
import { professionalExperience } from "@/data/portfolio";

export default function ProfessionalPage() {
  return (
    <div className="bg-green-200 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            A showcase of my professional journey in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {professionalExperience.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {professionalExperience.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-black rounded-lg shadow-md p-8 max-w-md mx-auto border-2 border-matrix-400 text-white">
              <h3 className="text-lg font-semibold text-matrix-400 mb-2">
                No Professional Experience Added Yet
              </h3>
              <p className="text-green-200 mb-4">
                Update the `professionalExperience` array in `/src/data/portfolio.ts` to add your work experience.
              </p>
              <div className="text-sm text-green-300">
                <p>💡 Pro tip: Include photos by adding images to `/public/images/`</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
