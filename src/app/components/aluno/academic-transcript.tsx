import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface AcademicTranscriptProps {
  onClose: () => void
}

export function AcademicTranscript({ onClose }: AcademicTranscriptProps) {
  return (
    <Card className="mt-4 bg-white">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-black pb-4">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Logo do Governo"
                width={80}
                height={80}
                className="object-contain"
              />
              <div className="text-xs">
                <p>SECRETARIA DA EDUCAÇÃO</p>
              </div>
            </div>
            <div className="text-center flex-1">
              <p className="font-bold">GOVERNO DO ESTADO DA BAHIA</p>
              <p>SECRETARIA DE ESTADO DA EDUCAÇÃO</p>
              <p className="font-bold">COLÉGIO ESTADUAL DE APLICAÇÃO ANÍSIO TEIXEIRA</p>
              <div className="grid grid-cols-2 gap-2 text-sm mt-2">
                <p>End: Rua A, S/N</p>
                <p>CEP: 41000-000</p>
                <p>Bairro: Paralela</p>
                <p>Município: Salvador</p>
                <p>Tel: (71) 3396-0005</p>
                <p>Endereço eletrônico:</p>
              </div>
            </div>
          </div>

          <h1 className="text-center font-bold text-lg">HISTÓRICO ESCOLAR – ENSINO MÉDIO</h1>

          {/* Student Info */}
          <div className="border border-black p-2">
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <p className="font-bold">Nome do Aluno:</p>
              <p>JOÃO DA SILVA</p>
              <p className="font-bold">R.G.:</p>
              <p>149241283-0</p>
            </div>
            <div className="mt-2">
              <p className="font-bold">Nascimento:</p>
              <div className="grid grid-cols-3 gap-2 ml-4">
                <p>Município: SALVADOR</p>
                <p>Estado: BA</p>
                <p>País: BRASIL</p>
                <p>Data: 26/07/1991</p>
              </div>
            </div>
          </div>

          {/* Grades Table */}
          <Table className="border border-black">
            <TableHeader>
              <TableRow>
                <TableHead className="border font-bold" rowSpan={2}>
                  ÁREAS DE CONHECIMENTO
                </TableHead>
                <TableHead className="border font-bold" rowSpan={2}>
                  COMPONENTES CURRICULARES
                </TableHead>
                <TableHead className="border font-bold" colSpan={3}>
                  <div className="text-center">
                    <p>ANO</p>
                    <p>Série</p>
                  </div>
                </TableHead>
                <TableHead className="border font-bold" rowSpan={2}>
                  CARGA HORÁRIA
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="border text-center">2014</TableHead>
                <TableHead className="border text-center">2014</TableHead>
                <TableHead className="border text-center">2015</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border font-bold" rowSpan={3}>
                  Linguagens, Códigos e suas Tecnologias
                </TableCell>
                <TableCell className="border">Língua Portuguesa e Literatura</TableCell>
                <TableCell className="border text-center">8.0</TableCell>
                <TableCell className="border text-center">6.9</TableCell>
                <TableCell className="border text-center">8.5</TableCell>
                <TableCell className="border text-center">360</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border">Arte</TableCell>
                <TableCell className="border text-center">7.5</TableCell>
                <TableCell className="border text-center">7.0</TableCell>
                <TableCell className="border text-center">8.0</TableCell>
                <TableCell className="border text-center">240</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border">Educação Física</TableCell>
                <TableCell className="border text-center">7.0</TableCell>
                <TableCell className="border text-center">7.2</TableCell>
                <TableCell className="border text-center">8.5</TableCell>
                <TableCell className="border text-center">240</TableCell>
              </TableRow>
              {/* More subject areas... */}
            </TableBody>
          </Table>

          {/* School History */}
          <Table className="border border-black mt-4">
            <TableHeader>
              <TableRow>
                <TableHead className="border">Série</TableHead>
                <TableHead className="border">Ano</TableHead>
                <TableHead className="border">Estabelecimento de Ensino</TableHead>
                <TableHead className="border">Município</TableHead>
                <TableHead className="border">UF</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border">1ª Série</TableCell>
                <TableCell className="border">2013</TableCell>
                <TableCell className="border">Colégio Estadual Cidade de Curitiba</TableCell>
                <TableCell className="border">Salvador</TableCell>
                <TableCell className="border">BA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border">2ª Série</TableCell>
                <TableCell className="border">2014</TableCell>
                <TableCell className="border">Colégio Estadual Cidade de Curitiba</TableCell>
                <TableCell className="border">Salvador</TableCell>
                <TableCell className="border">BA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border">3ª Série</TableCell>
                <TableCell className="border">2015</TableCell>
                <TableCell className="border">Colégio Estadual de Aplicação Anísio Teixeira</TableCell>
                <TableCell className="border">Salvador</TableCell>
                <TableCell className="border">BA</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Certification */}
          <div className="mt-8 space-y-4">
            <p className="text-center font-bold">C E R T I F I C A D O</p>
            <p className="text-justify">
              O Diretor(a) do Colégio Estadual de Aplicação Anísio Teixeira, CERTIFICA-nos termos do Inciso VII, Artigo
              24 da Lei Federal 9394/96, que JOÃO DA SILVA, R.G. 149241283-0, concluiu o Ensino Médio, no ano letivo de
              2015.
            </p>
            <div className="text-sm">
              <p>Número de registro e publicação no Sistema GDAE (Resolução SE 108/02): 5577TCS219-9BA</p>
            </div>
          </div>

          {/* Signatures */}
          <div className="mt-8 grid grid-cols-2 gap-8 text-center">
            <div>
              <div className="border-t border-black pt-2">
                <p>ELDA CARDOSO DIAS</p>
                <p className="text-sm">Secretário(a) Escolar</p>
                <p className="text-sm">Reg. nº 12345</p>
              </div>
            </div>
            <div>
              <div className="border-t border-black pt-2">
                <p>VALDENICE CERQUEIRA ESTRELA DE SOUSA</p>
                <p className="text-sm">Diretor(a)</p>
                <p className="text-sm">Reg. nº 67890</p>
              </div>
            </div>
          </div>

          {/* Security Code */}
          <div className="mt-4 text-sm">
            <p>CÓDIGO DE SEGURANÇA: 5577TCS219-9BA</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={onClose}>Fechar</Button>
        <Button>Imprimir</Button>
      </CardFooter>
    </Card>
  )
}

