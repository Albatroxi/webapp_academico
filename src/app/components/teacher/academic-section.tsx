import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Class {
  code: string
  name: string
  schedule: string
  students: number
  room: string
}

const classes: Class[] = [
  { code: "MAT101", name: "Cálculo I", schedule: "Seg 08:00-10:00", students: 40, room: "Sala 101" },
  { code: "FIS101", name: "Física I", schedule: "Ter 10:00-12:00", students: 35, room: "Lab Física" },
  { code: "INF101", name: "Programação I", schedule: "Qua 14:00-16:00", students: 30, room: "Lab Informática" },
  { code: "MAT102", name: "Álgebra Linear", schedule: "Qui 08:00-10:00", students: 38, room: "Sala 102" },
  { code: "ENG101", name: "Introdução à Engenharia", schedule: "Sex 10:00-12:00", students: 45, room: "Auditório" },
]

const classSchedule = [
  { day: "Segunda", time: "08:00-10:00", class: "Cálculo I", room: "Sala 101" },
  { day: "Terça", time: "10:00-12:00", class: "Física I", room: "Lab Física" },
  { day: "Quarta", time: "14:00-16:00", class: "Programação I", room: "Lab Informática" },
  { day: "Quinta", time: "08:00-10:00", class: "Álgebra Linear", room: "Sala 102" },
  { day: "Sexta", time: "10:00-12:00", class: "Introdução à Engenharia", room: "Auditório" },
]

export function TeacherAcademicSection() {
  return (
    <section id="academic" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#2c5282]">Acadêmico</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Turmas Lecionadas</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="sticky left-0 bg-background">Código</TableHead>
                    <TableHead>Disciplina</TableHead>
                    <TableHead>Horário</TableHead>
                    <TableHead>Alunos</TableHead>
                    <TableHead>Sala</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classes.map((cls) => (
                    <TableRow key={cls.code}>
                      <TableCell className="sticky left-0 bg-background font-medium">{cls.code}</TableCell>
                      <TableCell>{cls.name}</TableCell>
                      <TableCell>{cls.schedule}</TableCell>
                      <TableCell>{cls.students}</TableCell>
                      <TableCell>{cls.room}</TableCell>
                      <TableCell>
                        <Button asChild variant="link">
                          <Link href={`/teacher/class/${cls.code}`}>Ver Detalhes</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Horário de Aulas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dia</TableHead>
                  <TableHead>Horário</TableHead>
                  <TableHead>Disciplina</TableHead>
                  <TableHead>Sala</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classSchedule.map((schedule, index) => (
                  <TableRow key={index}>
                    <TableCell>{schedule.day}</TableCell>
                    <TableCell>{schedule.time}</TableCell>
                    <TableCell>{schedule.class}</TableCell>
                    <TableCell>{schedule.room}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

