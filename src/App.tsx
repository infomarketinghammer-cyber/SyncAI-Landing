import { useState } from 'react'

const Sparkle = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
    <path
      d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"
      fill="currentColor"
    />
  </svg>
)

type Project = {
  serialNumber: number
  name: string
  website?: string
}

const projects: Project[] = [
  {
    serialNumber: 1,
    name: 'HR Management System',
    website: 'https://hrmanagement1.ai.studio/',
  },
  {
    serialNumber: 2,
    name: 'MOM Tool',
    website: 'https://mom-creator-six.vercel.app',
  },
  {
    serialNumber: 3,
    name: 'Document Intelligence',
    website: 'https://docscomparisontool.vercel.app/dashboard',
  },
  {
    serialNumber: 4,
    name: 'Task Management',
    website: 'https://taskmanagement.ai.studio',
  },
  {
    serialNumber: 5,
    name: 'Market Research Tool',
    website: 'https://researchdashboard1.ai.studio',
  },
  {
    serialNumber: 6,
    name: 'Facility Management',
    website: 'https://facilitymanagement.ai.studio/',
  },
  {
    serialNumber: 7,
    name: 'AI Forgery',
    website: 'https://ai-content-detector-eta.vercel.app/login',
  },
  {
    serialNumber: 8,
    name: 'Sales CRM',
    website: 'https://commonsalescrm.ai.studio',
  },
  {
    serialNumber: 9,
    name: 'Executive Dashboard',
    website: 'https://dhyeyabusinessexecutivedashboard.ai.studio',
  },
  {
    serialNumber: 10,
    name: 'Legal Tool',
    website: 'https://lexicislegal.ai.studio/',
  },
  {
    serialNumber: 11,
    name: 'CashFlow',
    website: 'https://cashflow-ten-omega.vercel.app/',
  },
  {
    serialNumber: 12,
    name: 'Search Engine',
    website: 'https://ai-search-os.ai.studio/',
  },
  {
    serialNumber: 13,
    name: 'Inventory Management',
    website: 'https://inventory-managementt-tracker.ai.studio/',
  },
  {
    serialNumber: 14,
    name: 'Clinical Management',
  },
  {
    serialNumber: 15,
    name: 'Compliance Dashboard',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const [thumbnailUnavailable, setThumbnailUnavailable] = useState(false)
  const thumbnail = `/${encodeURIComponent(project.name)}.png`
  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-100">
        {!thumbnailUnavailable ? (
          <img
            src={thumbnail}
            alt={`${project.name} thumbnail`}
            className="size-full object-cover transition duration-500 group-hover:scale-105"
            onError={() => setThumbnailUnavailable(true)}
          />
        ) : (
          <div className="grid size-full place-items-center">
            <div className="grid size-16 place-items-center rounded-2xl border border-white/80 bg-white/70 text-[#023b77] shadow-lg shadow-cyan-200/40">
              <Sparkle />
            </div>
          </div>
        )}
      </div>
    </>
  )

  const className =
    'group block overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-100/60'

  return project.website ? (
    <a
      className={className}
      href={project.website}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${project.name} website`}
    >
      {content}
    </a>
  ) : (
    <article className={className}>{content}</article>
  )
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#123049]">
      <header className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4 sm:px-10 lg:px-12">
        <img
          src="/SyncAI%20Logo.jpeg"
          alt="SyncAI Consultancy Pvt. Ltd."
          className="h-20 w-full max-w-48 justify-self-start object-cover"
        />
        <p className="col-start-2 row-start-1 whitespace-nowrap bg-gradient-to-r from-[#023b77] to-[#039583] bg-clip-text text-sm font-semibold tracking-tight text-transparent sm:text-lg">
          Custom-Developed AI Solutions
        </p>
      </header>

      <section
        id="about"
        className="hero-grid relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 md:grid-cols-[0.75fr_1.25fr] md:gap-8 lg:min-h-[710px] lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12"
      >
        <div className="pointer-events-none absolute right-0 top-1/2 -z-0 size-[440px] -translate-y-1/2 rounded-full bg-teal-200/35 blur-[100px] sm:size-[600px]" />
        <div className="relative w-full text-left">
          <h1 className="text-balance text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            SyncAI
            <span className="block bg-gradient-to-r from-[#023b77] to-[#039583] bg-clip-text pb-2 text-transparent">
              Consultancy
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
            AI Projects
          </p>
        </div>

        <aside className="relative">
          <div className="rounded-[2rem] border-2 border-[#159477] bg-white/95 p-6 shadow-[0_24px_70px_-38px_rgba(2,59,119,0.35)] sm:p-8">
            <div className="flex items-center gap-4">
              <img
                src="/Dr.%20Amey%20Pangarkar.jpeg"
                alt="Dr. Amey Pangarkar"
                className="size-24 shrink-0 rotate-[3deg] rounded-full object-cover ring-2 ring-[#159477] ring-offset-2 sm:size-28"
              />
              <h2 className="bg-gradient-to-r from-[#087f88] to-[#12a568] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
                Dr. Amey Pangarkar
              </h2>
            </div>
            <p className="mt-2 text-base font-semibold text-slate-600 sm:text-lg">
              Director, SyncAI Consultancy Pvt. Ltd.
            </p>
            <p className="mt-6 border-l-4 border-[#159477] pl-5 text-lg leading-8 text-slate-700 sm:text-xl">
              This audit maps your daily workflow to a library of 1,250 proven AI
              use cases across 25 industries, so you know exactly where AI can
              save your team time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-[#14577a]">
                AI strategy for businesses
              </span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2">
            <div className="min-w-0 rounded-2xl bg-gradient-to-br from-[#023b77] to-[#039583] p-2 text-white sm:p-3">
              <p className="text-base font-extrabold leading-tight sm:text-lg">30–90 min</p>
              <p className="mt-1 text-xs leading-4 text-white/90">saved per employee, every day</p>
            </div>
            <div className="min-w-0 rounded-2xl bg-gradient-to-br from-[#023b77] to-[#039583] p-2 text-white sm:p-3">
              <p className="text-base font-extrabold leading-tight sm:text-lg">Higher</p>
              <p className="mt-1 text-xs leading-4 text-white/90">productivity from the same team</p>
            </div>
            <div className="min-w-0 rounded-2xl bg-gradient-to-br from-[#023b77] to-[#039583] p-2 text-white sm:p-3">
              <p className="text-base font-extrabold leading-tight sm:text-lg">Fewer</p>
              <p className="mt-1 text-xs leading-4 text-white/90">manual, repetitive, error-prone tasks</p>
            </div>
            <div className="min-w-0 rounded-2xl bg-gradient-to-br from-[#023b77] to-[#039583] p-2 text-white sm:p-3">
              <p className="text-base font-extrabold leading-tight sm:text-lg">Day 1</p>
              <p className="mt-1 text-xs leading-4 text-white/90">clear first steps, ranked by impact</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="projects" className="mx-auto max-w-7xl scroll-mt-8 px-6 pb-24 sm:px-10 lg:px-12">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          AI Projects
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {projects.map((project) => (
            <ProjectCard key={project.serialNumber} project={project} />
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <span className="font-semibold tracking-tight text-[#123049]">SyncAI Consultancy</span>
          <span>AI Projects</span>
        </div>
      </footer>
    </main>
  )
}

export default App
