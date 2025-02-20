import { TeacherAcademicSection } from "./academic-section"
import { TeacherFinancialSection } from "./financial-section"
import { TeacherAdministrativeSection } from "./administrative-section"

export function TeacherDashboardContent() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <TeacherAcademicSection />
        <TeacherFinancialSection />
        <TeacherAdministrativeSection />
      </div>
    </div>
  )
}

