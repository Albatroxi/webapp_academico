"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Student {
  id: string
  name: string
}

interface Attendance {
  [date: string]: {
    [studentId: string]: boolean
  }
}

const mockStudents: Student[] = [
  { id: "1", name: "Ana Silva" },
  { id: "2", name: "Bruno Santos" },
  { id: "3", name: "Carla Oliveira" },
  { id: "4", name: "Daniel Pereira" },
  { id: "5", name: "Elena Costa" },
]

export function ClassDetails({ classId }: { classId: string }) {
  const [students] = useState<Student[]>(mockStudents)
  const [attendance, setAttendance] = useState<Attendance>({})
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAttendance = (studentId: string, isPresent: boolean) => {
    if (selectedDate) {
      const dateString = selectedDate.toISOString().split("T")[0]
      setAttendance((prev) => ({
        ...prev,
        [dateString]: {
          ...prev[dateString],
          [studentId]: isPresent,
        },
      }))
    }
  }

  const saveAttendance = () => {
    console.log("Attendance saved:", attendance)
    setIsDialogOpen(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#2c5282]">Detalhes da Turma {classId}</CardTitle>
      </CardHeader>
      <CardContent>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mb-4">Marcar Presença</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Marcar Presença</DialogTitle>
              <DialogDescription>Selecione a data e marque a presença dos alunos.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
              {selectedDate && (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Aluno</TableHead>
                      <TableHead>Presente</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>
                          <Checkbox
                            checked={attendance[selectedDate.toISOString().split("T")[0]]?.[student.id] || false}
                            onCheckedChange={(checked) => handleAttendance(student.id, checked as boolean)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
            <DialogFooter>
              <Button onClick={saveAttendance}>Salvar Presença</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do Aluno</TableHead>
              <TableHead>Presenças</TableHead>
              <TableHead>Faltas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => {
              const studentAttendance = Object.values(attendance).reduce(
                (acc, date) => {
                  if (date[student.id]) {
                    acc.present += 1
                  } else {
                    acc.absent += 1
                  }
                  return acc
                },
                { present: 0, absent: 0 },
              )
              return (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{studentAttendance.present}</TableCell>
                  <TableCell>{studentAttendance.absent}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

