import ExperienceCard from "@/components/ExperienceCard";
import { personalExperience } from "@/data/portfolio";

export default function PersonalPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Personal Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My personal projects, education, certifications, and side endeavors that showcase my passion for technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {personalExperience.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {personalExperience.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Personal Experience Added Yet
              </h3>
              <p className="text-gray-600 mb-4">
                Update the `personalExperience` array in `/src/data/portfolio.ts` to add your projects, education, and other experiences.
              </p>
              <div className="text-sm text-gray-500">
                <p>💡 Pro tip: Include screenshots of your projects by adding images to `/public/images/`</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
