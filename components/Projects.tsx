const CASES = [
  {
    index: '01',
    status: 'Live in production',
    role: 'Data Scientist',
    title: 'Predictive failure detection & KPI health monitoring',
    org: 'ASML',
    photo: '/photos/summit.jpg',
    photoAlt: 'Reaching a mountain pass marker at 2685 metres',
    description:
      'Unscheduled downtime on high-value lithography systems was discovered reactively. I built clustering-based failure-mode detection and time-series KPI health monitors that surface degradation early enough for engineers to intervene before an unscheduled stop.',
    impact: [
      'Flagged degrading equipment KPIs roughly 1–2 weeks ahead of threshold breach',
      'Cut manual failure-mode triage time for the monitored fleet by an estimated 30%',
      'Model output filed as a granted patent (2022PF00198)',
    ],
    tags: ['Machine Learning', 'Predictive Maintenance', 'Cloud Deployment'],
  },
  {
    index: '02',
    status: 'Shipped · 6 initiatives',
    role: 'AI Product Owner & Scrum Master',
    title: 'Owning a portfolio of AI products across sectors',
    org: 'ASML',
    photo: '/photos/trail.jpg',
    photoAlt: 'A hiking trail winding down through an alpine valley',
    description:
      'AI initiatives spanning SPD, AI4DDF, DfS200, TPMS predictive use cases, and Equipment Edge each needed a single accountable owner. I held the vision, roadmap, and backlog across a multidisciplinary Agile team, aligning group leads, project leads, systems engineers, and architects on scope and value.',
    impact: [
      'Co-owned end-to-end delivery of 6 AI initiatives across distinct business sectors',
      'Kept cross-functional teams of 6–10 aligned through iterative, dynamic-scope delivery',
      'Became the go-to translator between business stakeholders and technical work packages',
    ],
    tags: ['Product Ownership', 'Agile / Scrum', 'Roadmapping'],
  },
  {
    index: '03',
    status: 'Validated · GTM in progress',
    role: 'Startup Co-founder, Product',
    title: 'Neutron-based non-destructive cargo detection',
    org: 'HighTechXL × Elpis',
    photo: '/photos/alps-valley.jpg',
    photoAlt: 'A quiet alpine valley with a mountain stream and distant peaks',
    description:
      "Cargo security screening relies on inspection methods that are slow, destructive, or both. As product co-founder in ASML's startup program, I partnered with deep-tech spinout Elpis to shape a neutron-energy detection device, running customer discovery and building the investor narrative from scratch.",
    impact: [
      'Built and pitched the market validation case for a 0-to-1 hardware product',
      'Defined the initial go-to-market narrative for the cargo-detection use case',
      'Delivered the pitch that carried the venture through the program milestone review',
    ],
    tags: ['0-to-1 Product', 'Market Validation', 'Pitching'],
  },
  {
    index: '04',
    status: 'Research → IP filed',
    role: 'Data Scientist',
    title: 'AI for digital pathology diagnostics',
    org: 'Philips',
    photo: '/photos/sail-canal.jpg',
    photoAlt: 'Sailing along a narrow canal between open fields',
    description:
      'Pathologists were spending disproportionate time manually reading whole-slide images to detect cancer tissue. I developed ML models for cancer tissue detection and co-built a workflow aimed at shortening pathologist review time, contributing directly to IP generation.',
    impact: [
      'Research published on WSI-based workflows shortening pathologist reading time',
      '2 patents filed on mathematical modeling of signaling-pathway activity',
      'Also shipped consumer-facing ML analysis for Philips Hue product insights',
    ],
    tags: ['Computer Vision', 'Healthcare AI', 'Research'],
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">Featured work</p>
            <h2 className="max-w-xl font-display text-2xl font-normal leading-tight text-ink sm:text-3xl">
              Case studies, not a task list.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink-muted">
            Four projects, four angles on the same pattern: a real operational
            problem, a decision that moved it, a result someone downstream could
            act on.
          </p>
        </div>

        <div className="hairline" />

        {CASES.map((c) => (
          <article
            key={c.title}
            className="grid gap-8 border-b border-border py-14 md:grid-cols-[80px_1fr_1fr] md:gap-12"
          >
            <div className="font-mono text-[13px] text-ink-faint">{c.index}</div>

            <div className="order-3 md:order-2">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img src={c.photo} alt={c.photoAlt} className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="order-2 md:order-3">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="eyebrow text-signal-moss">{c.status}</span>
                <span className="font-mono text-[11px] text-ink-faint">{c.org}</span>
              </div>
              <p className="mb-1 font-mono text-[12px] text-ink-faint">{c.role}</p>
              <h3 className="font-display text-xl font-normal leading-snug text-ink sm:text-[1.4rem]">
                {c.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-muted">
                {c.description}
              </p>
              <ul className="mt-5 space-y-2">
                {c.impact.map((line) => (
                  <li key={line} className="flex gap-2 text-[13.5px] text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-moss" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[10.5px] text-ink-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
