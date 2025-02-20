import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Subject {
  name: string
  code: string
  credits: number
  grade: number
  attendance: number
  absences: number
  maxAbsences: number
}

const subjects: Subject[] = [
  { name: "Cálculo I", code: "MAT101", credits: 4, grade: 8.5, attendance: 90, absences: 6, maxAbsences: 20 },
  { name: "Física I", code: "FIS101", credits: 4, grade: 7.8, attendance: 85, absences: 9, maxAbsences: 20 },
  { name: "Programação I", code: "INF101", credits: 4, grade: 9.0, attendance: 95, absences: 3, maxAbsences: 20 },
  { name: "Álgebra Linear", code: "MAT102", credits: 3, grade: 7.2, attendance: 78, absences: 13, maxAbsences: 15 },
  { name: "Química Geral", code: "QUI101", credits: 3, grade: 6.5, attendance: 70, absences: 18, maxAbsences: 15 },
  {
    name: "Introdução à Engenharia",
    code: "ENG101",
    credits: 2,
    grade: 8.0,
    attendance: 88,
    absences: 7,
    maxAbsences: 10,
  },
  {
    name: "Geometria Analítica",
    code: "MAT103",
    credits: 3,
    grade: 7.5,
    attendance: 82,
    absences: 11,
    maxAbsences: 15,
  },
]

function getAttendanceColor(attendance: number): string {
  if (attendance >= 60) return "bg-[#c6f6d5] text-[#22543d] dark:bg-[#276749] dark:text-[#c6f6d5]"
  if (attendance >= 50) return "bg-[#fefcbf] text-[#744210] dark:bg-[#b7791f] dark:text-[#fefcbf]"
  return "bg-[#fed7d7] text-[#822727] dark:bg-[#9b2c2c] dark:text-[#fed7d7]"
}

const classSchedule = [
  {
    time: "07:30 - 08:20",
    monday: "Cálculo I",
    tuesday: "Física I",
    wednesday: "Programação I",
    thursday: "Álgebra Linear",
    friday: "Química Geral",
  },
  {
    time: "08:20 - 09:10",
    monday: "Cálculo I",
    tuesday: "Física I",
    wednesday: "Programação I",
    thursday: "Álgebra Linear",
    friday: "Química Geral",
  },
  {
    time: "09:10 - 10:00",
    monday: "Introdução à Engenharia",
    tuesday: "Geometria Analítica",
    wednesday: "Cálculo I",
    thursday: "Física I",
    friday: "Programação I",
  },
  {
    time: "10:20 - 11:10",
    monday: "Introdução à Engenharia",
    tuesday: "Geometria Analítica",
    wednesday: "Cálculo I",
    thursday: "Física I",
    friday: "Programação I",
  },
  {
    time: "11:10 - 12:00",
    monday: "Álgebra Linear",
    tuesday: "Química Geral",
    wednesday: "Geometria Analítica",
    thursday: "Introdução à Engenharia",
    friday: "Cálculo I",
  },
  { time: "13:30 - 14:20", monday: "", tuesday: "Lab. Física I", wednesday: "", thursday: "Lab. Química", friday: "" },
  { time: "14:20 - 15:10", monday: "", tuesday: "Lab. Física I", wednesday: "", thursday: "Lab. Química", friday: "" },
  { time: "15:10 - 16:00", monday: "", tuesday: "", wednesday: "Lab. Programação I", thursday: "", friday: "" },
  { time: "16:20 - 17:10", monday: "", tuesday: "", wednesday: "Lab. Programação I", thursday: "", friday: "" },
  { time: "17:10 - 18:00", monday: "", tuesday: "", wednesday: "Lab. Programação I", thursday: "", friday: "" },
]

export function AcademicSection() {
  return (
    <section id="academic" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#2c5282]">Acadêmico</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Status da Matrícula</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <strong>Status:</strong> Matriculado
              </p>
              <p>
                <strong>Semestre:</strong> 2023.2
              </p>
              <p>
                <strong>Curso:</strong> Engenharia de Software
              </p>
              <p>
                <strong>Período:</strong> 4º
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Ver detalhes da matrícula
              </a>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Horário das Aulas</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="sticky left-0 bg-background">Horário</TableHead>
                    <TableHead>Segunda</TableHead>
                    <TableHead>Terça</TableHead>
                    <TableHead>Quarta</TableHead>
                    <TableHead>Quinta</TableHead>
                    <TableHead>Sexta</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classSchedule.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="sticky left-0 bg-background font-medium">{row.time}</TableCell>
                      <TableCell>{row.monday}</TableCell>
                      <TableCell>{row.tuesday}</TableCell>
                      <TableCell>{row.wednesday}</TableCell>
                      <TableCell>{row.thursday}</TableCell>
                      <TableCell>{row.friday}</TableCell>
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
            <CardTitle>Notas e Frequência</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="sticky left-0 bg-background">Disciplina</TableHead>
                    <TableHead>Código</TableHead>
                    <TableHead>Créditos</TableHead>
                    <TableHead>Nota</TableHead>
                    <TableHead>Frequência</TableHead>
                    <TableHead>Faltas</TableHead>
                    <TableHead>Máx. Faltas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subjects.map((subject) => (
                    <TableRow key={subject.name}>
                      <TableCell className="sticky left-0 bg-background font-medium">{subject.name}</TableCell>
                      <TableCell>{subject.code}</TableCell>
                      <TableCell>{subject.credits}</TableCell>
                      <TableCell>{subject.grade.toFixed(1)}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getAttendanceColor(subject.attendance)}>
                          {subject.attendance}%
                        </Badge>
                      </TableCell>
                      <TableCell>{subject.absences}</TableCell>
                      <TableCell>{subject.maxAbsences}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

