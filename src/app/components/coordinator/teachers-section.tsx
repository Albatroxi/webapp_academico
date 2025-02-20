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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Teacher {
  id: string
  name: string
  email: string
  discipline: string
  phone: string
  whatsapp: string
}

interface Subject {
  id: string
  name: string
}

const initialTeachers: Teacher[] = [
  {
    id: "1",
    name: "Dr. Silva",
    email: "silva@universidade.com",
    discipline: "Matemática",
    phone: "(11) 98765-4321",
    whatsapp: "(11) 98765-4321",
  },
  {
    id: "2",
    name: "Dra. Santos",
    email: "santos@universidade.com",
    discipline: "Física",
    phone: "(11) 91234-5678",
    whatsapp: "(11) 91234-5678",
  },
  {
    id: "3",
    name: "Prof. Oliveira",
    email: "oliveira@universidade.com",
    discipline: "Computação",
    phone: "(11) 99876-5432",
    whatsapp: "(11) 99876-5432",
  },
]

const subjects: Subject[] = [
  { id: "1", name: "Matemática" },
  { id: "2", name: "Física" },
  { id: "3", name: "Computação" },
  { id: "4", name: "Química" },
  { id: "5", name: "Biologia" },
]

export function TeachersSection() {
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers)
  const [newTeacher, setNewTeacher] = useState<Omit<Teacher, "id">>({
    name: "",
    email: "",
    discipline: "",
    phone: "",
    whatsapp: "",
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddTeacher = () => {
    const id = (teachers.length + 1).toString()
    setTeachers([...teachers, { ...newTeacher, id }])
    setNewTeacher({ name: "", email: "", discipline: "", phone: "", whatsapp: "" })
    setIsDialogOpen(false)
  }

  return (
    <section id="teachers" className="mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-[#2c5282]">Professores</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Cadastrar Professor</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Cadastrar Novo Professor</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes do novo professor aqui. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    value={newTeacher.name}
                    onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={newTeacher.email}
                    onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="discipline" className="text-right">
                    Disciplina
                  </Label>
                  <Select onValueChange={(value) => setNewTeacher({ ...newTeacher, discipline: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione a disciplina" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject.id} value={subject.name}>
                          {subject.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    value={newTeacher.phone}
                    onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="whatsapp" className="text-right">
                    WhatsApp
                  </Label>
                  <Input
                    id="whatsapp"
                    value={newTeacher.whatsapp}
                    onChange={(e) => setNewTeacher({ ...newTeacher, whatsapp: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddTeacher}>
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
                <TableHead>Email</TableHead>
                <TableHead>Disciplina</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>WhatsApp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell>{teacher.name}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>{teacher.discipline}</TableCell>
                  <TableCell>{teacher.phone}</TableCell>
                  <TableCell>{teacher.whatsapp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

