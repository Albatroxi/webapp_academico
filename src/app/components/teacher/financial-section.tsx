import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Download } from "lucide-react"

interface PaymentInfo {
  month: string
  salary: number
  bonuses: number
  deductions: number
  netSalary: number
  paymentDate: string
}

const paymentHistory: PaymentInfo[] = [
  { month: "Junho/2023", salary: 5000, bonuses: 500, deductions: 1000, netSalary: 4500, paymentDate: "30/06/2023" },
  { month: "Maio/2023", salary: 5000, bonuses: 0, deductions: 1000, netSalary: 4000, paymentDate: "31/05/2023" },
  { month: "Abril/2023", salary: 5000, bonuses: 250, deductions: 1000, netSalary: 4250, paymentDate: "30/04/2023" },
  { month: "Março/2023", salary: 5000, bonuses: 0, deductions: 1000, netSalary: 4000, paymentDate: "31/03/2023" },
  { month: "Fevereiro/2023", salary: 5000, bonuses: 0, deductions: 1000, netSalary: 4000, paymentDate: "28/02/2023" },
  { month: "Janeiro/2023", salary: 5000, bonuses: 1000, deductions: 1000, netSalary: 5000, paymentDate: "31/01/2023" },
]

export function TeacherFinancialSection() {
  return (
    <section id="financial" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#2c5282]">Financeiro</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Histórico de Pagamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="sticky left-0 bg-background">Mês</TableHead>
                    <TableHead>Salário Base</TableHead>
                    <TableHead>Bônus</TableHead>
                    <TableHead>Deduções</TableHead>
                    <TableHead>Salário Líquido</TableHead>
                    <TableHead>Data de Pagamento</TableHead>
                    <TableHead className="text-right">Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.month}>
                      <TableCell className="sticky left-0 bg-background font-medium">{payment.month}</TableCell>
                      <TableCell>
                        {payment.salary.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </TableCell>
                      <TableCell>
                        {payment.bonuses.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </TableCell>
                      <TableCell>
                        {payment.deductions.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </TableCell>
                      <TableCell>
                        {payment.netSalary.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </TableCell>
                      <TableCell>{payment.paymentDate}</TableCell>
                      <TableCell className="text-right">
                        <button className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
                          <Download className="h-4 w-4" />
                          Holerite
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Resumo Financeiro</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Salário Base</p>
                <p className="text-2xl font-bold">R$ 5.000,00</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Média de Bônus (6 meses)</p>
                <p className="text-2xl font-bold text-green-600">R$ 291,67</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Média de Deduções (6 meses)</p>
                <p className="text-2xl font-bold text-red-600">R$ 1.000,00</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Próximo Pagamento</p>
                <p className="text-2xl font-bold">31/07/2023</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

