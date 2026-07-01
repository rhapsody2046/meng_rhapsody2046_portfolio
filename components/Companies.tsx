const COMPANIES = [
  'ASML',
  'Philips',
  'Capgemini Engineering',
  'HighTechXL',
  'Itility',
  'Tsinghua University',
  'TU Eindhoven',
  'Xiamen University',
];

export default function Companies() {
  return (
    <section className="border-y border-border px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-content">
        <p className="eyebrow mb-8">Where I&rsquo;ve worked &amp; studied</p>
        <div className="flex flex-wrap gap-x-12 gap-y-5">
          {COMPANIES.map((name) => (
            <span key={name} className="font-display text-lg italic text-ink-faint">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
