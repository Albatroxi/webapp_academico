import { Bell, Menu, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-white">Dashboard</h1>
          <div className="flex items-center">
            <Button
              asChild
              variant="outline"
              className="mr-2 bg-gray-700 text-white hover:bg-gray-600 hover:text-white"
            >
              <Link href="/teacher">Portal do Professor</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="mr-2 bg-gray-700 text-white hover:bg-gray-600 hover:text-white"
            >
              <Link href="/coordinator">Portal do Coordenador</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="mr-2 bg-gray-700 text-white hover:bg-gray-600 hover:text-white"
            >
              <Link href="/matricula">Matrícula</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="mr-2 bg-gray-700 text-white hover:bg-gray-600 hover:text-white"
            >
              <Link href="/director">Portal do Diretor</Link>
            </Button>
            <button className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Ver notificações</span>
              <Bell className="h-6 w-6" aria-hidden="true" />
            </button>
            <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Perfil do usuário</span>
              <User className="h-6 w-6" aria-hidden="true" />
            </button>
            <button className="ml-3 md:hidden p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Abrir menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

