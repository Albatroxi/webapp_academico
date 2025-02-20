import { Sidebar } from "../components/sidebar"
import { DirectorHeader } from "../components/director/header"
import { DirectorDashboardContent } from "../components/director/dashboard-content"
import { QuickNavigation } from "../components/aluno/quick-navigation"
import { SearchBar } from "../components/aluno/search-bar"

export default function DirectorDashboard() {
  return (
    <div className="flex h-screen bg-[#f0f4f8]">
      <Sidebar bgColor="bg-[#1a365d]" textColor="text-gray-300" hoverBgColor="hover:bg-[#2c5282]" />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DirectorHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f0f4f8] p-6">
          <SearchBar />
          <QuickNavigation />
          <DirectorDashboardContent />
        </main>
      </div>
    </div>
  )
}

