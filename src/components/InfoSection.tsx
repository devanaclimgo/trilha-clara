import { BookOpen } from 'lucide-react'
import React from 'react'

const InfoSection = () => {
  return (
    <div>
      {/* Info Section */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gradient-trilha">
          <div className="mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-muted-foreground mb-4">Em breve</h2>
          <p className="text-muted-foreground/80 leading-relaxed">
            O Trilha Clara está sendo construída com tecnologia de IA de ponta.
            Inscreva-se agora e você será o primeiro a saber quando formos
            lançar. Transforme sua jornada de tese de estressante para
            tranquila.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
