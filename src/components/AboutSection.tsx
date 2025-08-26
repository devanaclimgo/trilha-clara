import React from 'react'

const AboutSection = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-12 text-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-xl float-animation" />
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-lg float-animation"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
        <div className="flex items-center justify-center mb-4">
          <span className="text-4xl">📘</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gradient-trilha mb-6">
          O que é a Trilha Clara?
        </h2>

        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-primary">Trilha Clara</strong> é uma
            plataforma feita para estudantes que querem organizar seus estudos
            sem complicação.
          </p>

          <p>
            Ela ajuda você a criar resumos, dividir capítulos e ter um caminho
            claro até a prova ou TCC.
          </p>

          <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
            <p className="text-primary font-medium">
              Deixe seu email e seja o primeiro(a) a experimentar!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
