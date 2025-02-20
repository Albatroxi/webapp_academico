"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Calendar, FileText, Users } from "lucide-react"
import { GradesModal } from "./grades-modal"
import { DocumentsModal } from "./documents-modal"
import { MeetingsModal } from "./meetings-modal"

const navigationItems = [
  { title: "Notas", icon: Book, action: "openGrades" },
  { title: "Agenda", icon: Calendar, href: "#schedules" },
  { title: "Documentos", icon: FileText, action: "openDocuments" },
  { title: "Reuniões", icon: Users, action: "openMeetings" },
]

export function QuickNavigation() {
  const [isGradesModalOpen, setIsGradesModalOpen] = useState(false)
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false)
  const [isMeetingsModalOpen, setIsMeetingsModalOpen] = useState(false)

  const handleItemClick = (action: string | undefined, href: string | undefined) => {
    if (action === "openGrades") {
      setIsGradesModalOpen(true)
    } else if (action === "openDocuments") {
      setIsDocumentsModalOpen(true)
    } else if (action === "openMeetings") {
      setIsMeetingsModalOpen(true)
    } else if (href) {
      window.location.href = href
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {navigationItems.map((item) => (
          <Card
            key={item.title}
            className="hover:bg-gray-50 transition-colors cursor-pointer"
            onClick={() => handleItemClick(item.action, item.href)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Acesso rápido</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <GradesModal isOpen={isGradesModalOpen} onClose={() => setIsGradesModalOpen(false)} />
      <DocumentsModal isOpen={isDocumentsModalOpen} onClose={() => setIsDocumentsModalOpen(false)} />
      <MeetingsModal isOpen={isMeetingsModalOpen} onClose={() => setIsMeetingsModalOpen(false)} />
    </>
  )
}

