"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FileText, User, ClipboardList, Upload } from "lucide-react"
import Image from "next/image"

export default function MatriculaPage() {
  const [formData, setFormData] = useState({
    nomeAluno: "",
    dataNascimento: "",
    rgAluno: "",
    cpfAluno: "",
    enderecoAluno: "",
    nomeResponsavel: "",
    rgResponsavel: "",
    cpfResponsavel: "",
    telefoneResponsavel: "",
    emailResponsavel: "",
    observacoes: "",
  })

  const [documents, setDocuments] = useState({
    certidaoNascimento: null,
    comprovanteResidencia: null,
    historicoEscolar: null,
    carteiraVacinacao: null,
    foto3x4: null,
    documentoResponsavel: null,
  })

  //const [foto3x4Preview, setFoto3x4Preview] = useState(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  

  const [foto3x4Preview, setFoto3x4Preview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (!files) return
  
    setDocuments((prev) => ({ ...prev, [name]: files[0] }))
  
    if (name === "foto3x4" && files[0]) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFoto3x4Preview(reader.result as string)  // Agora 'result' é tratado como string
      }
      reader.readAsDataURL(files[0])
    }
  }
  
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Dados do formulário:", formData)
    console.log("Documentos:", documents)
    // Aqui você implementaria a lógica para enviar os dados e documentos para o servidor
  }
  

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-5"
        style={{
          backgroundImage: "url('/escudo-escola.svg')",
        }}
      ></div>
      <div className="max-w-3xl mx-auto relative">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Matrícula Escolar</h1>
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">Formulário de Matrícula</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 relative">
                  {foto3x4Preview ? (
                    <Image
                      src={foto3x4Preview || "/placeholder.svg"}
                      alt="Foto 3x4"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  <label
                    htmlFor="foto3x4"
                    className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer"
                  >
                    <Upload className="w-4 h-4" />
                  </label>
                  <Input
                    id="foto3x4"
                    name="foto3x4"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </div>
              </div>
              <section>
                <h2 className="text-xl font-semibold flex items-center mb-4">
                  <User className="mr-2" /> Informações do Aluno
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nomeAluno">Nome Completo</Label>
                    <Input
                      id="nomeAluno"
                      name="nomeAluno"
                      value={formData.nomeAluno}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                    <Input
                      id="dataNascimento"
                      name="dataNascimento"
                      type="date"
                      value={formData.dataNascimento}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="rgAluno">RG</Label>
                    <Input id="rgAluno" name="rgAluno" value={formData.rgAluno} onChange={handleInputChange} required />
                  </div>
                  <div>
                    <Label htmlFor="cpfAluno">CPF</Label>
                    <Input
                      id="cpfAluno"
                      name="cpfAluno"
                      value={formData.cpfAluno}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="enderecoAluno">Endereço Completo</Label>
                    <Input
                      id="enderecoAluno"
                      name="enderecoAluno"
                      value={formData.enderecoAluno}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold flex items-center mb-4">
                  <User className="mr-2" /> Informações do Responsável
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nomeResponsavel">Nome Completo</Label>
                    <Input
                      id="nomeResponsavel"
                      name="nomeResponsavel"
                      value={formData.nomeResponsavel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="rgResponsavel">RG</Label>
                    <Input
                      id="rgResponsavel"
                      name="rgResponsavel"
                      value={formData.rgResponsavel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cpfResponsavel">CPF</Label>
                    <Input
                      id="cpfResponsavel"
                      name="cpfResponsavel"
                      value={formData.cpfResponsavel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefoneResponsavel">Telefone</Label>
                    <Input
                      id="telefoneResponsavel"
                      name="telefoneResponsavel"
                      value={formData.telefoneResponsavel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="emailResponsavel">E-mail</Label>
                    <Input
                      id="emailResponsavel"
                      name="emailResponsavel"
                      type="email"
                      value={formData.emailResponsavel}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold flex items-center mb-4">
                  <FileText className="mr-2" /> Documentos (PDF)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="certidaoNascimento">Certidão de Nascimento</Label>
                    <Input
                      id="certidaoNascimento"
                      name="certidaoNascimento"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="comprovanteResidencia">Comprovante de Residência</Label>
                    <Input
                      id="comprovanteResidencia"
                      name="comprovanteResidencia"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="historicoEscolar">Histórico Escolar</Label>
                    <Input
                      id="historicoEscolar"
                      name="historicoEscolar"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="carteiraVacinacao">Carteira de Vacinação</Label>
                    <Input
                      id="carteiraVacinacao"
                      name="carteiraVacinacao"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="documentoResponsavel">Documento do Responsável</Label>
                    <Input
                      id="documentoResponsavel"
                      name="documentoResponsavel"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold flex items-center mb-4">
                  <ClipboardList className="mr-2" /> Observações
                </h2>
                <Textarea
                  id="observacoes"
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleInputChange}
                  placeholder="Informações adicionais relevantes para a matrícula"
                  rows={4}
                />
              </section>

              <Button type="submit" className="w-full">
                <Upload className="mr-2 h-4 w-4" /> Enviar Matrícula
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

