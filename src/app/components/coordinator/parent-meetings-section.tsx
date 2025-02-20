"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ParentMeeting {
  id: string
  date: string
  class: string
  responsible: string
}

interface Teacher {
  id: string
  name: string
}

const initialMeetings: ParentMeeting[] = [
  { id: "1", date: "2023-07-15", class: "Turma A", responsible: "Prof. Silva" },
  { id: "2", date: "2023-07-22", class: "Turma B", responsible: "Profa. Santos" },
]

const classes = ["Turma A", "Turma B", "Turma C", "Turma D"]

const teachers: Teacher[] = [
  { id: "1", name: "Prof. Silva" },
  { id: "2", name: "Profa. Santos" },
  { id: "3", name: "Prof. Oliveira" },
  { id: "4", name: "Profa. Lima" },
  { id: "5", name: "Prof. Ferreira" },
]

export function ParentMeetingsSection() {
  const [meetings, setMeetings] = useState<ParentMeeting[]>(initialMeetings)
  const [newMeeting, setNewMeeting] = useState<Omit<ParentMeeting, "id">>({
    date: "",
    class: "",
    responsible: "",
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddMeeting = () => {
    const id = (meetings.length + 1).toString()
    setMeetings([...meetings, { ...newMeeting, id }])
    setNewMeeting({ date: "", class: "", responsible: "" })
    setIsDialogOpen(false)
  }

  return (
    <section id="parent-meetings" className="mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-[#2c5282]">Reuniões de Pais e Alunos</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Adicionar Reunião</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Agendar Nova Reunião</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes da nova reunião de pais e alunos aqui. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="date" className="text-right">
                    Data
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={newMeeting.date}
                    onChange={(e) => setNewMeeting({ ...newMeeting, date: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="class" className="text-right">
                    Turma
                  </Label>
                  <Select onValueChange={(value) => setNewMeeting({ ...newMeeting, class: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione a turma" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls} value={cls}>
                          {cls}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="responsible" className="text-right">
                    Responsável
                  </Label>
                  <Select onValueChange={(value) => setNewMeeting({ ...newMeeting, responsible: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione o responsável" />
                    </SelectTrigger>
                    <SelectContent>
                      {teachers.map((teacher) => (
                        <SelectItem key={teacher.id} value={teacher.name}>
                          {teacher.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddMeeting}>
                  Salvar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Turma</TableHead>
                <TableHead>Responsável</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {meetings.map((meeting) => (
                <TableRow key={meeting.id}>
                  <TableCell>{new Date(meeting.date).toLocaleDateString("pt-BR")}</TableCell>
                  <TableCell>{meeting.class}</TableCell>
                  <TableCell>{meeting.responsible}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

