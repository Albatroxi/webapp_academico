"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Student {
  id: string
  name: string
  email: string
  course: string
  status: "Matriculado" | "Trancado" | "Formado"
}

interface AllStudentsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AllStudentsModal({ isOpen, onClose }: AllStudentsModalProps) {
  const [students, setStudents] = useState<Student[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Simulating API call
    const mockStudents: Student[] = [
      {
        id: "1",
        name: "Ana Silva",
        email: "ana.silva@email.com",
        course: "Engenharia de Software",
        status: "Matriculado",
      },
      {
        id: "2",
        name: "Bruno Santos",
        email: "bruno.santos@email.com",
        course: "Ciência da Computação",
        status: "Matriculado",
      },
      {
        id: "3",
        name: "Carla Oliveira",
        email: "carla.oliveira@email.com",
        course: "Sistemas de Informação",
        status: "Trancado",
      },
      {
        id: "4",
        name: "Daniel Pereira",
        email: "daniel.pereira@email.com",
        course: "Engenharia de Software",
        status: "Formado",
      },
      {
        id: "5",
        name: "Elena Costa",
        email: "elena.costa@email.com",
        course: "Ciência da Computação",
        status: "Matriculado",
      },
      // Adicionando mais estudantes para demonstrar a rolagem
      {
        id: "6",
        name: "Fábio Mendes",
        email: "fabio.mendes@email.com",
        course: "Engenharia de Software",
        status: "Matriculado",
      },
      {
        id: "7",
        name: "Gabriela Rocha",
        email: "gabriela.rocha@email.com",
        course: "Ciência da Computação",
        status: "Matriculado",
      },
      {
        id: "8",
        name: "Hugo Ferreira",
        email: "hugo.ferreira@email.com",
        course: "Sistemas de Informação",
        status: "Trancado",
      },
      {
        id: "9",
        name: "Isabela Santos",
        email: "isabela.santos@email.com",
        course: "Engenharia de Software",
        status: "Matriculado",
      },
      {
        id: "10",
        name: "João Pedro",
        email: "joao.pedro@email.com",
        course: "Ciência da Computação",
        status: "Matriculado",
      },
    ]
    setStudents(mockStudents)
  }, [])

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Todos os Alunos</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Pesquisar alunos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ScrollArea className="flex-grow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Curso</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{student.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

