import { Sidebar } from "../components/sidebar"
import { Header } from "../components/aluno/header"
import { DashboardContent } from "../components/aluno/dashboard-content"
import { QuickNavigation } from "../components/aluno/quick-navigation"
import { SearchBar } from "../components/aluno/search-bar"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <SearchBar />
          <QuickNavigation />
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}

