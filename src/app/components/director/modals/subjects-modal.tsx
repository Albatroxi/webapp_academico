"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Subject {
  id: string
  name: string
  code: string
  credits: number
  department: string
}

interface SubjectsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SubjectsModal({ isOpen, onClose }: SubjectsModalProps) {
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // Simulating API call
    const mockSubjects: Subject[] = [
      { id: "1", name: "Cálculo I", code: "MAT101", credits: 4, department: "Matemática" },
      { id: "2", name: "Física I", code: "FIS101", credits: 4, department: "Física" },
      { id: "3", name: "Programação I", code: "INF101", credits: 4, department: "Computação" },
      { id: "4", name: "Química Geral", code: "QUI101", credits: 4, department: "Química" },
      { id: "5", name: "Biologia Celular", code: "BIO101", credits: 4, department: "Biologia" },
      // Adicionando mais disciplinas para demonstrar a rolagem
      { id: "6", name: "História do Brasil", code: "HIS101", credits: 3, department: "História" },
      { id: "7", name: "Geografia Humana", code: "GEO101", credits: 3, department: "Geografia" },
      { id: "8", name: "Língua Portuguesa", code: "LET101", credits: 4, department: "Letras" },
      { id: "9", name: "Filosofia", code: "FIL101", credits: 3, department: "Filosofia" },
      { id: "10", name: "Sociologia", code: "SOC101", credits: 3, department: "Sociologia" },
    ]
    setSubjects(mockSubjects)
  }, [])

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.department.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Disciplinas</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Pesquisar disciplinas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ScrollArea className="flex-grow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Código</TableHead>
                <TableHead>Créditos</TableHead>
                <TableHead>Departamento</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubjects.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.code}</TableCell>
                  <TableCell>{subject.credits}</TableCell>
                  <TableCell>{subject.department}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

