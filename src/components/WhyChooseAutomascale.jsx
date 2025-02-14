import React from 'react'

export default function WhyChooseAutomascale() {
  const features = [
    {
      title: "Expertise technique à la pointe",
      description: "Passionné par l'IA et constamment à l'affût des dernières nouveautés, j'adore relever les défis techniques que chaque projet présente. Pour moi, chaque défi est une opportunité d'innover et de créer des solutions qui transforment votre entreprise.",
      emoji: "🚀"
    },
    {
      title: "Accompagnement pédagogique personnalisé",
      description: "En tant que formateur depuis 2 ans, je m'engage à vous rendre autonome. Chaque livrable est accompagné d'une documentation claire, afin que vous compreniez parfaitement le fonctionnement de votre nouvelle solution.",
      emoji: "📚"
    },
    {
      title: "Processus efficaces et transparents",
      description: "Pas de blabla inutile : des méthodes éprouvées, des délais respectés et des tarifs clairs. Chez Automascale, vous savez exactement ce que vous payez et surtout, ce que vous gagnez en retour.",
      emoji: "⚡"
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Center Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[600px] h-[600px] bg-[#21874E]/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Pourquoi choisir Automascale ?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img 
                src="https://i.imgur.com/EQ1Nry4.jpeg" 
                alt="Professional headshot" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Image Overlay - Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
              
              {/* CEO Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-1">Alexis Dubain</h3>
                <p className="text-lg text-gray-300">CEO de Automascale</p>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Boxes */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl
                           border-2 border-gray-700/50 transition-all duration-300
                           hover:border-[#21874E] hover:bg-gray-900/70"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl
                              bg-gradient-to-b from-white/5 to-transparent opacity-0
                              group-hover:opacity-10 transition-opacity duration-300" 
                />
                
                <div className="relative">
                  {/* Emoji and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl opacity-50 transition-all duration-300 
                                   group-hover:opacity-100 group-hover:text-[#21874E] 
                                   [filter:grayscale(100%)] group-hover:[filter:grayscale(0%)]">
                      {feature.emoji}
                    </span>
                    <h3 className="text-2xl font-bold">
                      {feature.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 
                              bg-gradient-to-t from-gray-900/30 to-transparent 
                              rounded-b-2xl opacity-0 group-hover:opacity-100
                              transition-opacity duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
