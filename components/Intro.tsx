export default function Intro() {
  return (
    <section id="intro" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 md:grid-cols-[0.55fr_1fr]">
          <p className="eyebrow">About</p>
          <div>
            <h2 className="font-display text-2xl font-normal leading-[1.3] tracking-tight text-ink sm:text-[2rem]">
              The gap between a working model and an adopted one is where most AI
              initiatives quietly fail.{' '}
              <span className="italic text-ink-muted">
                I spend my career closing that gap.
              </span>
            </h2>
            <p className="mt-8 max-w-2xl text-[1.02rem] leading-relaxed text-ink-muted">
              I started as a process-mining researcher, went deep into machine
              learning for industrial and clinical data, then moved into product
              ownership because the hardest part of AI was never the model &mdash; it
              was getting it adopted. At ASML I sit between data scientists,
              ML/software engineers, and cross-sector stakeholders, holding both
              the technical bar and the delivery roadmap for AI initiatives that
              touch equipment uptime across the fleet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
