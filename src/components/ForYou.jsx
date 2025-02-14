import React from 'react'

export default function ForYou() {
  const cards = [
    {
      title: "Vos processus manuels freinent votre croissance",
      description: "Vous passez trop de temps sur des tâches répétitives qui ne demandent pas votre expertise, au lieu de vous concentrer sur l'innovation.",
      emoji: "⚙️" // Gear representing manual processes
    },
    {
      title: "Vos équipes sont constamment débordées",
      description: "La charge opérationnelle empêche vos collaborateurs de se consacrer aux missions à forte valeur ajoutée et freine votre développement.",
      emoji: "🔄" // Cycle representing overwhelming workload
    },
    {
      title: "La productivité est votre priorité",
      description: "Vous souhaitez optimiser chaque minute de votre journée pour réorienter vos ressources vers des projets stratégiques et créatifs.",
      emoji: "📈" // Chart representing productivity
    },
    {
      title: "Le recrutement, c'est une galère",
      description: "Trouver les bons profils pour soulager votre opérationnel représente un investissement en temps et en argent. Nos solutions remplacent cette complexité en automatisant les tâches chronophages.",
      emoji: "👥" // People representing recruitment
    },
    {
      title: "Vous visez l'excellence opérationnelle",
      description: "Pour rester en tête, vous devez moderniser vos processus et intégrer une technologie de pointe qui vous donne un avantage durable.",
      emoji: "🎯" // Target representing excellence
    },
    {
      title: "Pas le temps de vous informer et d'apprendre sur l'IA",
      description: "Vous savez que l'IA peut transformer votre business, mais vous n'avez pas le temps de devenir expert. Laissez-nous vous apporter les résultats, rapidement et efficacement.",
      emoji: "🤖" // Robot representing AI
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
          <h2 className="text-5xl font-bold">L'IA est faite pour vous si :</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
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
                {/* Emoji */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl opacity-50 transition-all duration-300 
                                 group-hover:opacity-100 group-hover:text-[#21874E] 
                                 [filter:grayscale(100%)] group-hover:[filter:grayscale(0%)]">
                    {card.emoji}
                  </span>
                  {/* Title */}
                  <h3 className="text-2xl font-bold">
                    {card.title}
                  </h3>
                </div>
                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed">
                  {card.description}
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
    </section>
  )
}
