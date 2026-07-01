const EDUCATION = [
  {
    period: '2010 — 2013',
    title: 'M.Sc. Computer Science',
    org: 'Tsinghua University, Beijing',
  },
  {
    period: '2012 — 2013',
    title: 'Visiting Researcher, Process Mining',
    org: 'Eindhoven University of Technology',
  },
  {
    period: '2011',
    title: 'HCI Summer Program — 1st place, product design competition',
    org: 'Stanford University',
  },
  {
    period: '2006 — 2010',
    title: 'B.Sc. Computer Science',
    org: 'Xiamen University',
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <p className="eyebrow mb-4">Education &amp; formation</p>
        <h2 className="mb-14 font-display text-2xl font-normal text-ink sm:text-3xl">
          Where the thinking started.
        </h2>
        <div>
          {EDUCATION.map((item) => (
            <div
              key={item.title}
              className="grid gap-2 border-t border-border py-6 md:grid-cols-[200px_1fr]"
            >
              <span className="font-mono text-[12px] text-ink-faint">{item.period}</span>
              <div>
                <p className="font-display text-[1.05rem] font-normal text-ink">{item.title}</p>
                <p className="mt-1 text-[13.5px] italic text-ink-muted">{item.org}</p>
              </div>
            </div>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
