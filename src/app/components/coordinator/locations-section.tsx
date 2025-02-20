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

interface Location {
  id: string
  name: string
  type: string
  capacity: number
  building: string
}

const initialLocations: Location[] = [
  { id: "1", name: "Sala 101", type: "Sala de Aula", capacity: 40, building: "Bloco A" },
  { id: "2", name: "Lab 1", type: "Laboratório", capacity: 30, building: "Bloco B" },
  { id: "3", name: "Auditório", type: "Auditório", capacity: 200, building: "Prédio Central" },
]

export function LocationsSection() {
  const [locations, setLocations] = useState<Location[]>(initialLocations)
  const [newLocation, setNewLocation] = useState<Omit<Location, "id">>({
    name: "",
    type: "",
    capacity: 0,
    building: "",
  })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddLocation = () => {
    const id = (locations.length + 1).toString()
    setLocations([...locations, { ...newLocation, id }])
    setNewLocation({ name: "", type: "", capacity: 0, building: "" })
    setIsDialogOpen(false)
  }

  return (
    <section id="locations" className="mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold text-[#2c5282]">Locais de Aula</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>Adicionar Local</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Adicionar Novo Local</DialogTitle>
                <DialogDescription>
                  Preencha os detalhes do novo local de aula aqui. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    value={newLocation.name}
                    onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Tipo
                  </Label>
                  <Input
                    id="type"
                    value={newLocation.type}
                    onChange={(e) => setNewLocation({ ...newLocation, type: e.target.value })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="capacity" className="text-right">
                    Capacidade
                  </Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={newLocation.capacity}
                    onChange={(e) => setNewLocation({ ...newLocation, capacity: Number.parseInt(e.target.value) })}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="building" className="text-right">
                    Prédio
                  </Label>
                  <Input
                    id="building"
                    value={newLocation.building}
                    onChange={(e) => setNewLocation({ ...newLocation, building: e.target.value })}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddLocation}>
                  Salvar
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Capacidade</TableHead>
                <TableHead>Prédio</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {locations.map((location) => (
                <TableRow key={location.id}>
                  <TableCell>{location.name}</TableCell>
                  <TableCell>{location.type}</TableCell>
                  <TableCell>{location.capacity}</TableCell>
                  <TableCell>{location.building}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

