import Link from "next/link"
import { Book, DollarSign, FileText } from "lucide-react"

const navItems = [
  { name: "Acadêmico", href: "#academic", icon: Book },
  { name: "Financeiro", href: "#financial", icon: DollarSign },
  { name: "Administrativo", href: "#administrative", icon: FileText },
]

export function TeacherSidebar() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-[#1a365d] text-white">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="h-8 w-auto" src="/logo.svg" alt="Portal do Professor" />
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-[#2c5282] hover:text-white"
                >
                  <item.icon className="mr-3 h-6 w-6 text-gray-400 group-hover:text-white" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

