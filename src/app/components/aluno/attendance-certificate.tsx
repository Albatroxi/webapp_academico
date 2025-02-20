import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface AttendanceCertificateProps {
  onClose: () => void
}

export function AttendanceCertificate({ onClose }: AttendanceCertificateProps) {
  const currentDate = new Date().toLocaleDateString("pt-BR")
  const currentSemester = "2023.1"
  const schoolName = "Universidade Tecnológica do Brasil"

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Atestado de Frequência</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <Image src="/placeholder.svg?height=100&width=100" alt="Escudo da Universidade" width={100} height={100} />
            <h2 className="text-xl font-bold text-center">{schoolName}</h2>
          </div>
          <p className="text-center font-semibold text-lg mt-6">ATESTADO DE FREQUÊNCIA</p>
          <p>
            Atestamos, para os devidos fins, que <span className="font-semibold">JOÃO DA SILVA</span>, portador(a) do RG
            nº 1234567 SSP/SP e CPF nº 123.456.789-00, está regularmente matriculado(a) e frequente no curso de{" "}
            <span className="font-semibold">ENGENHARIA DE SOFTWARE</span>
            desta Instituição de Ensino Superior, no semestre letivo de {currentSemester}.
          </p>
          <p>
            O(A) aluno(a) está cursando o <span className="font-semibold">3º PERÍODO</span> do referido curso, com a
            seguinte frequência nas disciplinas matriculadas:
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Disciplina</TableHead>
                <TableHead>Carga Horária</TableHead>
                <TableHead>Frequência</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Estruturas de Dados</TableCell>
                <TableCell>60 horas</TableCell>
                <TableCell>95%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Programação Orientada a Objetos</TableCell>
                <TableCell>60 horas</TableCell>
                <TableCell>92%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Banco de Dados</TableCell>
                <TableCell>60 horas</TableCell>
                <TableCell>88%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Engenharia de Software</TableCell>
                <TableCell>60 horas</TableCell>
                <TableCell>90%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p>
            Declaramos ainda que o curso de Engenharia de Software é reconhecido pelo MEC através da Portaria nº 123, de
            01/01/2020, publicada no D.O.U. de 02/01/2020.
          </p>
          <p className="text-center">São Paulo, {currentDate}</p>
          <p className="text-center mt-8">
            ___________________________________
            <br />
            Secretário(a) Acadêmico(a)
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={onClose}>Fechar</Button>
        <Button>Imprimir</Button>
      </CardFooter>
    </Card>
  )
}

