import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500" />
            <span className="font-semibold tracking-tight">Flames Agency • Bolzano</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo('servizi')} className="hover:text-blue-600">Servizi</button>
            <button onClick={() => scrollTo('processo')} className="hover:text-blue-600">Processo</button>
            <button onClick={() => scrollTo('progetti')} className="hover:text-blue-600">Progetti</button>
            <button onClick={() => scrollTo('contatti')} className="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">Contatti</button>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200">
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-gray-800" />
              <span className="block h-0.5 w-5 bg-gray-800" />
              <span className="block h-0.5 w-5 bg-gray-800" />
            </div>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 px-6 pb-4">
            <div className="flex flex-col gap-3 pt-3 text-sm">
              <button onClick={() => {scrollTo('servizi'); setMenuOpen(false)}} className="text-left">Servizi</button>
              <button onClick={() => {scrollTo('processo'); setMenuOpen(false)}} className="text-left">Processo</button>
              <button onClick={() => {scrollTo('progetti'); setMenuOpen(false)}} className="text-left">Progetti</button>
              <button onClick={() => {scrollTo('contatti'); setMenuOpen(false)}} className="text-left px-3 py-2 rounded-md bg-blue-600 text-white">Contatti</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Web Agency a Bolzano per Sviluppo Web, Automazioni, AI e Digital Marketing
              </h1>
              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Trasformiamo idee in prodotti digitali. Costruiamo siti e applicazioni performanti, 
                automatizziamo processi, integriamo soluzioni di Intelligenza Artificiale e 
                generiamo crescita con strategie di marketing data-driven.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo('contatti')} className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Parla con noi
                </button>
                <button onClick={() => scrollTo('servizi')} className="px-5 py-3 rounded-md border border-gray-300 hover:border-gray-400">
                  Scopri i servizi
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> Tempi rapidi</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> Qualità garantita</div>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Supporto locale</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 blur-2xl rounded-3xl" />
              <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {title: 'Sviluppo Web', desc: 'Siti, e‑commerce e web app moderni'},
                    {title: 'Automazioni', desc: 'Ottimizziamo i flussi con integrazioni'},
                    {title: 'Soluzioni AI', desc: 'Chatbot, analisi, agenti e RAG'},
                    {title: 'Digital Marketing', desc: 'SEO, ADS, contenuti e analytics'},
                  ].map((c, i) => (
                    <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50/60">
                      <div className="font-semibold">{c.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{c.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-xs text-gray-500">Stack: React, FastAPI, Tailwind, MongoDB, OpenAI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="servizi" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Cosa facciamo</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">Soluzioni end‑to‑end per far crescere il tuo business online.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Sviluppo Web" points={[
              'Siti vetrina ed e‑commerce',
              'Web app e portali',
              'Prestazioni e SEO tecnico',
            ]} color="blue" />

            <ServiceCard title="Automazioni" points={[
              'Integrazioni API e Zapier/Make',
              'CRM e pipeline automatizzate',
              'Reportistica e data sync',
            ]} color="indigo" />

            <ServiceCard title="Soluzioni AI" points={[
              'Chatbot e assistenti custom',
              'Analisi documenti e RAG',
              'Automazione con agenti AI',
            ]} color="violet" />

            <ServiceCard title="Digital Marketing" points={[
              'Strategia e contenuti',
              'SEO/SEA e campagne ADS',
              'Analytics e CRO',
            ]} color="cyan" />
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Un processo semplice e trasparente</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              {step: '01', title: 'Analisi', desc: 'Capire obiettivi e KPI per impostare la strategia.'},
              {step: '02', title: 'Progettazione', desc: 'UX/UI, architettura e piano tecnico.'},
              {step: '03', title: 'Sviluppo', desc: 'Iterazioni rapide, demo e feedback continui.'},
              {step: '04', title: 'Crescita', desc: 'Lanciamo, misuriamo e ottimizziamo.'},
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="text-sm font-mono text-blue-600">{s.step}</div>
                <div className="mt-2 font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-gray-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progetti */}
      <section id="progetti" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Case study</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {title: 'E‑commerce performance', tag: 'Sviluppo Web', result: '+42% conversioni'},
              {title: 'Lead gen automatizzata', tag: 'Automazioni', result: '4h risparmiate/giorno'},
              {title: 'Assistente AI documentale', tag: 'AI', result: '-60% richieste helpdesk'},
            ].map((p, i) => (
              <div key={i} className="group p-5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
                <div className="text-xs uppercase tracking-wide text-gray-500">{p.tag}</div>
                <div className="mt-1 font-semibold">{p.title}</div>
                <div className="mt-6 h-28 rounded-lg bg-gradient-to-tr from-gray-100 to-gray-50" />
                <div className="mt-4 text-sm text-gray-600">Risultato: <span className="font-medium text-gray-900">{p.result}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl p-8 md:p-10 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Parliamo del tuo progetto</h3>
              <p className="mt-1 text-white/80">Ricevi una consulenza gratuita entro 24 ore.</p>
            </div>
            <button onClick={() => scrollTo('contatti')} className="px-5 py-3 rounded-md bg-white text-blue-700 font-medium hover:bg-blue-50">Richiedi consulenza</button>
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Contatti</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">Sede a Bolzano. Lavoriamo con aziende in Italia, Alto Adige e DACH.</p>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <form onSubmit={(e) => e.preventDefault()} className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nome e Cognome</label>
                  <input required type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input required type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="mario@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Messaggio</label>
                  <textarea rows="4" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Raccontaci del tuo progetto" />
                </div>
                <div className="flex items-center gap-3">
                  <a href="mailto:hello@agenzia-bz.it" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Invia Email</a>
                  <a href="/test" className="text-sm text-gray-600 hover:text-blue-600">Verifica sistema</a>
                </div>
              </div>
            </form>
            <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Sede</div>
                  <div className="font-medium">Bolzano, Alto Adige</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a href="mailto:hello@agenzia-bz.it" className="font-medium text-blue-700 hover:underline">hello@agenzia-bz.it</a>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Telefono</div>
                  <div className="font-medium">+39 0471 000000</div>
                </div>
                <div className="pt-2 text-sm text-gray-600">Parliamo italiano, tedesco e inglese.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Flames Agency. Tutti i diritti riservati.</div>
          <div className="flex items-center gap-4">
            <button onClick={() => scrollTo('servizi')} className="hover:text-gray-800">Servizi</button>
            <button onClick={() => scrollTo('processo')} className="hover:text-gray-800">Processo</button>
            <button onClick={() => scrollTo('progetti')} className="hover:text-gray-800">Progetti</button>
            <a href="#contatti" className="hover:text-gray-800">Contatti</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, points, color = 'blue' }) {
  const colorMap = {
    blue: 'from-blue-50 to-blue-100',
    indigo: 'from-indigo-50 to-indigo-100',
    violet: 'from-violet-50 to-violet-100',
    cyan: 'from-cyan-50 to-cyan-100',
  }
  return (
    <div className={`p-6 rounded-xl border border-gray-100 bg-gradient-to-b ${colorMap[color]} hover:shadow-md transition` }>
      <div className="font-semibold text-gray-900">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
