export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="photo-frame relative flex min-h-[86vh] w-full items-end">
        <img
          src="/photos/sail-lake.jpg"
          alt="Sailing across open water toward the horizon, sunlight scattered across the waves"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto w-full max-w-content px-6 pb-16 pt-40 sm:px-10">
          <p className="eyebrow mb-5 text-[#EDE8DC]">
            Senior Data Scientist &amp; AI Product Owner &mdash; ASML
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-normal leading-[1.12] tracking-tight text-[#F7F4EE] sm:text-5xl lg:text-6xl">
            Thirteen years steering machine&nbsp;learning models
            <span className="italic"> from research bench to production line.</span>
          </h1>
          <p className="mt-7 max-w-lg text-[1.02rem] leading-relaxed text-[#EDE8DC]/90">
            I hold both the technical bar and the delivery roadmap &mdash; building the
            predictive models that keep complex equipment running, and the
            cross-sector teams that ship them.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="#work"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#F7F4EE] px-6 py-3 font-mono text-[12px] tracking-wide text-[#17140F] transition-opacity hover:opacity-85"
            >
              View case studies <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#intro" className="focus-ring font-mono text-[12px] tracking-wide text-[#EDE8DC]/80 hover:text-[#F7F4EE]">
              Explore &darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
