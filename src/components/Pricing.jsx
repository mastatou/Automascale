import React, { useEffect, useRef } from 'react'

const createStar = (container) => {
  const star = document.createElement('div')
  star.className = 'star'
  star.style.left = `${Math.random() * 100}%`
  star.style.top = `${Math.random() * 100}%`
  star.style.setProperty('--twinkle-duration', `${2 + Math.random() * 3}s`)
  container.appendChild(star)
  return star
}

const PricingCard = ({ heading, description, price, buttonText = "Réserver un rdv", calendlyLink }) => {
  const cardRef = useRef(null)
  const spaceRef = useRef(null)
  const starsRef = useRef([])

  useEffect(() => {
    if (cardRef.current && spaceRef.current) {
      const numStars = 50
      for (let i = 0; i < numStars; i++) {
        const star = createStar(spaceRef.current)
        starsRef.current.push(star)
      }
    }

    return () => {
      starsRef.current.forEach(star => star.remove())
      starsRef.current = []
    }
  }, [])

  return (
    <div className="relative group pricing-card h-full" ref={cardRef}>
      {/* Space Background */}
      <div 
        ref={spaceRef}
        className="space-background rounded-2xl"
        style={{ opacity: 0 }}
      />

      {/* Card Container */}
      <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700/50 
                    transition-all duration-300 hover:border-[#e87811] hover:bg-gray-900/70 h-full flex flex-col">
        {/* Content Container */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-bold mb-4">{heading}</h3>
          <p className="text-gray-400 text-lg mb-6 flex-grow">{description}</p>
          <div className="text-3xl font-bold gradient-text h-[48px] flex items-center justify-center">{price}</div>
          
          {/* Enhanced CTA Button */}
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button group w-full py-3 px-6 text-center inline-block rounded-xl text-white font-semibold mt-8"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {buttonText}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform group-hover:translate-x-1"
              >
                <path 
                  d="M3.33337 8H12.6667" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M8 3.33337L12.6667 8.00004L8 12.6667" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const pricingData = [
    {
      heading: "Audit offert",
      description: "Découvrez gratuitement, en seulement 30 minutes, combien de temps et de ressources vous pouvez économiser grâce à l'IA.",
      price: "Gratuit",
      buttonText: "Réserver mon audit",
      calendlyLink: "https://cal.automascale.com/alexisdubain/audit-offert"
    },
    {
      heading: "Premier test",
      description: "Lancez votre première automatisation et constatez par vous-même l'impact sur votre efficacité opérationnelle.",
      price: "À partir de 500€",
      calendlyLink: "https://cal.automascale.com/alexisdubain/audit-offert"
    },
    {
      heading: "Solution sur-mesure",
      description: "Chaque projet est unique. Nos tarifs s'adaptent à la complexité de vos besoins pour vous offrir le meilleur rapport qualité-prix.",
      price: "Sur devis",
      calendlyLink: "https://cal.automascale.com/alexisdubain/audit-offert"
    }
  ]

  return (
    <section id="pricing" className="py-24 relative overflow-hidden pricing-section scroll-mt-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B2B]/10 to-[#00B67A]/10" />
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[800px] h-[800px] pricing-glow rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center pricing-title">Combien ça coûte ?</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingData.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
