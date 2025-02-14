import React from 'react'

export default function CreatorStudio() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Center Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[600px] h-[600px] bg-[#E87811]/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center">1er Use Case - Creator Studio</h2>
        
        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-16 group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl
                       border-2 border-gray-700/50 transition-all duration-300
                       hover:border-[#E87811] hover:bg-gray-900/70">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl
                         bg-gradient-to-b from-white/5 to-transparent opacity-0
                         group-hover:opacity-10 transition-opacity duration-300" 
          />
          
          <div className="flex items-start gap-6 relative">
            <img 
              src="https://i.imgur.com/aoaNG4T.png" 
              alt="Raibed Tahri" 
              className="w-16 h-16 rounded-full object-cover border-2 border-[#E87811]"
            />
            <div>
              <h3 className="text-xl font-bold">Raibed Tahri</h3>
              <p className="text-gray-400 mb-4">CEO de Creator Studio</p>
              <p className="text-gray-300 text-lg leading-relaxed italic">
                "Grâce à l'automatisation de la réutilisation et de la publication de nos longues vidéos dans des formats courts, nous avons gagné un temps considérable. Au lieu de nous disperser dans des tâches répétitives, nous pouvons désormais nous concentrer sur la création de contenus à forte valeur ajoutée. Cette solution d'IA nous a rendus plus rentables, mais surtout, j'ai retrouvé un meilleur équilibre entre ma vie professionnelle et ma vie personnelle."
              </p>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 
                         bg-gradient-to-t from-gray-900/30 to-transparent 
                         rounded-b-2xl opacity-0 group-hover:opacity-100
                         transition-opacity duration-300" 
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Image with Hover Effect */}
          <div className="relative group">
            <a href="https://www.notion.so/Raibed-Tahri-19a9f466a92d80dea95fe3dcdd4c169a?pvs=4" 
               target="_blank" 
               rel="noopener noreferrer"
               className="block relative overflow-hidden rounded-2xl">
              <img 
                src="https://i.imgur.com/qukPEGK.png" 
                alt="Creator Studio Case Study" 
                className="w-full h-auto rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-6 py-3 bg-[#E87811] text-white rounded-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  View use case
                </button>
              </div>
            </a>
          </div>

          {/* Right Side - Metrics Frame */}
          <div className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl
                         border-2 border-gray-700/50 transition-all duration-300
                         hover:border-[#E87811] hover:bg-gray-900/70">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl
                           bg-gradient-to-b from-white/5 to-transparent opacity-0
                           group-hover:opacity-10 transition-opacity duration-300" 
            />
            
            <div className="space-y-6 relative">
              <div>
                <h4 className="text-xl font-semibold text-[#E87811] mb-2">Coût de la mise en œuvre</h4>
                <p className="text-3xl font-bold">2000€</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-[#E87811] mb-2">Coût mensuels</h4>
                <p className="text-3xl font-bold">60€</p>
                <p className="text-gray-400">(abonnement aux outils)</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-[#E87811] mb-2">Temps gagné</h4>
                <p className="text-3xl font-bold">10h</p>
                <p className="text-gray-400">par semaine</p>
              </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 
                           bg-gradient-to-t from-gray-900/30 to-transparent 
                           rounded-b-2xl opacity-0 group-hover:opacity-100
                           transition-opacity duration-300" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
