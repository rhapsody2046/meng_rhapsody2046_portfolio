const PILLARS = [
  {
    title: 'Data-backed judgment',
    body: 'A model is only useful if I know when to trust its output. I stay close enough to the data and the deployment context to call that honestly, not just hand off a number.',
  },
  {
    title: 'Cross-sector fluency',
    body: 'I move between data scientists, engineers, group leads, and architects without losing precision in translation. That fluency is what turns a model into a shipped work package.',
  },
  {
    title: 'End-to-end ownership',
    body: 'From framing an ambiguous business problem to holding the backlog through delivery, I stay accountable for the same initiative start to finish, not just the modeling slice.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">How I work</p>
            <h2 className="max-w-xl font-display text-2xl font-normal leading-tight text-ink sm:text-3xl">
              The approach that makes it work.
            </h2>
          </div>
          <a href="#experience" className="focus-ring link-underline pb-0.5 font-mono text-[12px] text-ink-muted hover:text-ink">
            View my experience &rarr;
          </a>
        </div>

        <div className="grid gap-0 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`border-t border-border py-8 pr-8 ${i > 0 ? 'md:border-l md:pl-8' : ''}`}
            >
              <p className="mb-4 font-mono text-[12px] text-ink-faint">0{i + 1}</p>
              <h3 className="font-display text-lg font-normal text-ink">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
