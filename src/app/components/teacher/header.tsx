import { Bell, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TeacherHeader() {
  return (
    <header className="bg-[#2c5282] text-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-white">Dashboard do Professor</h1>
          <div className="flex items-center">
            <Button
              asChild
              variant="outline"
              className="mr-2 bg-white text-[#2c5282] hover:bg-[#4299e1] hover:text-white"
            >
              <Link href="/">Portal do Aluno</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="mr-2 bg-white text-[#2c5282] hover:bg-[#4299e1] hover:text-white"
            >
              <Link href="/coordinator">Portal do Coordenador</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="mr-2 bg-white text-[#2c5282] hover:bg-[#4299e1] hover:text-white"
            >
              <Link href="/director">Portal do Diretor</Link>
            </Button>
            <button className="p-1 rounded-full text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4299e1]">
              <span className="sr-only">Ver notificações</span>
              <Bell className="h-6 w-6" aria-hidden="true" />
            </button>
            <button className="ml-3 p-1 rounded-full text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4299e1]">
              <span className="sr-only">Perfil do professor</span>
              <User className="h-6 w-6" aria-hidden="true" />
            </button>
            <button className="ml-3 md:hidden p-1 rounded-full text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4299e1]">
              <span className="sr-only">Abrir menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

