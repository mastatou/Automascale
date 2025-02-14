import React, { useEffect, useRef } from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: "Disponibles 24h/7",
      points: [
        "Les agents IA ne prennent jamais de pause",
        "Support continu jour et nuit",
        "Garantie d'une exploitation ininterrompue de votre entreprise"
      ],
      icon: "🕒"
    },
    {
      title: "Intégration fluide avec vos outils existants",
      points: [
        "Connexion directe à votre environnement digital",
        "Aucune interruption de vos processus actuels",
        "Complément idéal à votre écosystème technologique"
      ],
      icon: "🔄"
    },
    {
      title: "Conçus pour une fiabilité sur le long terme",
      points: [
        "S'adaptent aux évolutions de vos besoins business",
        "Conçus pour une fiabilité sur le long terme"
      ],
      icon: "📈"
    }
  ];

  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
          observerRef.current.unobserve(entry.target);
        }
      });
    }, options);

    const elements = document.querySelectorAll('.benefit-card');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />
      
      {/* Center Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[600px] h-[600px] bg-[#e87811]/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Les avantages de nos assistants IA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`
                benefit-card opacity-0 translate-y-8 transition-all duration-700 ease-out
                group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl
                border-2 border-gray-700/50 hover:border-[#e87811] hover:bg-gray-900/70
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl
                            bg-gradient-to-b from-white/5 to-transparent opacity-0
                            group-hover:opacity-10 transition-opacity duration-300" 
              />

              <div className="relative">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-700/50 rounded-full mb-6 overflow-hidden">
                  <div className="h-full w-0 bg-gradient-to-r from-[#E87811] to-[#21874E] 
                                group-hover:w-full transition-all duration-1000 ease-out" />
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 opacity-60 group-hover:opacity-100 
                              transition-opacity duration-300">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>

                {/* Points */}
                <ul className="space-y-3">
                  {benefit.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-2 text-gray-300">
                      <span className="text-[#e87811] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
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
  );
};

export default Benefits;
