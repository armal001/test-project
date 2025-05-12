import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">Trainto</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#solutions" className="text-gray-600 hover:text-blue-600">Lösungen</Link>
              <Link href="#benefits" className="text-gray-600 hover:text-blue-600">Vorteile</Link>
              <Link href="#case-studies" className="text-gray-600 hover:text-blue-600">Fallstudien</Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600">Über uns</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600">Kontakt</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://traintogo.de" className="text-gray-600 hover:text-blue-600">Für Nutzer</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Demo sichern
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ihre Mitglieder. Ihre App. Unser System.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Trainto verbindet Ihre Marke mit Technologie für Studioerfolg. Steigern Sie Ihre Auslastung und Kundenbindung mit unseren intelligenten Lösungen.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              Jetzt Demo sichern
            </button>
            <Link href="https://traintogo.de" className="text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors border border-blue-600">
              Für Nutzer: traintogo.de
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Unsere Lösungen</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Zwei innovative Produkte, die perfekt aufeinander abgestimmt sind, um Ihr Studio auf das nächste Level zu heben.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">gymdeals</h3>
              <p className="text-gray-600 mb-6">Kundenbindung & Rewards als White-Label-Lösung für Ihr Studio.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Individuelles Branding
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Gamifizierte Kundenbindung
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligentes Dashboard
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Automatisierte CRM-Tools
                </li>
              </ul>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Mehr erfahren →
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">traintogo</h3>
              <p className="text-gray-600 mb-6">Flexible Check-in-Lösung für moderne Studios.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Minutengenaue Abrechnung
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  QR-Code Check-in
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible Mitgliederverwaltung
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Echtzeit-Auslastungsüberwachung
                </li>
              </ul>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Partner werden →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Vorteile für Studios</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Steigern Sie Ihre Effizienz und maximieren Sie Ihren Erfolg mit unseren integrierten Lösungen.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+30%</div>
              <p className="text-gray-600">Umsatzsteigerung durch flexible Abrechnung</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+45%</div>
              <p className="text-gray-600">Kundenbindung durch gamifizierte Rewards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+25%</div>
              <p className="text-gray-600">Neukundengewinnung durch traintogo-Netzwerk</p>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-8">Vertrauen Sie uns</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {/* Hier würden die Partner-Logos eingefügt werden */}
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Demo anfordern</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entdecken Sie, wie Trainto Ihr Studio auf das nächste Level bringt. Kombinieren Sie die Vorteile von gymdeals und traintogo für maximale Effizienz.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                gymdeals Demo
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                traintogo Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Fallstudien & Erfolgsgeschichten</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Erfahren Sie, wie andere Studios mit Trainto ihre Effizienz steigern und neue Mitglieder gewinnen.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Studio X mit gymdeals</h3>
              <p className="text-gray-600 mb-6">
                Wie Studio X seine Kundenbindung um 45% steigerte und neue Mitglieder gewann.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Fallstudie lesen →
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Studio Y mit traintogo</h3>
              <p className="text-gray-600 mb-6">
                Die digitale Transformation von Studio Y mit unserer Check-in-Lösung.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Fallstudie lesen →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Über uns</h2>
            <p className="text-xl text-gray-600 mb-8">
              Unsere Mission: Fitness für alle – mit Technologie für Studios
            </p>
            <p className="text-gray-600 mb-8">
              Wir bei Trainto glauben daran, dass moderne Technologie Studios dabei helfen kann,
              ihre Mitglieder besser zu betreuen und gleichzeitig ihr Geschäft zu wachsen. Mit unseren
              integrierten Lösungen gymdeals und traintogo schaffen wir ein Ökosystem, das sowohl
              Studios als auch Nutzern maximale Flexibilität und Effizienz bietet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Kontakt & Support</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Haben Sie Fragen zu unseren Lösungen? Unser Team steht Ihnen gerne zur Verfügung.
          </p>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">E-Mail</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Nachricht</label>
                <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Trainto</h3>
              <p className="text-gray-400">
                Ihre Mitglieder. Ihre App. Unser System.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quicklinks</h4>
              <ul className="space-y-2">
                <li><Link href="https://traintogo.de" className="text-gray-400 hover:text-white">traintogo.de (Für Nutzer)</Link></li>
                <li><Link href="#demo" className="text-gray-400 hover:text-white">Demo</Link></li>
                <li><Link href="#support" className="text-gray-400 hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Impressum</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Datenschutz</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
