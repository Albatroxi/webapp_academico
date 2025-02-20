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
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Class {
  id: string
  name: string
  subject: string
  teacherId: string
  students: string[]
}

interface Subject {
  id: string
  name: string
}

interface Student {
  id: string
  name: string
}

interface Teacher {
  id: string
  name: string
}

const initialClasses: Class[] = [
  { id: "1", name: "Turma A", subject: "Cálculo I", teacherId: "1", students: ["1", "2", "3"] },
  { id: "2", name: "Turma B", subject: "Física I", teacherId: "2", students: ["2", "3", "4"] },
  { id: "3", name: "Turma C", subject: "Programação I", teacherId: "3", students: ["1", "3", "5"] },
]

const subjects: Subject[] = [
  { id: "1", name: "Cálculo I" },
  { id: "2", name: "Física I" },
  { id: "3", name: "Programação I" },
  { id: "4", name: "Álgebra Linear" },
  { id: "5", name: "Introdução à Engenharia" },
]

const students: Student[] = [
  { id: "1", name: "Ana Silva" },
  { id: "2", name: "Bruno Santos" },
  { id: "3", name: "Carla Oliveira" },
  { id: "4", name: "Daniel Pereira" },
  { id: "5", name: "Elena Costa" },
]

const teachers: Teacher[] = [
  { id: "1", name: "Dr. Silva" },
  { id: "2", name: "Dra. Santos" },
  { id: "3", name: "Prof. Oliveira" },
  { id: "4", name: "Profa. Lima" },
  { id: "5", name: "Dr. Ferreira" },
]

export function ClassesSection() {
  const [classes, setClasses] = useState<Class[]>(initialClasses)
  const [newClass, setNewClass] = useState<Omit<Class, "id">>({ name: "", subject: "", teacherId: "", students: [] })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddClass = () => {
    const id = (classes.length + 1).toString()
    setClasses([...classes, { ...newClass, id }])
    setNewClass({ name: "", subject: "", teacherId: "", students: [] })
    setIsDialogOpen(false)
  }

  return (
    <section id="classes" className="mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-[#2c5282]">Turmas</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Adicionar Turma</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Nova Turma</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes da nova turma aqui. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    value={newClass.name}
                    onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject" className="text-right">
                    Disciplina
                  </Label>
                  <Select onValueChange={(value) => setNewClass({ ...newClass, subject: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione uma disciplina" />
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
                  <Label htmlFor="teacher" className="text-right">
                    Professor
                  </Label>
                  <Select onValueChange={(value) => setNewClass({ ...newClass, teacherId: value })}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione um professor" />
                    </SelectTrigger>
                    <SelectContent>
                      {teachers.map((teacher) => (
                        <SelectItem key={teacher.id} value={teacher.id}>
                          {teacher.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Alunos</Label>
                  <div className="col-span-3 space-y-2">
                    {students.map((student) => (
                      <div key={student.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`student-${student.id}`}
                          checked={newClass.students.includes(student.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setNewClass({ ...newClass, students: [...newClass.students, student.id] })
                            } else {
                              setNewClass({
                                ...newClass,
                                students: newClass.students.filter((id) => id !== student.id),
                              })
                            }
                          }}
                        />
                        <Label htmlFor={`student-${student.id}`}>{student.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddClass}>
                  Salvar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Disciplina</TableHead>
                  <TableHead>Professor</TableHead>
                  <TableHead>Alunos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classes.map((cls) => (
                  <TableRow key={cls.id}>
                    <TableCell>{cls.name}</TableCell>
                    <TableCell>{cls.subject}</TableCell>
                    <TableCell>{teachers.find((t) => t.id === cls.teacherId)?.name}</TableCell>
                    <TableCell>{cls.students.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  )
}

