import React from 'react'

export default function Contact() {
  return (
    <div className="py-24 bg-base-200">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contactez-nous</h2>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email@example.com" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="Votre message"></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Envoyer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
