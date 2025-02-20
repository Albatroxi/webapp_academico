"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface Subject {
  id: string
  name: string
  code: string
  credits: number
}

const initialSubjects: Subject[] = [
  { id: "1", name: "Programação Orientada a Objetos", code: "CC001", credits: 4 },
  { id: "2", name: "Banco de Dados", code: "CC002", credits: 4 },
  { id: "3", name: "Engenharia de Software", code: "ES001", credits: 4 },
]

export function SubjectsSection() {
  const [subjects, setSubjects] = useState<Subject[]>(initialSubjects)
  const [newSubject, setNewSubject] = useState<Omit<Subject, "id">>({ name: "", code: "", credits: 0 })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddSubject = () => {
    const id = (subjects.length + 1).toString()
    setSubjects([...subjects, { ...newSubject, id }])
    setNewSubject({ name: "", code: "", credits: 0 })
    setIsDialogOpen(false)
  }

  return (
    <section id="subjects" className="mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-[#2c5282]">Disciplinas</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Adicionar Disciplina</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Nova Disciplina</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes da nova disciplina aqui. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    value={newSubject.name}
                    onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="code" className="text-right">
                    Código
                  </Label>
                  <Input
                    id="code"
                    value={newSubject.code}
                    onChange={(e) => setNewSubject({ ...newSubject, code: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="credits" className="text-right">
                    Créditos
                  </Label>
                  <Input
                    id="credits"
                    type="number"
                    value={newSubject.credits}
                    onChange={(e) => setNewSubject({ ...newSubject, credits: Number(e.target.value) })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddSubject}>
                  Salvar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Código</TableHead>
                <TableHead>Créditos</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.code}</TableCell>
                  <TableCell>{subject.credits}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

