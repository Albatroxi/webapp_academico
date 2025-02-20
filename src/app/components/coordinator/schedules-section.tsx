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

interface Schedule {
  id: string
  day: string
  startTime: string
  endTime: string
  subject: string
  teacher: string
  room: string
}

const initialSchedules: Schedule[] = [
  {
    id: "1",
    day: "Segunda",
    startTime: "08:00",
    endTime: "10:00",
    subject: "Programação Orientada a Objetos",
    teacher: "Dr. Silva",
    room: "Lab 1",
  },
  {
    id: "2",
    day: "Terça",
    startTime: "10:00",
    endTime: "12:00",
    subject: "Banco de Dados",
    teacher: "Dra. Santos",
    room: "Sala 201",
  },
  {
    id: "3",
    day: "Quarta",
    startTime: "14:00",
    endTime: "16:00",
    subject: "Engenharia de Software",
    teacher: "Prof. Oliveira",
    room: "Auditório",
  },
]

const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

export function SchedulesSection() {
  const [schedules, setSchedules] = useState<Schedule[]>(initialSchedules)
  const [newSchedule, setNewSchedule] = useState<Omit<Schedule, "id">>({
    day: "",
    startTime: "",
    endTime: "",
    subject: "",
    teacher: "",
    room: "",
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddSchedule = () => {
    const id = (schedules.length + 1).toString()
    setSchedules([...schedules, { ...newSchedule, id }])
    setNewSchedule({ day: "", startTime: "", endTime: "", subject: "", teacher: "", room: "" })
    setIsDialogOpen(false)
  }

  return (
    <section id="schedules" className="mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-[#2c5282]">Horários</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Adicionar Horário</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Novo Horário</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes do novo horário aqui. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="day" className="text-right">
                    Dia
                  </Label>
                  <Select onValueChange={(value) => setNewSchedule({ ...newSchedule, day: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione um dia" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="startTime" className="text-right">
                    Início
                  </Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={newSchedule.startTime}
                    onChange={(e) => setNewSchedule({ ...newSchedule, startTime: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="endTime" className="text-right">
                    Fim
                  </Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={newSchedule.endTime}
                    onChange={(e) => setNewSchedule({ ...newSchedule, endTime: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject" className="text-right">
                    Disciplina
                  </Label>
                  <Input
                    id="subject"
                    value={newSchedule.subject}
                    onChange={(e) => setNewSchedule({ ...newSchedule, subject: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="teacher" className="text-right">
                    Professor
                  </Label>
                  <Input
                    id="teacher"
                    value={newSchedule.teacher}
                    onChange={(e) => setNewSchedule({ ...newSchedule, teacher: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="room" className="text-right">
                    Sala
                  </Label>
                  <Input
                    id="room"
                    value={newSchedule.room}
                    onChange={(e) => setNewSchedule({ ...newSchedule, room: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddSchedule}>
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
                <TableHead>Dia</TableHead>
                <TableHead>Horário</TableHead>
                <TableHead>Disciplina</TableHead>
                <TableHead>Professor</TableHead>
                <TableHead>Sala</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedules.map((schedule) => (
                <TableRow key={schedule.id}>
                  <TableCell>{schedule.day}</TableCell>
                  <TableCell>{`${schedule.startTime} - ${schedule.endTime}`}</TableCell>
                  <TableCell>{schedule.subject}</TableCell>
                  <TableCell>{schedule.teacher}</TableCell>
                  <TableCell>{schedule.room}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

