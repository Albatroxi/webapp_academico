import { Sidebar } from "../components/sidebar"
import { CoordinatorHeader } from "../components/coordinator/header"
import { CoordinatorDashboardContent } from "../components/coordinator/dashboard-content"
import { QuickNavigation } from "../components/aluno/quick-navigation"
import { SearchBar } from "../components/aluno/search-bar"

export default function CoordinatorDashboard() {
  return (
    <div className="flex h-screen bg-[#f0f4f8]">
      <Sidebar bgColor="bg-[#2c5282]" textColor="text-gray-300" hoverBgColor="hover:bg-[#3182ce]" />
      <div className="flex flex-col flex-1 overflow-hidden">
        <CoordinatorHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f0f4f8] p-6">
          <SearchBar />
          <QuickNavigation />
          <CoordinatorDashboardContent />
        </main>
      </div>
    </div>
  )
}

