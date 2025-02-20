"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Teacher {
  id: string
  name: string
  email: string
  discipline: string
  phone: string
}

interface TeachersModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TeachersModal({ isOpen, onClose }: TeachersModalProps) {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Simulating API call
    const mockTeachers: Teacher[] = [
      {
        id: "1",
        name: "Dr. Silva",
        email: "silva@universidade.com",
        discipline: "Matemática",
        phone: "(11) 98765-4321",
      },
      {
        id: "2",
        name: "Dra. Santos",
        email: "santos@universidade.com",
        discipline: "Física",
        phone: "(11) 91234-5678",
      },
      {
        id: "3",
        name: "Prof. Oliveira",
        email: "oliveira@universidade.com",
        discipline: "Computação",
        phone: "(11) 99876-5432",
      },
      {
        id: "4",
        name: "Profa. Lima",
        email: "lima@universidade.com",
        discipline: "Química",
        phone: "(11) 98765-1234",
      },
      {
        id: "5",
        name: "Dr. Ferreira",
        email: "ferreira@universidade.com",
        discipline: "Biologia",
        phone: "(11) 91234-5678",
      },
      // Adicionando mais professores para demonstrar a rolagem
      {
        id: "6",
        name: "Dra. Costa",
        email: "costa@universidade.com",
        discipline: "História",
        phone: "(11) 98888-7777",
      },
      {
        id: "7",
        name: "Prof. Rodrigues",
        email: "rodrigues@universidade.com",
        discipline: "Geografia",
        phone: "(11) 97777-6666",
      },
      {
        id: "8",
        name: "Profa. Almeida",
        email: "almeida@universidade.com",
        discipline: "Língua Portuguesa",
        phone: "(11) 96666-5555",
      },
      {
        id: "9",
        name: "Dr. Carvalho",
        email: "carvalho@universidade.com",
        discipline: "Filosofia",
        phone: "(11) 95555-4444",
      },
      {
        id: "10",
        name: "Dra. Mendes",
        email: "mendes@universidade.com",
        discipline: "Sociologia",
        phone: "(11) 94444-3333",
      },
    ]
    setTeachers(mockTeachers)
  }, [])

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.discipline.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Professores</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Pesquisar professores..."
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
                <TableHead>Disciplina</TableHead>
                <TableHead>Telefone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell>{teacher.name}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>{teacher.discipline}</TableCell>
                  <TableCell>{teacher.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

