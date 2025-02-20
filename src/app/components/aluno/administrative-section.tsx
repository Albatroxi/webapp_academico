"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AcademicTranscript } from "./academic-transcript"
import { EnrollmentDeclaration } from "./enrollment-declaration"
import { AttendanceCertificate } from "./attendance-certificate"

export function AdministrativeSection() {
  const [showTranscript, setShowTranscript] = useState(false)
  const [showDeclaration, setShowDeclaration] = useState(false)
  const [showAttendance, setShowAttendance] = useState(false)

  return (
    <section id="administrative" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#2c5282]">Secretaria</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Solicitação de Documentos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>
                <button onClick={() => setShowTranscript(true)} className="text-blue-600 hover:underline">
                  Histórico Escolar
                </button>
              </li>
              <li>
                <button onClick={() => setShowDeclaration(true)} className="text-blue-600 hover:underline">
                  Declaração de Matrícula
                </button>
              </li>
              <li>
                <button onClick={() => setShowAttendance(true)} className="text-blue-600 hover:underline">
                  Atestado de Frequência
                </button>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Trancamento de Matrícula</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Para solicitar o trancamento de matrícula, clique no botão abaixo:</p>
            <a href="#" className="mt-2 inline-block px-4 py-2 bg-[#e53e3e] text-white rounded hover:bg-[#c53030]">
              Solicitar Trancamento
            </a>
          </CardContent>
        </Card>
      </div>
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Acompanhamento de Protocolos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Protocolo</TableHead>
                  <TableHead>Solicitação</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023001</TableCell>
                  <TableCell>Histórico Escolar</TableCell>
                  <TableCell>01/07/2023</TableCell>
                  <TableCell>Em andamento</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023002</TableCell>
                  <TableCell>Declaração de Matrícula</TableCell>
                  <TableCell>03/07/2023</TableCell>
                  <TableCell>Concluído</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      {showTranscript && <AcademicTranscript onClose={() => setShowTranscript(false)} />}
      {showDeclaration && <EnrollmentDeclaration onClose={() => setShowDeclaration(false)} />}
      {showAttendance && <AttendanceCertificate onClose={() => setShowAttendance(false)} />}
    </section>
  )
}

