import React from 'react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* English Version */}
        <section className="space-y-8">
          <h1 className="text-3xl font-bold text-white">Terms and Conditions</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                Welcome to Automascale. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Acceptance of Terms</h2>
              <p>
                By accessing our website and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the services for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes. Your continued use of our services following any changes indicates your acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of France, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </section>

        {/* French Version */}
        <section className="space-y-8 mt-16 pt-16 border-t border-gray-800">
          <h1 className="text-3xl font-bold text-white">Conditions Générales d'Utilisation</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                Bienvenue sur Automascale. Les présentes Conditions Générales d'Utilisation régissent votre utilisation de notre site web et de nos services. En accédant à nos services ou en les utilisant, vous acceptez d'être lié par ces conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Acceptation des conditions</h2>
              <p>
                En accédant à notre site web et en utilisant nos services, vous reconnaissez avoir lu, compris et accepté d'être lié par ces Conditions Générales d'Utilisation. Si vous n'acceptez pas une quelconque partie de ces conditions, vous ne devez pas utiliser nos services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Responsabilités de l'utilisateur</h2>
              <p>Vous acceptez de :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Fournir des informations exactes et complètes</li>
                <li>Maintenir la sécurité de votre compte</li>
                <li>Respecter toutes les lois et réglementations applicables</li>
                <li>Ne pas utiliser les services à des fins illégales ou non autorisées</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Modifications des conditions</h2>
              <p>
                Nous nous réservons le droit de modifier ces conditions à tout moment. Nous informerons les utilisateurs de tout changement important. Votre utilisation continue de nos services après toute modification indique votre acceptation des conditions modifiées.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Loi applicable</h2>
              <p>
                Ces conditions sont régies et interprétées conformément aux lois françaises, sans tenir compte des dispositions en matière de conflit de lois.
              </p>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

