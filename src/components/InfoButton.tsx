import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Github, Info, Linkedin, Mail, User } from 'lucide-react'
import { DialogHeader } from './ui/dialog'

const InfoButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {' '}
      {/* rever modal */}
      <div className="absolute top-6 right-6 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300"
        >
          <Info className="h-5 w-5 text-primary" />
        </Button>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger>
            <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-sm border-primary/20">
              <DialogHeader>
                <DialogTitle className="text-gradient-trilha text-center">
                  Sobre a Criadora
                </DialogTitle>
                <DialogDescription className="space-y-4 text-center">
                  Conheça Ana Clara, a mente por trás do projeto Trilha Clara.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Olá! Sou apaixonada por usar IA para facilitar a vida
                    acadêmica dos alunos. A Trilha Clara é a minha visão para
                    transformar a forma como os alunos abordam seus projetos de
                    tese.
                  </span>
                </div>
                <div className="space-y-3">
                  <a
                    href="mailto:anaclimgo@gmail.com"
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">anaclimgo@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/devanaclimgo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Github className="h-4 w-4 text-primary" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ana-clara-gomes-48b83b224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-primary" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </DialogContent>
          </DialogTrigger>
        </Dialog>
      </div>
    </div>
  )
}

export default InfoButton
