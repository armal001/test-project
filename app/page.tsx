'use client';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="font-sans">
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
      <section className="pt-40 pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Ihre Mitglieder.<br />Ihre App.<br />Unser System.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Trainto verbindet Ihre Marke mit Technologie für Studioerfolg. Steigern Sie Ihre Auslastung und Kundenbindung mit unseren intelligenten Lösungen.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button className="btn text-brand border border-brand bg-white hover:bg-brand hover:text-white transition">
              Jetzt Demo sichern
            </button>
            <Link href="https://traintogo.de" className="btn border border-brand text-brand bg-white hover:bg-brand hover:text-white transition">
              Für Nutzer: traintogo.de
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <motion.section
        id="solutions"
        className="py-28 bg-white border-t border-b border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-semibold text-gray-900 text-center mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Unsere Lösungen
          </motion.h2>
          <motion.p
            className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Zwei innovative Produkte, die perfekt aufeinander abgestimmt sind, um Ihr Studio auf das nächste Level zu heben.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } }
            }}
          >
            <motion.div
              className="card flex flex-col items-start"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
            >
              <motion.h3 className="text-2xl font-semibold mb-4 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >gymdeals</motion.h3>
              <motion.p className="text-gray-600 mb-8 font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >Kundenbindung & Rewards als White-Label-Lösung für Ihr Studio.</motion.p>
              <motion.ul className="space-y-4 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } }
                }}
              >
                <motion.li className="flex items-center text-gray-700 text-lg font-light"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Individuelles Branding
                </motion.li>
                <motion.li className="flex items-center text-gray-700 text-lg font-light"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Gamifizierte Kundenbindung
                </motion.li>
                <motion.li className="flex items-center text-gray-700 text-lg font-light"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Intelligentes Dashboard
                </motion.li>
                <motion.li className="flex items-center text-gray-700 text-lg font-light"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Automatisierte CRM-Tools
                </motion.li>
              </motion.ul>
              <motion.button
                className="btn text-brand border border-brand bg-white hover:bg-brand hover:text-white transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Mehr erfahren →
              </motion.button>
            </motion.div>
            <motion.div
              className="card flex flex-col items-start"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
            >
              <motion.h3 className="text-2xl font-semibold mb-4 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >traintogo</motion.h3>
              <motion.p className="text-gray-600 mb-8 font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >Flexible Check-in-Lösung für moderne Studios.</motion.p>
              <motion.ul className="space-y-4 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.12 } }
                }}
              >
                <motion.li className="flex items-center text-gray-700 text-lg font-light"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Minutengenaue Abrechnung
                </motion.li>
                <motion.li className="flex items-center text-gray-700 text-lg font-light"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  QR-Code Check-in
                </motion.li>
                <motion.li className="flex items-center text-gray-700 text-lg font-light"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Flexible Mitgliederverwaltung
                </motion.li>
                <motion.li className="flex items-center text-gray-700 text-lg font-light"
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                >
                  <span className="inline-block w-2 h-2 bg-[var(--brand)] rounded-full mr-3"></span>
                  Echtzeit-Auslastungsüberwachung
                </motion.li>
              </motion.ul>
              <motion.button
                className="btn text-brand border border-brand bg-white hover:bg-brand hover:text-white transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Partner werden →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        id="benefits"
        className="py-28 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-900 text-center mb-4 tracking-tight">Vorteile für Studios</h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light">
            Steigern Sie Ihre Effizienz und maximieren Sie Ihren Erfolg mit unseren integrierten Lösungen.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="card flex flex-col items-center">
              <div className="text-5xl font-semibold text-[var(--brand)] mb-2">+30%</div>
              <p className="text-gray-700 text-lg font-light text-center">Umsatzsteigerung durch flexible Abrechnung</p>
            </div>
            <div className="card flex flex-col items-center">
              <div className="text-5xl font-semibold text-[var(--brand)] mb-2">+45%</div>
              <p className="text-gray-700 text-lg font-light text-center">Kundenbindung durch gamifizierte Rewards</p>
            </div>
            <div className="card flex flex-col items-center">
              <div className="text-5xl font-semibold text-[var(--brand)] mb-2">+25%</div>
              <p className="text-gray-700 text-lg font-light text-center">Neukundengewinnung durch traintogo-Netzwerk</p>
            </div>
          </div>
          {/* Partner Logos */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-700">Vertrauen Sie uns</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <div className="h-12 w-32 bg-gray-100 rounded-xl"></div>
              <div className="h-12 w-32 bg-gray-100 rounded-xl"></div>
              <div className="h-12 w-32 bg-gray-100 rounded-xl"></div>
              <div className="h-12 w-32 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Demo Section */}
      <motion.section
        className="py-28 bg-white border-t border-b border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="card text-center text-gray-900">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Demo anfordern</h2>
            <p className="text-2xl mb-10 max-w-2xl mx-auto font-light">
              Entdecken Sie, wie Trainto Ihr Studio auf das nächste Level bringt. Kombinieren Sie die Vorteile von gymdeals und traintogo für maximale Effizienz.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="btn text-brand border border-brand bg-white hover:bg-brand hover:text-white transition">
                gymdeals Demo
              </button>
              <button className="btn text-brand border border-brand bg-white hover:bg-brand hover:text-white transition">
                traintogo Demo
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section
        id="case-studies"
        className="py-28 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-900 text-center mb-4 tracking-tight">Fallstudien & Erfolgsgeschichten</h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light">
            Erfahren Sie, wie andere Studios mit Trainto ihre Effizienz steigern und neue Mitglieder gewinnen.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Studio X mit gymdeals</h3>
              <p className="text-gray-600 mb-8 font-light">
                Wie Studio X seine Kundenbindung um 45% steigerte und neue Mitglieder gewann.
              </p>
              <button className="btn text-brand border border-brand bg-white hover:bg-brand hover:text-white transition self-start">
                Fallstudie lesen →
              </button>
            </div>
            <div className="card flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Studio Y mit traintogo</h3>
              <p className="text-gray-600 mb-8 font-light">
                Die digitale Transformation von Studio Y mit unserer Check-in-Lösung.
              </p>
              <button className="btn text-brand border border-brand bg-white hover:bg-brand hover:text-white transition self-start">
                Fallstudie lesen →
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-32 bg-white border-t border-b border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-5xl font-semibold text-gray-900 mb-10 tracking-tight">Über uns</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-2xl text-gray-700 mb-8 font-light leading-relaxed">
              Unsere Mission: Fitness für alle – mit Technologie für Studios
            </p>
            <p className="text-gray-500 mb-8 text-xl font-light leading-relaxed">
              Wir bei Trainto glauben daran, dass moderne Technologie Studios dabei helfen kann, ihre Mitglieder besser zu betreuen und gleichzeitig ihr Geschäft zu wachsen. Mit unseren integrierten Lösungen gymdeals und traintogo schaffen wir ein Ökosystem, das sowohl Studios als auch Nutzern maximale Flexibilität und Effizienz bietet.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-28 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-gray-900 text-center mb-4 tracking-tight">Kontakt & Support</h2>
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
              <button className="btn w-full text-brand border border-brand bg-white hover:bg-brand hover:text-white transition">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#181f27] text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-extralight mb-4 text-white">TrainTo</h3>
              <p className="text-gray-300 font-light">
                Ihre Mitglieder. Ihre App. Unser System.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quicklinks</h4>
              <ul className="space-y-2">
                <li><Link href="https://traintogo.de" className="text-gray-300 hover:text-[var(--brand)] transition-colors">traintogo.de (Für Nutzer)</Link></li>
                <li><Link href="#demo" className="text-gray-300 hover:text-[var(--brand)] transition-colors">Demo</Link></li>
                <li><Link href="#support" className="text-gray-300 hover:text-[var(--brand)] transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Rechtliches</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-300 hover:text-[var(--brand)] transition-colors">Impressum</Link></li>
                <li><Link href="#" className="text-gray-300 hover:text-[var(--brand)] transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Social Media</h4>
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
