import ExperienceCard from "@/components/ExperienceCard";
import { professionalExperience } from "@/data/portfolio";

export default function ProfessionalPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my professional journey, roles, and accomplishments in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {professionalExperience.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {professionalExperience.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Professional Experience Added Yet
              </h3>
              <p className="text-gray-600 mb-4">
                Update the `professionalExperience` array in `/src/data/portfolio.ts` to add your work experience.
              </p>
              <div className="text-sm text-gray-500">
                <p>💡 Pro tip: Include photos by adding images to `/public/images/`</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
