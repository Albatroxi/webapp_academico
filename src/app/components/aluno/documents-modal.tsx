"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface DocumentsModalProps {
  isOpen: boolean
  onClose: () => void
}

const documentsData = [
  { name: "Histórico Escolar", type: "PDF", size: "245 KB", date: "15/05/2023" },
  { name: "Declaração de Matrícula", type: "PDF", size: "120 KB", date: "01/06/2023" },
  { name: "Boletim Semestral", type: "PDF", size: "350 KB", date: "30/06/2023" },
  { name: "Certificado de Conclusão", type: "PDF", size: "180 KB", date: "10/07/2023" },
  { name: "Atestado de Frequência", type: "PDF", size: "100 KB", date: "05/07/2023" },
]

export function DocumentsModal({ isOpen, onClose }: DocumentsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white/80 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle>Documentos do Aluno</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do Documento</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Tamanho</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Ação</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentsData.map((doc) => (
              <TableRow key={doc.name}>
                <TableCell>{doc.name}</TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>{doc.date}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
}

