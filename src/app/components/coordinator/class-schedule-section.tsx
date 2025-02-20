"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
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

interface ClassSchedule {
  id: string
  dayOfWeek: string
  startTime: string
  endTime: string
  subjectId: string
  roomId: string
}

interface Subject {
  id: string
  name: string
  teacherId: string
}

interface Teacher {
  id: string
  name: string
}

interface Room {
  id: string
  name: string
  capacity: number
}

const daysOfWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

const timeSlots = [
  "07:00",
  "07:50",
  "08:40",
  "09:30",
  "10:20",
  "11:10",
  "13:00",
  "13:50",
  "14:40",
  "15:30",
  "16:20",
  "17:10",
  "18:00",
  "18:50",
  "19:40",
  "20:30",
  "21:20",
]

const initialClassSchedules: ClassSchedule[] = [
  { id: "1", dayOfWeek: "Segunda", startTime: "08:40", endTime: "10:20", subjectId: "1", roomId: "1" },
  { id: "2", dayOfWeek: "Terça", startTime: "10:20", endTime: "12:00", subjectId: "2", roomId: "2" },
  { id: "3", dayOfWeek: "Quarta", startTime: "14:40", endTime: "16:20", subjectId: "3", roomId: "3" },
]

const subjects: Subject[] = [
  { id: "1", name: "Cálculo I", teacherId: "1" },
  { id: "2", name: "Física I", teacherId: "2" },
  { id: "3", name: "Programação I", teacherId: "3" },
  { id: "4", name: "Álgebra Linear", teacherId: "4" },
  { id: "5", name: "Introdução à Engenharia", teacherId: "5" },
]

const teachers: Teacher[] = [
  { id: "1", name: "Dr. Silva" },
  { id: "2", name: "Dra. Santos" },
  { id: "3", name: "Prof. Oliveira" },
  { id: "4", name: "Profa. Lima" },
  { id: "5", name: "Dr. Ferreira" },
]

const rooms: Room[] = [
  { id: "1", name: "Sala 101", capacity: 40 },
  { id: "2", name: "Lab 1", capacity: 30 },
  { id: "3", name: "Auditório", capacity: 200 },
  { id: "4", name: "Sala 202", capacity: 50 },
  { id: "5", name: "Lab 2", capacity: 25 },
]

export function ClassScheduleSection() {
  const [classSchedules, setClassSchedules] = useState<ClassSchedule[]>(initialClassSchedules)
  const [newSchedule, setNewSchedule] = useState<Omit<ClassSchedule, "id">>({
    dayOfWeek: "",
    startTime: "",
    endTime: "",
    subjectId: "",
    roomId: "",
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddSchedule = () => {
    const id = (classSchedules.length + 1).toString()
    setClassSchedules([...classSchedules, { ...newSchedule, id }])
    setNewSchedule({ dayOfWeek: "", startTime: "", endTime: "", subjectId: "", roomId: "" })
    setIsDialogOpen(false)
  }

  const getTeacherForSubject = (subjectId: string) => {
    const subject = subjects.find((s) => s.id === subjectId)
    return teachers.find((t) => t.id === subject?.teacherId)?.name || "Não atribuído"
  }

  return (
    <section id="class-schedules" className="mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-[#2c5282]">Horários de Aula</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Adicionar Aula</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Nova Aula</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes da nova aula aqui. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dayOfWeek" className="text-right">
                    Dia da Semana
                  </Label>
                  <Select onValueChange={(value) => setNewSchedule({ ...newSchedule, dayOfWeek: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione o dia" />
                    </SelectTrigger>
                    <SelectContent>
                      {daysOfWeek.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="startTime" className="text-right">
                    Horário Início
                  </Label>
                  <Select onValueChange={(value) => setNewSchedule({ ...newSchedule, startTime: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione o horário de início" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="endTime" className="text-right">
                    Horário Fim
                  </Label>
                  <Select onValueChange={(value) => setNewSchedule({ ...newSchedule, endTime: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione o horário de fim" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject" className="text-right">
                    Disciplina
                  </Label>
                  <Select onValueChange={(value) => setNewSchedule({ ...newSchedule, subjectId: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione a disciplina" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.id} value={subject.id}>
                          {subject.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {newSchedule.subjectId && (
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Professor</Label>
                    <div className="col-span-3">{getTeacherForSubject(newSchedule.subjectId)}</div>
                  </div>
                )}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="room" className="text-right">
                    Sala
                  </Label>
                  <Select onValueChange={(value) => setNewSchedule({ ...newSchedule, roomId: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione a sala" />
                    </SelectTrigger>
                    <SelectContent>
                      {rooms.map((room) => (
                        <SelectItem key={room.id} value={room.id}>
                          {room.name} (Cap: {room.capacity})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
              {classSchedules.map((schedule) => (
                <TableRow key={schedule.id}>
                  <TableCell>{schedule.dayOfWeek}</TableCell>
                  <TableCell>{`${schedule.startTime} - ${schedule.endTime}`}</TableCell>
                  <TableCell>{subjects.find((s) => s.id === schedule.subjectId)?.name}</TableCell>
                  <TableCell>{getTeacherForSubject(schedule.subjectId)}</TableCell>
                  <TableCell>{rooms.find((r) => r.id === schedule.roomId)?.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

