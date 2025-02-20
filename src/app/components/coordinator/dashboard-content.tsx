import { OverviewSection } from "./overview-section"
import { SchedulesSection } from "./schedules-section"
import { LocationsSection } from "./locations-section"
import { ClassScheduleSection } from "./class-schedule-section"
import { ParentMeetingsSection } from "./parent-meetings-section"

export function CoordinatorDashboardContent() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <OverviewSection />
        <ClassScheduleSection />
        <SchedulesSection />
        <LocationsSection />
        <ParentMeetingsSection />
      </div>
    </div>
  )
}

