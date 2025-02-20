"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface GradesModalProps {
  isOpen: boolean
  onClose: () => void
}

const gradesData = [
  { subject: "Matemática", grade: 8.5, status: "Aprovado" },
  { subject: "Português", grade: 7.8, status: "Aprovado" },
  { subject: "História", grade: 6.5, status: "Em recuperação" },
  { subject: "Geografia", grade: 9.0, status: "Aprovado" },
  { subject: "Ciências", grade: 8.2, status: "Aprovado" },
]

export function GradesModal({ isOpen, onClose }: GradesModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white/80 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle>Notas do Aluno</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Disciplina</TableHead>
              <TableHead>Nota</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gradesData.map((grade) => (
              <TableRow key={grade.subject}>
                <TableCell>{grade.subject}</TableCell>
                <TableCell>{grade.grade}</TableCell>
                <TableCell>{grade.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
}

