import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      icon: "🎯",
      title: "Nous auditons vos besoins",
      description: "Nous analysons en profondeur vos processus pour identifier les gisements de productivité. Vous obtenez une vision claire des opportunités d'automatisation qui vous feront gagner un temps précieux."
    },
    {
      icon: "⚙️",
      title: "Développement des automatisations",
      description: "Nous conçevons et intègrons des workflows intelligents, parfaitement adaptés à votre environnement. Vos outils actuels restent inchangés, tandis que nos solutions s'y imbriquent pour transformer vos tâches répétitives en leviers stratégiques."
    },
    {
      icon: "🚀",
      title: "Félicitations, vos automatisations sont prêtes",
      description: "En quelques jours, vos automatisations IA sont déployées et opérationnelles, accompagnées d'une documentation claire et d'un suivi continu pour garantir performance et évolutivité."
    }
  ]

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden scroll-mt-32">
      {/* Rest of the component remains the same */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[600px] h-[600px] bg-[#e87811]/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            Une approche simple et efficace pour transformer vos processus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl
                         border-2 border-gray-700/50 transition-all duration-300
                         hover:border-[#e87811] hover:bg-gray-900/70"
            >
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl
                            bg-gradient-to-b from-white/5 to-transparent opacity-0
                            group-hover:opacity-10 transition-opacity duration-300" 
              />
              
              <div className="relative">
                <div className="text-5xl mb-6">{step.icon}</div>
                
                <h3 className="text-2xl font-bold mb-4 min-h-[64px]">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1/3 
                            bg-gradient-to-t from-gray-900/30 to-transparent 
                            rounded-b-2xl opacity-0 group-hover:opacity-100
                            transition-opacity duration-300" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
