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
            <Link href="/" className="text-3xl font-bold tracking-tight text-[var(--brand)]">traintogo</Link>
            <div className="hidden md:flex space-x-10">
              <Link href="#features" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Features</Link>
              <Link href="#how" className="text-gray-700 hover:text-[var(--brand)] transition-colors">So funktioniert's</Link>
              <Link href="#faq" className="text-gray-700 hover:text-[var(--brand)] transition-colors">FAQ</Link>
              <Link href="#contact" className="text-gray-700 hover:text-[var(--brand)] transition-colors">Kontakt</Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#download" className="bg-[var(--brand)] text-white px-7 py-2 rounded-full text-base font-semibold shadow-md hover:bg-[var(--brand-dark)] transition-all">
                App laden
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold text-[var(--brand)] mb-8 leading-tight">
            Trainiere spontan,<br />wann du willst –<br />ohne Mitgliedschaft!
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            Minutengenaue Abrechnung. Über 100 Studios. Einfach QR-Code scannen und loslegen. Die flexible Fitness-App für alle.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <a href="#download" className="btn text-white border border-[var(--brand)] bg-[var(--brand)] hover:bg-[var(--brand-dark)] hover:text-white transition">
              App kostenlos laden
            </a>
            <a href="#how" className="btn border border-[var(--brand)] text-[var(--brand)] bg-white hover:bg-[var(--brand)] hover:text-white transition">
              So funktioniert's
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="py-28 bg-white border-t border-b border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-semibold text-[var(--brand)] text-center mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Features
          </motion.h2>
          <motion.p
            className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Flexibles Training, minutengenaue Abrechnung, QR-Code Check-in und mehr – alles in einer App.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } }
            }}
          >
            <motion.div
              className="card flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--brand)]">Minutengenaue Abrechnung</h3>
              <p className="text-gray-600 text-center font-light">Bezahle nur die Zeit, die du wirklich trainierst – ab 9 Cent/Minute.</p>
            </motion.div>
            <motion.div
              className="card flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--brand)]">QR-Code Check-in</h3>
              <p className="text-gray-600 text-center font-light">Einfach im Studio einchecken – kein Papierkram, keine Warteschlange.</p>
            </motion.div>
            <motion.div
              className="card flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--brand)]">Viele Studios</h3>
              <p className="text-gray-600 text-center font-light">Über 100 Partnerstudios – trainiere überall, wann du willst.</p>
            </motion.div>
            <motion.div
              className="card flex flex-col items-center"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--brand)]">Einfache Bezahlung</h3>
              <p className="text-gray-600 text-center font-light">Zahle bequem per App: Kreditkarte, PayPal, Google Pay.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How it works Section */}
      <motion.section
        id="how"
        className="py-28 bg-[var(--brand-light)] border-b border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-[var(--brand)] text-center mb-12 tracking-tight">So funktioniert's</h2>
          <div className="grid md:grid-cols-4 gap-10">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">⬇️</div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--brand)]">App laden</h3>
              <p className="text-gray-600 text-center font-light">Lade die traintogo-App kostenlos im App Store oder bei Google Play.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">🏋️‍♂️</div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--brand)]">Studio wählen</h3>
              <p className="text-gray-600 text-center font-light">Finde ein Studio in deiner Nähe und wähle es in der App aus.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">🔳</div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--brand)]">QR-Code scannen</h3>
              <p className="text-gray-600 text-center font-light">Checke mit dem QR-Code direkt im Studio ein – ganz ohne Wartezeit.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--brand)]">Trainieren & zahlen</h3>
              <p className="text-gray-600 text-center font-light">Trainiere so lange du willst und zahle minutengenau über die App.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vorteile Section */}
      <motion.section
        className="py-28 bg-white border-b border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-[var(--brand)] text-center mb-4 tracking-tight">Deine Vorteile</h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light">
            Unabhängigkeit, Flexibilität und volle Kostenkontrolle – mit traintogo trainierst du, wie es zu deinem Leben passt.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="card flex flex-col items-center">
              <div className="text-5xl font-semibold text-[var(--brand)] mb-2">🚀</div>
              <p className="text-gray-700 text-lg font-light text-center">Trainiere wann und wo du willst – ohne Vertragsbindung.</p>
            </div>
            <div className="card flex flex-col items-center">
              <div className="text-5xl font-semibold text-[var(--brand)] mb-2">🔓</div>
              <p className="text-gray-700 text-lg font-light text-center">Volle Flexibilität: Verschiedene Studios, keine Verpflichtung.</p>
            </div>
            <div className="card flex flex-col items-center">
              <div className="text-5xl font-semibold text-[var(--brand)] mb-2">💡</div>
              <p className="text-gray-700 text-lg font-light text-center">Einfache Nutzung: QR-Code scannen, trainieren, minutengenau zahlen.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* App Download Section */}
      <motion.section
        id="download"
        className="py-28 bg-[var(--brand-light)] border-b border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="card text-center text-gray-900">
            <h2 className="text-4xl font-semibold text-[var(--brand)] mb-6">App herunterladen</h2>
            <p className="text-2xl mb-10 max-w-2xl mx-auto font-light">
              Starte jetzt mit traintogo! Lade die App kostenlos herunter und trainiere flexibel in über 100 Studios.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
              <a href="#" className="btn text-white border border-[var(--brand)] bg-[var(--brand)] hover:bg-[var(--brand-dark)] hover:text-white transition">
                App Store
              </a>
              <a href="#" className="btn text-[var(--brand)] border border-[var(--brand)] bg-white hover:bg-[var(--brand)] hover:text-white transition">
                Google Play
              </a>
            </div>
            <div className="mt-6">
              <span className="text-gray-500">Oder scanne den QR-Code mit deinem Smartphone:</span>
              <div className="flex justify-center mt-4">
                <div className="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center text-2xl text-gray-400">QR</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        className="py-28 bg-white border-b border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-[var(--brand)] text-center mb-12 tracking-tight">FAQ</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--brand)]">Brauche ich eine Mitgliedschaft?</h3>
              <p className="text-gray-600 font-light">Nein! Mit traintogo trainierst du flexibel und zahlst nur, wenn du wirklich trainierst – ganz ohne Vertrag.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--brand)]">Wie funktioniert die minutengenaue Abrechnung?</h3>
              <p className="text-gray-600 font-light">Du checkst per QR-Code ein und aus. Die App berechnet automatisch die exakte Trainingszeit und den Preis.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--brand)]">Wie bezahle ich?</h3>
              <p className="text-gray-600 font-light">Du kannst bequem per Kreditkarte, PayPal oder Google Pay zahlen – alles direkt in der App.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--brand)]">Wo kann ich trainieren?</h3>
              <p className="text-gray-600 font-light">In allen Partnerstudios, die du in der App findest. Das Netzwerk wächst ständig!</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Kontakt Section */}
      <motion.section
        id="contact"
        className="py-28 bg-[var(--brand-light)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-[var(--brand)] text-center mb-4 tracking-tight">Kontakt & Support</h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto font-light">
            Du hast Fragen? Unser Team hilft dir gerne weiter.
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
              <button className="btn w-full text-white border border-[var(--brand)] bg-[var(--brand)] hover:bg-[var(--brand-dark)] hover:text-white transition">
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
              <h3 className="text-2xl font-bold mb-4 text-[var(--brand)]">traintogo</h3>
              <p className="text-gray-300 font-light">
                Flexibles Training. Minutengenaue Abrechnung. Überall trainieren.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quicklinks</h4>
              <ul className="space-y-2">
                <li><Link href="#download" className="text-gray-300 hover:text-[var(--brand)] transition-colors">App laden</Link></li>
                <li><Link href="#how" className="text-gray-300 hover:text-[var(--brand)] transition-colors">So funktioniert's</Link></li>
                <li><Link href="#faq" className="text-gray-300 hover:text-[var(--brand)] transition-colors">FAQ</Link></li>
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
