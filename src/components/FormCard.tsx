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
import { CheckCircle, Send } from 'lucide-react'

import { useForm } from '@formspree/react'

const FormCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyLevel: '',
    course: '',
  })

  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xqadkglp',
  )

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const formatBrazilPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 11)
    const area = digits.slice(0, 2)
    const rest = digits.slice(2)

    if (!digits.length) return ''

    let formatted = ''
    formatted += `(${area}`
    if (digits.length >= 2) formatted += ') '

    if (rest.length <= 4) {
      formatted += rest
    } else if (rest.length <= 8) {
      formatted += `${rest.slice(0, rest.length - 4)}-${rest.slice(-4)}`
    } else {
      formatted += `${rest.slice(0, 5)}-${rest.slice(5, 9)}`
    }

    return formatted
  }

  // Show error state
  if (state.errors && Array.isArray(state.errors) && state.errors.length > 0) {
    return (
      <div className="w-full max-w-md mx-auto relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-8 w-24 h-24 bg-red-100/20 rounded-full blur-lg float-animation" />
          <div
            className="absolute bottom-8 right-6 w-20 h-20 bg-red-200/20 rounded-full blur-md float-animation"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-50/30 rounded-full blur-xl float-animation"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl relative z-10">
          <CardContent className="p-4 sm:p-6 md:p-8 text-center">
            <div className="relative mb-6 mt-5">
              <div className="absolute inset-0 bg-gradient-to-r from-red-200/20 to-red-300/20 rounded-full blur-xl animate-pulse" />
              <div className="h-20 w-20 mx-auto relative z-10 flex items-center justify-center">
                <span className="text-4xl">😅</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gradient-trilha mb-4">
              Ops! Algo deu errado 😅
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Houve um problema ao enviar seu formulário. Mas não se preocupe!
            </p>

            <div className="space-y-3 text-sm text-red-600">
              {Array.isArray(state.errors) &&
                state.errors.map(
                  (error: { message?: string }, index: number) => (
                    <div
                      key={index}
                      className="p-3 bg-red-50 rounded-lg border border-red-200"
                    >
                      {error.message || 'Erro desconhecido'}
                    </div>
                  ),
                )}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-red-100/50 rounded-xl border border-red-200/50">
              <p className="text-sm text-red-700 font-medium">
                💡 Tente novamente ou entre em contato conosco!
              </p>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Tentar Novamente
            </button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (state.succeeded) {
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
          <CardContent className="p-4 sm:p-6 md:p-8 text-center">
            <div className="relative mb-6 mt-5">
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
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <form
            onSubmit={handleSubmit}
            action={`https://formspree.io/f/${
              process.env.NEXT_PUBLIC_FORMSPREE_ID || 'your_formspree_form_id_here'
            }`}
            method="POST"
            className="space-y-6"
          >
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
                name="name"
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
                name="email"
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
                name="telefone"
                inputMode="numeric"
                pattern="^\(?\d{2}\)?\s?9?\d{4,5}-?\d{4}$"
                data-mask="(00) 0000-0000"
                data-mask-selectonfocus="true"
                value={formData.phone}
                onChange={(e) => {
                  const formatted = formatBrazilPhone(e.target.value)
                  handleInputChange('phone', formatted)
                }}
                maxLength={16}
                placeholder="(00) 00000-0000"
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
                name="selected"
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
                  name="curso"
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
              className="w-full bg-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white font-medium py-3 relative overflow-hidden"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Send className="h-5 w-5 animate-fly" />
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-sm animate-pulse" />
                    {/* Flying trail effect */}
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-white/60 rounded-full animate-trail" />
                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0.5 h-0.5 bg-white/40 rounded-full animate-trail-delayed" />
                  </div>
                  <span>Enviando mensagem...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="h-4 w-4" />
                  <span>Enviar Formulário</span>
                </div>
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
