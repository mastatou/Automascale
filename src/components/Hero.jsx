import React from 'react'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-background"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-50" style={{ backgroundColor: '#E87811' }}></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 rounded-full blur-[120px] opacity-50" style={{ backgroundColor: '#21874E' }}></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mx-auto">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <p className="text-gray-400 font-medium text-lg md:text-xl">
              Pour les entreprises qui fonctionnent déjà bien et qui veulent propulser leur croissance grâce à l'IA
            </p>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path 
                d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" 
                stroke="currentColor" 
                strokeWidth="1.67" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Main Heading */}
          <h1 className="gradient-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold w-full" style={{ lineHeight: '1.3' }}>
            <div className="flex flex-col items-center justify-center">
              <span className="block pb-2 leading-tight">Une équipe d'agents IA</span>
              <span className="block pt-2 pb-4 leading-tight">qui propulse votre entreprise</span>
            </div>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 mt-8">
            Automatisez vos processus, libérez vos équipes des tâches répétitives et concentrez-vous sur l'essentiel. Grâce à nos solutions d'automatisation sur-mesure, chaque agent IA travaille en synergie pour transformer votre quotidien opérationnel.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a 
              href="https://cal.automascale.com/alexisdubain/audit-offert"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-button group text-lg md:text-xl py-6 px-8 relative inline-flex items-center"
            >
              <div className="glow-effect"></div>
              <span className="relative z-10 flex items-center gap-3">
                Planifiez votre audit offert
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path 
                    d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" 
                    stroke="currentColor" 
                    strokeWidth="1.67" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
