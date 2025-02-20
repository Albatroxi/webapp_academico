import { TeacherSidebar } from "../components/teacher/sidebar"
import { TeacherHeader } from "../components/teacher/header"
import { TeacherDashboardContent } from "../components/teacher/dashboard-content"

export default function TeacherDashboard() {
  return (
    <div className="flex h-screen bg-[#f0f4f8]">
      <TeacherSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TeacherHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f0f4f8]">
          <TeacherDashboardContent />
        </main>
      </div>
    </div>
  )
}

