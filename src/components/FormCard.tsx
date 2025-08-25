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
      <div className="w-full max-w-md mx-auto relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-8 w-24 h-24 bg-accent/10 rounded-full blur-lg float-animation" />
          <div
            className="absolute bottom-8 right-6 w-20 h-20 bg-primary/10 rounded-full blur-md float-animation"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/5 rounded-full blur-xl float-animation"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl relative z-10">
          <CardContent className="p-8 text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse" />
              <CheckCircle className="h-20 w-20 text-accent mx-auto relative z-10 animate-bounce" />
            </div>

            <h3 className="text-2xl font-bold text-gradient-trilha mb-4">
              Você está na lista! 🎉
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Avisaremos você assim que a Trilha Clara for lançada. Prepare-se
              para transformar sua jornada acadêmica!
            </p>

            <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
              <p className="text-sm text-primary font-medium">
                ✨ Em breve você receberá novidades incríveis!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
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
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-white/50 border-border/50 focus:bg-white transition-all duration-300"
                placeholder="Nome"
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
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/50 border-border/50 focus:bg-white transition-all duration-300"
                placeholder="Email"
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
                onChange={(e) => handleInputChange('phone', e.target.value)}
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
                value={formData.studyLevel}
                onValueChange={(value) =>
                  handleInputChange('studyLevel', value)
                }
                required
              >
                <SelectTrigger className="bg-white border-border/50 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-all duration-300">
                  <SelectValue placeholder="Selecione seu nível" />
                </SelectTrigger>
                <SelectContent className="bg-white border-border/50">
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
                  onChange={(e) => handleInputChange('course', e.target.value)}
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
