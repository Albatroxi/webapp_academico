"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface MeetingsModalProps {
  isOpen: boolean
  onClose: () => void
}

const meetingsData = [
  { date: "20/07/2023", time: "14:00", title: "Reunião de Pais e Mestres", location: "Auditório", status: "Agendada" },
  { date: "25/07/2023", time: "16:30", title: "Orientação Educacional", location: "Sala 105", status: "Agendada" },
  {
    date: "30/07/2023",
    time: "10:00",
    title: "Conselho de Classe",
    location: "Sala dos Professores",
    status: "Agendada",
  },
  { date: "05/08/2023", time: "15:00", title: "Palestra sobre Carreiras", location: "Auditório", status: "Agendada" },
  { date: "10/06/2023", time: "13:30", title: "Reunião Individual", location: "Sala 203", status: "Realizada" },
]

export function MeetingsModal({ isOpen, onClose }: MeetingsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white/80 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle>Reuniões e Eventos</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Hora</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Local</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {meetingsData.map((meeting) => (
              <TableRow key={`${meeting.date}-${meeting.time}`}>
                <TableCell>{meeting.date}</TableCell>
                <TableCell>{meeting.time}</TableCell>
                <TableCell>{meeting.title}</TableCell>
                <TableCell>{meeting.location}</TableCell>
                <TableCell>
                  <Badge variant={meeting.status === "Agendada" ? "default" : "secondary"}>{meeting.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
}

