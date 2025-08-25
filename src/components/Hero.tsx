import { BookOpen, Sparkles, Zap } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div>
      {' '}
      {/* Hero section */}
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-trilha leading-tight">
          Trilha Clara
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 leading-relaxed">
          Um caminho claro para o conhecimento.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Seja notificado(a) quando for lançado.
        </p>
        <div className="flex items-center justify-center gap-8 mb-12 text-white/80">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm">Excelência Acadêmica</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-5 w-5" />
            <span className="text-sm">Alimentado por IA</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm">Livre de estresse</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
