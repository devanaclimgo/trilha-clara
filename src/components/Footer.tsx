import React from 'react'

const Footer = () => {
  return (
    <div>
      {' '}
      {/* Footer */}
      <div className="mt-12">
        {/* <a     // trocar link por modal QR code do pix
          href="https://apoia.se/trilhaclara"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary hover:text-accent transition-colors duration-300 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl"
        >
          Apoie este projeto no Apoia.se
        </a>
        */}
        <p className='inline-flex items-center px-6 py-3 text-sm font-medium text-gradient-trilha'>Desenvolvido por Ana Gomes | 2025</p>
      </div>
    </div>
  )
}

export default Footer
