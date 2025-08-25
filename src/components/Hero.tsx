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
          A clear path to knowledge.
        </p>
        <p className="text-lg text-muted-foreground">
          Get notified when we launch.
        </p>
      </div>
    </div>
  )
}

export default Hero
