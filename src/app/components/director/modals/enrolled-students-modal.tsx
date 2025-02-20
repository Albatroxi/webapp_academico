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
  enrollmentDate: string
}

interface EnrolledStudentsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function EnrolledStudentsModal({ isOpen, onClose }: EnrolledStudentsModalProps) {
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
        enrollmentDate: "2023-02-01",
      },
      {
        id: "2",
        name: "Bruno Santos",
        email: "bruno.santos@email.com",
        course: "Ciência da Computação",
        enrollmentDate: "2023-02-03",
      },
      {
        id: "3",
        name: "Carla Oliveira",
        email: "carla.oliveira@email.com",
        course: "Sistemas de Informação",
        enrollmentDate: "2023-02-02",
      },
      // Add more mock students here...
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
          <DialogTitle>Alunos Matriculados</DialogTitle>
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
                <TableHead>Data de Matrícula</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell>{new Date(student.enrollmentDate).toLocaleDateString("pt-BR")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

