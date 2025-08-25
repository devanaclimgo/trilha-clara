import React, { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Button } from './ui/button'
import { CheckCircle } from 'lucide-react'

const FormCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyLevel: '',
    course: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert(
      'Formulário enviado com sucesso! Você receberá um email quando o projeto estiver pronto.',
    )
    setFormData({ name: '', email: '', phone: '', studyLevel: '', course: '' })
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-semibold text-primary mb-2">
            Você está na lista!
          </h3>
          <p className="text-muted-foreground">
            Avisaremos você assim que a Trilha Clara for lançada. Prepare-se
            para transformar sua jornada acadêmica!
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div>
      {/* rever botão nível de estudo */}
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Nome
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-white/50 border-border/50 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-white/50 border-border/50 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-foreground"
              >
                Telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(00) 0 0000-0000"
                className="bg-white/50 border-border/50 focus:bg-white transition-all duration-300"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="studyLevel"
                className="text-sm font-medium text-foreground"
              >
                Nível de Estudo
              </Label>
              <Select
                value={formData.course} onValueChange={(value) => handleInputChange("Curso", value)} required
              >
                <SelectTrigger className="bg-white/50 border-border/50 focus:bg-white transition-all">
                  <SelectValue placeholder="Selecione seu nível" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ensino Médio">Ensino Médio</SelectItem>
                  <SelectItem value="Curso">Curso</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.studyLevel === 'Curso' && (
              <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                <Label
                  htmlFor="course"
                  className="text-sm font-medium text-foreground"
                >
                  Qual curso?
                </Label>
                <Input
                  id="course"
                  type="text"
                  value={formData.course}
                  onChange={(e) => handleInputChange("course", e.target.value)}
                  className="bg-white/50 border-border/50 focus:bg-white transition-all duration-300"
                  placeholder="Digite o nome do seu curso"
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full gradient-trilha hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white font-medium py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </div>
              ) : (
                'Enviar Formulário'
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6 leading-relaxed">
            O projeto está em construção. Você receberá um email quando estiver
            pronto.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default FormCard
