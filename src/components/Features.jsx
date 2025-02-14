import React from 'react'

export default function Features() {
  return (
    <div className="py-24 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Design",
              description: "Créations uniques et modernes",
              icon: "🎨"
            },
            {
              title: "Développement",
              description: "Solutions sur mesure",
              icon: "💻"
            },
            {
              title: "Support",
              description: "Assistance 24/7",
              icon: "🛟"
            }
          ].map((feature, index) => (
            <div key={index} className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="card-title">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
