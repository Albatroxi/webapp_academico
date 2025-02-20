import { OverviewSection } from "./overview-section"
import { TeachersSection } from "./teachers-section"
import { ClassesSection } from "./classes-section"
import { SubjectsSection } from "./subjects-section"

export function DirectorDashboardContent() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <OverviewSection />
        <TeachersSection />
        <ClassesSection />
        <SubjectsSection />
      </div>
    </div>
  )
}

