const GROUPS = [
  {
    label: 'AI & Machine Learning',
    items: ['Machine Learning', 'GenAI', 'Predictive Modeling', 'Process Mining', 'Computer Vision'],
  },
  {
    label: 'Product & Delivery',
    items: ['Product Ownership', 'Roadmapping & Backlog', 'Agile / Scrum Master', 'Cross-sector Stakeholder Alignment'],
  },
  {
    label: 'AI Ecosystem',
    items: ['API Design', 'Model Deployment', 'Cloud Infrastructure', 'Architecture Collaboration'],
  },
  {
    label: 'Applied & Human',
    items: ['Storytelling', 'Strategic Thinking', 'Customer-Focused Discovery', 'Mentoring', 'Business Analysis'],
  },
];

const CERTS = [
  { name: 'Professional Scrum Product Owner (PSPO)', year: '2024' },
  { name: 'Generative AI with Large Language Models', year: '2026' },
  { name: 'Product Management: Building AI-Powered Products', year: '2025' },
  { name: 'Lean Six Sigma Green Belt', year: '2015' },
  { name: 'Apache Spark for Machine Learning & Data Science', year: '2017' },
];

const LANGUAGES = ['English', 'Chinese (native)', 'Dutch'];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <p className="eyebrow mb-4">Skills</p>
        <h2 className="mb-14 font-display text-2xl font-normal text-ink sm:text-3xl">
          The stack behind the delivery.
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group) => (
            <div key={group.label} className="border-t border-border pt-5">
              <p className="mb-4 eyebrow">{group.label}</p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[13.5px] text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="border-t border-border pt-5">
            <p className="mb-5 eyebrow">Certificates</p>
            <ul className="space-y-3">
              {CERTS.map((cert) => (
                <li key={cert.name} className="flex items-center justify-between gap-4 text-[13.5px]">
                  <span className="text-ink-muted">{cert.name}</span>
                  <span className="shrink-0 font-mono text-[11px] text-ink-faint">{cert.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border pt-5">
            <p className="mb-5 eyebrow">Languages</p>
            <ul className="space-y-2.5">
              {LANGUAGES.map((lang) => (
                <li key={lang} className="text-[13.5px] text-ink-muted">
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
