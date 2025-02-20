import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface ParentMeeting {
  id: string
  date: string
  time: string
  class: string
  responsible: string
  location: string
}

const parentMeetings: ParentMeeting[] = [
  {
    id: "1",
    date: "2023-07-15",
    time: "19:00",
    class: "Turma A",
    responsible: "Prof. Silva",
    location: "Sala de Reuniões 1",
  },
  {
    id: "2",
    date: "2023-08-22",
    time: "18:30",
    class: "Turma A",
    responsible: "Profa. Santos",
    location: "Auditório Principal",
  },
]

export function ParentMeetingsSection() {
  return (
    <section id="parent-meetings" className="mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#2c5282]">Reuniões de Pais e Alunos</CardTitle>
        </CardHeader>
        <CardContent>
          {parentMeetings.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Horário</TableHead>
                  <TableHead>Turma</TableHead>
                  <TableHead>Responsável</TableHead>
                  <TableHead>Local</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {parentMeetings.map((meeting) => (
                  <TableRow key={meeting.id}>
                    <TableCell>{new Date(meeting.date).toLocaleDateString("pt-BR")}</TableCell>
                    <TableCell>{meeting.time}</TableCell>
                    <TableCell>{meeting.class}</TableCell>
                    <TableCell>{meeting.responsible}</TableCell>
                    <TableCell>{meeting.location}</TableCell>
                    <TableCell>
                      {new Date(meeting.date) > new Date() ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Agendada
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                          Realizada
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-gray-500">Não há reuniões agendadas no momento.</p>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

