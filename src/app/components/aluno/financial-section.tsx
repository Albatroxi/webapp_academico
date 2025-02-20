import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Download } from "lucide-react"

type PaymentStatus = "paid" | "pending" | "upcoming"

interface Payment {
  month: string
  dueDate: string
  value: number
  status: PaymentStatus
  paymentDate?: string
  paymentMethod?: string
  invoiceNumber: string
}

const payments: Payment[] = [
  {
    month: "Janeiro/2023",
    dueDate: "10/01/2023",
    value: 800.0,
    status: "paid",
    paymentDate: "09/01/2023",
    paymentMethod: "Cartão de Crédito",
    invoiceNumber: "INV-2023-001",
  },
  {
    month: "Fevereiro/2023",
    dueDate: "10/02/2023",
    value: 800.0,
    status: "paid",
    paymentDate: "10/02/2023",
    paymentMethod: "Boleto",
    invoiceNumber: "INV-2023-002",
  },
  {
    month: "Março/2023",
    dueDate: "10/03/2023",
    value: 800.0,
    status: "paid",
    paymentDate: "09/03/2023",
    paymentMethod: "Débito Automático",
    invoiceNumber: "INV-2023-003",
  },
  {
    month: "Abril/2023",
    dueDate: "10/04/2023",
    value: 800.0,
    status: "paid",
    paymentDate: "10/04/2023",
    paymentMethod: "PIX",
    invoiceNumber: "INV-2023-004",
  },
  {
    month: "Maio/2023",
    dueDate: "10/05/2023",
    value: 800.0,
    status: "paid",
    paymentDate: "08/05/2023",
    paymentMethod: "Cartão de Crédito",
    invoiceNumber: "INV-2023-005",
  },
  {
    month: "Junho/2023",
    dueDate: "10/06/2023",
    value: 800.0,
    status: "paid",
    paymentDate: "09/06/2023",
    paymentMethod: "Boleto",
    invoiceNumber: "INV-2023-006",
  },
  { month: "Julho/2023", dueDate: "10/07/2023", value: 800.0, status: "pending", invoiceNumber: "INV-2023-007" },
  { month: "Agosto/2023", dueDate: "10/08/2023", value: 800.0, status: "upcoming", invoiceNumber: "INV-2023-008" },
  { month: "Setembro/2023", dueDate: "10/09/2023", value: 800.0, status: "upcoming", invoiceNumber: "INV-2023-009" },
  { month: "Outubro/2023", dueDate: "10/10/2023", value: 800.0, status: "upcoming", invoiceNumber: "INV-2023-010" },
  { month: "Novembro/2023", dueDate: "10/11/2023", value: 800.0, status: "upcoming", invoiceNumber: "INV-2023-011" },
  { month: "Dezembro/2023", dueDate: "10/12/2023", value: 800.0, status: "upcoming", invoiceNumber: "INV-2023-012" },
]

function getStatusColor(status: PaymentStatus): string {
  switch (status) {
    case "paid":
      return "bg-[#c6f6d5] text-[#22543d] dark:bg-[#276749] dark:text-[#c6f6d5]"
    case "pending":
      return "bg-[#fed7d7] text-[#822727] dark:bg-[#9b2c2c] dark:text-[#fed7d7]"
    case "upcoming":
      return "bg-[#fefcbf] text-[#744210] dark:bg-[#b7791f] dark:text-[#fefcbf]"
  }
}

function getStatusText(status: PaymentStatus): string {
  switch (status) {
    case "paid":
      return "Pago"
    case "pending":
      return "Pendente"
    case "upcoming":
      return "A Vencer"
  }
}

export function FinancialSection() {
  return (
    <section id="financial" className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#2c5282]">Financeiro</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Boletos e Mensalidades</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="sticky left-0 bg-background">Mês</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data Pagamento</TableHead>
                    <TableHead>Método</TableHead>
                    <TableHead>Nº Fatura</TableHead>
                    <TableHead className="text-right">Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.month}>
                      <TableCell className="sticky left-0 bg-background font-medium">{payment.month}</TableCell>
                      <TableCell>{payment.dueDate}</TableCell>
                      <TableCell>
                        {payment.value.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getStatusColor(payment.status)}>
                          {getStatusText(payment.status)}
                        </Badge>
                      </TableCell>
                      <TableCell>{payment.paymentDate || "-"}</TableCell>
                      <TableCell>{payment.paymentMethod || "-"}</TableCell>
                      <TableCell>{payment.invoiceNumber}</TableCell>
                      <TableCell className="text-right">
                        {payment.status === "paid" ? (
                          <button className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800">
                            <Download className="h-4 w-4" />
                            Comprovante
                          </button>
                        ) : payment.status === "pending" ? (
                          <button className="text-sm font-medium text-red-600 hover:text-red-800">Pagar agora</button>
                        ) : (
                          <button className="text-sm text-gray-600">Gerar boleto</button>
                        )}
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
            <CardTitle>Consulta de Débitos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Total de débitos</p>
                  <p className="text-2xl font-bold text-[#e53e3e]">R$ 800,00</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Próximo vencimento</p>
                  <p className="text-2xl font-bold">10/07/2023</p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Status dos pagamentos</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Pagos</span>
                    <Badge variant="secondary" className={getStatusColor("paid")}>
                      6
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pendentes</span>
                    <Badge variant="secondary" className={getStatusColor("pending")}>
                      1
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>A vencer</span>
                    <Badge variant="secondary" className={getStatusColor("upcoming")}>
                      5
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

