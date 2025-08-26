import React from 'react'

const Footer = () => {
  return (
    <div>
      {' '}
      {/* Footer */}
      <div>
        <p className="text-center px-6 py-3 text-sm font-medium text-foreground">
          Desenvolvido por{' '}
          <a
            href="https://github.com/devanaclimgo"
            className="text-gradient-trilha"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ana Gomes
          </a>{' '}
          | 2025
        </p>
      </div>
    </div>
  )
}

export default Footer
