"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface Meeting {
  date: string
  time: string
  title: string
  location: string
}

const upcomingMeetings: Meeting[] = [
  { date: "15/07/2023", time: "14:00", title: "Reunião de Departamento", location: "Sala de Conferências" },
  { date: "20/07/2023", time: "10:00", title: "Treinamento Pedagógico", location: "Auditório" },
  { date: "25/07/2023", time: "15:30", title: "Conselho de Classe", location: "Sala 201" },
]

interface Document {
  name: string
  type: string
  status: "Pendente" | "Em Análise" | "Aprovado"
  submissionDate: string
}

const documents: Document[] = [
  { name: "Plano de Aula - Semestre 2", type: "Plano de Aula", status: "Pendente", submissionDate: "01/07/2023" },
  { name: "Relatório de Pesquisa", type: "Relatório", status: "Em Análise", submissionDate: "20/06/2023" },
  { name: "Solicitação de Equipamento", type: "Requisição", status: "Aprovado", submissionDate: "15/06/2023" },
]

function getStatusColor(status: Document["status"]): string {
  switch (status) {
    case "Aprovado":
      return "bg-[#c6f6d5] text-[#22543d]"
    case "Em Análise":
      return "bg-[#fefcbf] text-[#744210]"
    case "Pendente":
      return "bg-[#fed7d7] text-[#822727]"
  }
}

export function TeacherAdministrativeSection() {
  return (
    <section id="administrative" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#2c5282]">Administrativo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Próximas Reuniões</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Hora</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Local</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingMeetings.map((meeting, index) => (
                  <TableRow key={index}>
                    <TableCell>{meeting.date}</TableCell>
                    <TableCell>{meeting.time}</TableCell>
                    <TableCell>{meeting.title}</TableCell>
                    <TableCell>{meeting.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Documentos e Solicitações</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Documento</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data de Submissão</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc, index) => (
                  <TableRow key={index}>
                    <TableCell>{doc.name}</TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={getStatusColor(doc.status)}>
                        {doc.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{doc.submissionDate}</TableCell>
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

