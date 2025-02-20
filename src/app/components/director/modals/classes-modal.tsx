"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Class {
  id: string
  name: string
  subject: string
  teacher: string
  students: number
  schedule: string
}

interface ClassesModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ClassesModal({ isOpen, onClose }: ClassesModalProps) {
  const [classes, setClasses] = useState<Class[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Simulating API call
    const mockClasses: Class[] = [
      {
        id: "1",
        name: "Turma A",
        subject: "Cálculo I",
        teacher: "Dr. Silva",
        students: 30,
        schedule: "Seg 08:00-10:00",
      },
      {
        id: "2",
        name: "Turma B",
        subject: "Física I",
        teacher: "Dra. Santos",
        students: 25,
        schedule: "Ter 10:00-12:00",
      },
      {
        id: "3",
        name: "Turma C",
        subject: "Programação I",
        teacher: "Prof. Oliveira",
        students: 35,
        schedule: "Qua 14:00-16:00",
      },
      {
        id: "4",
        name: "Turma D",
        subject: "Química Geral",
        teacher: "Profa. Lima",
        students: 28,
        schedule: "Qui 08:00-10:00",
      },
      {
        id: "5",
        name: "Turma E",
        subject: "Biologia Celular",
        teacher: "Dr. Ferreira",
        students: 32,
        schedule: "Sex 10:00-12:00",
      },
      // Adicionando mais turmas para demonstrar a rolagem
      {
        id: "6",
        name: "Turma F",
        subject: "História do Brasil",
        teacher: "Dra. Costa",
        students: 40,
        schedule: "Seg 14:00-16:00",
      },
      {
        id: "7",
        name: "Turma G",
        subject: "Geografia Humana",
        teacher: "Prof. Rodrigues",
        students: 38,
        schedule: "Ter 16:00-18:00",
      },
      {
        id: "8",
        name: "Turma H",
        subject: "Língua Portuguesa",
        teacher: "Profa. Almeida",
        students: 45,
        schedule: "Qua 10:00-12:00",
      },
      {
        id: "9",
        name: "Turma I",
        subject: "Filosofia",
        teacher: "Dr. Carvalho",
        students: 30,
        schedule: "Qui 14:00-16:00",
      },
      {
        id: "10",
        name: "Turma J",
        subject: "Sociologia",
        teacher: "Dra. Mendes",
        students: 35,
        schedule: "Sex 08:00-10:00",
      },
    ]
    setClasses(mockClasses)
  }, [])

  const filteredClasses = classes.filter(
    (cls) =>
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.teacher.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Turmas</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Pesquisar turmas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ScrollArea className="flex-grow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Disciplina</TableHead>
                <TableHead>Professor</TableHead>
                <TableHead>Alunos</TableHead>
                <TableHead>Horário</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClasses.map((cls) => (
                <TableRow key={cls.id}>
                  <TableCell>{cls.name}</TableCell>
                  <TableCell>{cls.subject}</TableCell>
                  <TableCell>{cls.teacher}</TableCell>
                  <TableCell>{cls.students}</TableCell>
                  <TableCell>{cls.schedule}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

