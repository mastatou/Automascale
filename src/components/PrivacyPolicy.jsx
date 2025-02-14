import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* English Version */}
        <section className="space-y-8">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                Welcome to Automascale. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Register for an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us for support</li>
                <li>Participate in our surveys or promotions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Notify you about changes to our services</li>
                <li>Provide customer support</li>
                <li>Monitor the usage of our services</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at contact@automascale.com
              </p>
            </section>
          </div>
        </section>

        {/* French Version */}
        <section className="space-y-8 mt-16 pt-16 border-t border-gray-800">
          <h1 className="text-3xl font-bold text-white">Politique de Confidentialité</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                Bienvenue sur Automascale. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web. Veuillez lire attentivement cette politique de confidentialité. Si vous n'êtes pas d'accord avec les termes de cette politique de confidentialité, veuillez ne pas accéder au site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Informations que nous collectons</h2>
              <p>
                Nous collectons les informations que vous nous fournissez directement lorsque vous :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Créez un compte</li>
                <li>Vous abonnez à notre newsletter</li>
                <li>Nous contactez pour obtenir de l'aide</li>
                <li>Participez à nos sondages ou promotions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Comment nous utilisons vos informations</h2>
              <p>Nous utilisons les informations collectées pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Fournir et maintenir nos services</li>
                <li>Vous informer des changements de nos services</li>
                <li>Fournir un support client</li>
                <li>Surveiller l'utilisation de nos services</li>
                <li>Détecter, prévenir et résoudre les problèmes techniques</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Sécurité des données</h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles. Cependant, veuillez noter qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est sécurisée à 100%.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Nous contacter</h2>
              <p>
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à contact@automascale.com
              </p>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

