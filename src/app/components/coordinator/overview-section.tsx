"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Clock, MapPin, GraduationCap } from "lucide-react"

interface OverviewData {
  totalClasses: number
  totalSubjects: number
  activeSchedules: number
  classLocations: number
  totalTeachers: number
}

export function OverviewSection() {
  const [overviewData, setOverviewData] = useState<OverviewData>({
    totalClasses: 25,
    totalSubjects: 42,
    activeSchedules: 180,
    classLocations: 15,
    totalTeachers: 30,
  })

  // Simulating data fetching
  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // For now, we're using static data
    setOverviewData({
      totalClasses: 25,
      totalSubjects: 42,
      activeSchedules: 180,
      classLocations: 15,
      totalTeachers: 30,
    })
  }, [])

  return (
    <section id="overview" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#2c5282]">Visão Geral</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Turmas</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.totalClasses}</div>
            <p className="text-xs text-muted-foreground">+2 desde o último semestre</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Disciplinas</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.totalSubjects}</div>
            <p className="text-xs text-muted-foreground">+5 desde o último semestre</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horários Ativos</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.activeSchedules}</div>
            <p className="text-xs text-muted-foreground">+12 desde o último semestre</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Locais de Aula</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.classLocations}</div>
            <p className="text-xs text-muted-foreground">+1 novo laboratório</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Professores</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overviewData.totalTeachers}</div>
            <p className="text-xs text-muted-foreground">+3 desde o último semestre</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

