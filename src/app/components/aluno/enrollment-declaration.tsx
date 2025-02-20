import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface EnrollmentDeclarationProps {
  onClose: () => void
}

export function EnrollmentDeclaration({ onClose }: EnrollmentDeclarationProps) {
  const currentDate = new Date().toLocaleDateString("pt-BR")
  const schoolName = "Universidade Tecnológica do Brasil"

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Declaração de Matrícula</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <Image src="/placeholder.svg?height=100&width=100" alt="Escudo da Universidade" width={100} height={100} />
            <h2 className="text-xl font-bold text-center">{schoolName}</h2>
          </div>
          <p className="text-center font-semibold text-lg mt-6">DECLARAÇÃO DE MATRÍCULA</p>
          <p>
            Declaramos, para os devidos fins, que <span className="font-semibold">JOÃO DA SILVA</span>, portador(a) do
            RG nº 1234567 SSP/SP e CPF nº 123.456.789-00, está regularmente matriculado(a) no curso de{" "}
            <span className="font-semibold">ENGENHARIA DE SOFTWARE</span>
            desta Instituição de Ensino Superior, no ano letivo de 2023.
          </p>
          <p>
            O(A) aluno(a) está cursando o <span className="font-semibold">3º PERÍODO</span> do referido curso, com
            previsão de conclusão em Dezembro de 2025.
          </p>
          <p>
            Declaramos ainda que o curso de Engenharia de Software é reconhecido pelo MEC através da Portaria nº 123, de
            01/01/2020, publicada no D.O.U. de 02/01/2020.
          </p>
          <p className="text-center mt-4">São Paulo, {currentDate}</p>
          <p className="text-center mt-8">
            ___________________________________
            <br />
            Diretor(a) Acadêmico(a)
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={onClose}>Fechar</Button>
        <Button>Imprimir</Button>
      </CardFooter>
    </Card>
  )
}

