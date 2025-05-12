import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-3xl font-extralight tracking-tight text-gray-900">TrainTo</Link>
            <div className="hidden md:flex space-x-10">
              <Link href="#solutions" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Lösungen</Link>
              <Link href="#benefits" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Vorteile</Link>
              <Link href="#case-studies" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Fallstudien</Link>
              <Link href="#about" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Über uns</Link>
              <Link href="#contact" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Kontakt</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://traintogo.de" className="text-gray-700 hover:text-[var(--brand)] transition-colors text-base">Für Nutzer</Link>
              <button className="bg-[var(--brand)] text-white px-7 py-2 rounded-full text-base font-semibold shadow-md hover:bg-[var(--brand-dark)] transition-all">
                Demo sichern
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-gradient-to-b from-[var(--brand-light)] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[var(--brand)]/20 to-transparent -skew-y-3 z-0" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-extralight text-gray-900 mb-8 leading-tight">
            Ihre Mitglieder.<br />Ihre App.<br />Unser System.
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Trainto verbindet Ihre Marke mit Technologie für Studioerfolg. Steigern Sie Ihre Auslastung und Kundenbindung mit unseren intelligenten Lösungen.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-[var(--brand)] text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-[var(--brand-dark)] transition-all">
              Jetzt Demo sichern
            </button>
            <Link href="https://traintogo.de" className="text-[var(--brand)] border border-[var(--brand)] px-10 py-4 rounded-full text-xl font-semibold hover:bg-[var(--brand-light)] transition-all">
              Für Nutzer: traintogo.de
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-28 bg-white border-t border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[var(--brand)]/10 to-transparent -skew-y-2 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-light text-center mb-4 tracking-tight">Unsere Lösungen</h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light">
            Zwei innovative Produkte, die perfekt aufeinander abgestimmt sind, um Ihr Studio auf das nächste Level zu heben.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-start hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">gymdeals</h3>
              <p className="text-gray-600 mb-8 font-light">Kundenbindung & Rewards als White-Label-Lösung für Ihr Studio.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 text-lg font-light">
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Individuelles Branding
                </li>
                <li className="flex items-center text-gray-700 text-lg font-light">
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Gamifizierte Kundenbindung
                </li>
                <li className="flex items-center text-gray-700 text-lg font-light">
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Intelligentes Dashboard
                </li>
                <li className="flex items-center text-gray-700 text-lg font-light">
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Automatisierte CRM-Tools
                </li>
              </ul>
              <button className="text-[var(--brand)] font-semibold hover:underline text-lg transition-all">
                Mehr erfahren →
              </button>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-start hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">traintogo</h3>
              <p className="text-gray-600 mb-8 font-light">Flexible Check-in-Lösung für moderne Studios.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700 text-lg font-light">
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Minutengenaue Abrechnung
                </li>
                <li className="flex items-center text-gray-700 text-lg font-light">
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  QR-Code Check-in
                </li>
                <li className="flex items-center text-gray-700 text-lg font-light">
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Flexible Mitgliederverwaltung
                </li>
                <li className="flex items-center text-gray-700 text-lg font-light">
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Echtzeit-Auslastungsüberwachung
                </li>
              </ul>
              <button className="text-[var(--brand)] font-semibold hover:underline text-lg transition-all">
                Partner werden →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-28 bg-gradient-to-b from-[var(--brand-light)] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[var(--brand)]/10 to-transparent -skew-y-2 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-light text-center mb-4 tracking-tight">Vorteile für Studios</h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light">
            Steigern Sie Ihre Effizienz und maximieren Sie Ihren Erfolg mit unseren integrierten Lösungen.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl font-semibold text-[var(--brand)] mb-2">+30%</div>
              <p className="text-gray-700 text-lg font-light text-center">Umsatzsteigerung durch flexible Abrechnung</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl font-semibold text-[var(--brand)] mb-2">+45%</div>
              <p className="text-gray-700 text-lg font-light text-center">Kundenbindung durch gamifizierte Rewards</p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center hover:shadow-2xl transition-shadow">
              <div className="text-5xl font-semibold text-[var(--brand)] mb-2">+25%</div>
              <p className="text-gray-700 text-lg font-light text-center">Neukundengewinnung durch traintogo-Netzwerk</p>
            </div>
          </div>
          {/* Partner Logos */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Vertrauen Sie uns</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="h-12 w-32 bg-[var(--brand-light)] rounded-xl"></div>
              <div className="h-12 w-32 bg-[var(--brand-light)] rounded-xl"></div>
              <div className="h-12 w-32 bg-[var(--brand-light)] rounded-xl"></div>
              <div className="h-12 w-32 bg-[var(--brand-light)] rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-28 bg-white border-t border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-[var(--brand)]/10 to-transparent -skew-y-2 z-0" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] rounded-3xl p-16 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-light mb-6">Demo anfordern</h2>
            <p className="text-2xl mb-10 max-w-2xl mx-auto font-light">
              Entdecken Sie, wie Trainto Ihr Studio auf das nächste Level bringt. Kombinieren Sie die Vorteile von gymdeals und traintogo für maximale Effizienz.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-[var(--brand)] px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-[var(--brand-light)] transition-all">
                gymdeals Demo
              </button>
              <button className="bg-white text-[var(--brand)] px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-[var(--brand-light)] transition-all">
                traintogo Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-28 bg-gradient-to-b from-[var(--brand-light)] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[var(--brand)]/10 to-transparent -skew-y-2 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-light text-center mb-4 tracking-tight">Fallstudien & Erfolgsgeschichten</h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light">
            Erfahren Sie, wie andere Studios mit Trainto ihre Effizienz steigern und neue Mitglieder gewinnen.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Studio X mit gymdeals</h3>
              <p className="text-gray-600 mb-8 font-light">
                Wie Studio X seine Kundenbindung um 45% steigerte und neue Mitglieder gewann.
              </p>
              <button className="text-[var(--brand)] font-semibold hover:underline text-lg transition-all self-start">
                Fallstudie lesen →
              </button>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Studio Y mit traintogo</h3>
              <p className="text-gray-600 mb-8 font-light">
                Die digitale Transformation von Studio Y mit unserer Check-in-Lösung.
              </p>
              <button className="text-[var(--brand)] font-semibold hover:underline text-lg transition-all self-start">
                Fallstudie lesen →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 bg-white border-t border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-[var(--brand)]/10 to-transparent -skew-y-2 z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-light mb-8 tracking-tight">Über uns</h2>
            <p className="text-2xl text-gray-600 mb-8 font-light">
              Unsere Mission: Fitness für alle – mit Technologie für Studios
            </p>
            <p className="text-gray-500 mb-8 text-xl font-light">
              Wir bei Trainto glauben daran, dass moderne Technologie Studios dabei helfen kann,
              ihre Mitglieder besser zu betreuen und gleichzeitig ihr Geschäft zu wachsen. Mit unseren
              integrierten Lösungen gymdeals und traintogo schaffen wir ein Ökosystem, das sowohl
              Studios als auch Nutzern maximale Flexibilität und Effizienz bietet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 bg-gradient-to-b from-[var(--brand-light)] to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-[var(--brand)]/10 to-transparent -skew-y-2 z-0" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-light text-center mb-4 tracking-tight">Kontakt & Support</h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light">
            Haben Sie Fragen zu unseren Lösungen? Unser Team steht Ihnen gerne zur Verfügung.
          </p>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              <div>
                <label className="block text-gray-700 mb-2 font-light">Name</label>
                <input type="text" className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 font-light text-lg" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-light">E-Mail</label>
                <input type="email" className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 font-light text-lg" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-light">Nachricht</label>
                <textarea className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20 font-light text-lg h-32"></textarea>
              </div>
              <button className="w-full bg-[var(--brand)] text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-[var(--brand-dark)] transition-all">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--brand-light)] text-gray-700 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-extralight mb-4 text-gray-900">TrainTo</h3>
              <p className="text-gray-500 font-light">
                Ihre Mitglieder. Ihre App. Unser System.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Quicklinks</h4>
              <ul className="space-y-2">
                <li><Link href="https://traintogo.de" className="text-gray-700 hover:text-[var(--brand)] transition-colors">traintogo.de (Für Nutzer)</Link></li>
                <li><Link href="#demo" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Demo</Link></li>
                <li><Link href="#support" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Rechtliches</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Impressum</Link></li>
                <li><Link href="#" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Social Media</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[var(--brand)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[var(--brand)]">
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
