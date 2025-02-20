"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, GraduationCap, School, UserPlus } from "lucide-react"
import { AllStudentsModal } from "./modals/all-students-modal"
import { EnrolledStudentsModal } from "./modals/enrolled-students-modal"
import { TeachersModal } from "./modals/teachers-modal"
import { ClassesModal } from "./modals/classes-modal"
import { SubjectsModal } from "./modals/subjects-modal"

interface OverviewData {
  totalStudents: number
  totalTeachers: number
  totalClasses: number
  totalSubjects: number
  enrolledStudents: number
}

export function OverviewSection() {
  const [overviewData, setOverviewData] = useState<OverviewData>({
    totalStudents: 1200,
    totalTeachers: 50,
    totalClasses: 40,
    totalSubjects: 20,
    enrolledStudents: 980,
  })

  const [openModal, setOpenModal] = useState<string | null>(null)

  const handleCardClick = (modalName: string) => {
    setOpenModal(modalName)
  }

  return (
    <section id="overview" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#2c5282]">Visão Geral</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => handleCardClick("allStudents")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Alunos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.totalStudents}</div>
          </CardContent>
        </Card>
        <Card
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => handleCardClick("enrolledStudents")}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Alunos Matriculados</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.enrolledStudents}</div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => handleCardClick("teachers")}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Professores</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.totalTeachers}</div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => handleCardClick("classes")}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Turmas</CardTitle>
            <School className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.totalClasses}</div>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => handleCardClick("subjects")}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Disciplinas</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.totalSubjects}</div>
          </CardContent>
        </Card>
      </div>

      <AllStudentsModal isOpen={openModal === "allStudents"} onClose={() => setOpenModal(null)} />
      <EnrolledStudentsModal isOpen={openModal === "enrolledStudents"} onClose={() => setOpenModal(null)} />
      <TeachersModal isOpen={openModal === "teachers"} onClose={() => setOpenModal(null)} />
      <ClassesModal isOpen={openModal === "classes"} onClose={() => setOpenModal(null)} />
      <SubjectsModal isOpen={openModal === "subjects"} onClose={() => setOpenModal(null)} />
    </section>
  )
}

