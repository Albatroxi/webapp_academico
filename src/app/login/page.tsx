"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    // Here you would typically make an API call to verify credentials
    // For demonstration, we'll just log the attempt and redirect
    console.log("Login attempt with:", { email, password })
    // Simulating a successful login
    router.push("/dashboard")
  }

  const handlePasswordRecovery = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    // Here you would typically make an API call to initiate password recovery
    console.log("Password recovery requested for:", email)
    // Simulating a successful request
    alert("Se o email estiver cadastrado, você receberá instruções para redefinir sua senha.")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center">
          <Image src="/escudo-escola.svg" alt="Escudo da Escola" width={150} height={150} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Portal do Aluno</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Acesso ao Sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="recover">Recuperar Senha</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu.email@escola.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Entrar
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="recover">
                <form onSubmit={handlePasswordRecovery} className="space-y-4">
                  <div>
                    <Label htmlFor="recovery-email">Email</Label>
                    <Input
                      id="recovery-email"
                      type="email"
                      placeholder="seu.email@escola.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Recuperar Senha
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erro</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

