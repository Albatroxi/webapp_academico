import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AcademicSection } from "./academic-section"
import { FinancialSection } from "./financial-section"
import { AdministrativeSection } from "./administrative-section"
import { ParentMeetingsSection } from "./parent-meetings-section"

export function DashboardContent() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Acadêmico</CardTitle>
        </CardHeader>
        <CardContent>
          <AcademicSection />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financeiro</CardTitle>
        </CardHeader>
        <CardContent>
          <FinancialSection />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Administrativo</CardTitle>
        </CardHeader>
        <CardContent>
          <AdministrativeSection />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reuniões de Pais e Alunos</CardTitle>
        </CardHeader>
        <CardContent>
          <ParentMeetingsSection />
        </CardContent>
      </Card>
    </div>
  )
}

