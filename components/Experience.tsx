const ROLES = [
  {
    period: 'Feb 2019 — Present',
    title: 'Data Scientist & AI Product Owner',
    org: 'ASML, Veldhoven',
    bullets: [
      'Own product vision and backlog for AI initiatives spanning failure prediction, KPI health monitoring, and equipment-edge intelligence.',
      'Lead multidisciplinary Agile teams — DS, ML/data engineering, IT/software/cloud, frontend — as both Product Owner and Scrum Master.',
      'Partner directly with group leads, project leads, systems engineers, and architects to turn ambiguous business needs into scoped technical work packages.',
    ],
  },
  {
    period: 'Sep 2025 — Jan 2026',
    title: 'Startup Co-founder (ASML × HighTechXL program)',
    org: 'HighTechXL, Veldhoven',
    bullets: [
      'Joined as product co-founder on a neutron-energy non-destructive detection venture with deep-tech partner Elpis, targeting the cargo-inspection market.',
      'Led market validation and pitch narrative for a 0-to-1 hardware product under program milestones.',
    ],
  },
  {
    period: 'Sep 2014 — Jan 2019',
    title: 'Senior Data Specialist',
    org: 'Capgemini Engineering, Eindhoven',
    bullets: [
      'Sat on the pre-sales team designing customized analytics solutions and rapid prototypes for clients including Océ, TP Vision, Croon, and Philips.',
      'Delivered data and process-mining solutions that surfaced actionable operational insights for client teams.',
      'Mentored junior data scientists, building the team\u2019s process-mining and analytics capability.',
    ],
  },
  {
    period: 'Feb 2015 — Jan 2019',
    title: 'Data Scientist (concurrent engagement)',
    org: 'Philips, Eindhoven',
    bullets: [
      'Built ML-driven product insights for Philips Hue, presented directly to product and business stakeholders.',
      'Developed cancer-tissue detection models for digital pathology, contributing to 2 filed patents on signaling-pathway modeling.',
    ],
  },
  {
    period: 'Aug 2013 — Aug 2014',
    title: 'IT Consultant — Data Scientist',
    org: 'Itility, Eindhoven',
    bullets: [
      'Delivered the "FlexPod Capacity Management" application as a year-long assignment inside ASML, supporting infrastructure capacity monitoring and optimization.',
      'Worked across log management, metrics analysis, and application development on an Infrastructure-as-a-Service platform.',
    ],
  },
  {
    period: '2010 — 2013',
    title: 'Earlier: Process Mining Research & Web Analytics',
    org: 'PanguSo Search Engine, Beijing · Tsinghua University',
    bullets: [
      'Built a process-mining-based user-behavior analysis system for a live search engine, translating findings into product enhancements.',
      'Researched process mining as a visiting researcher at TU Eindhoven, and co-translated the Chinese edition of a foundational process-mining textbook.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <p className="eyebrow mb-4">Experience</p>
        <h2 className="mb-16 font-display text-2xl font-normal text-ink sm:text-3xl">
          Thirteen years, one throughline.
        </h2>

        {ROLES.map((role) => (
          <div key={role.title + role.period} className="grid gap-3 border-t border-border py-9 md:grid-cols-[200px_1fr]">
            <p className="font-mono text-[12px] text-ink-faint">{role.period}</p>
            <div>
              <h3 className="font-display text-lg font-normal text-ink">{role.title}</h3>
              <p className="mb-3 text-[13px] italic text-ink-muted">{role.org}</p>
              <ul className="space-y-2">
                {role.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-[14px] leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-moss" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
