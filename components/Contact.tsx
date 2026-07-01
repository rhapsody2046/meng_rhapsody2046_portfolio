export default function Contact() {
  return (
    <>
      <section id="contact" className="relative flex min-h-[64vh] w-full items-center">
        <div className="photo-frame absolute inset-0">
          <img
            src="/photos/trail.jpg"
            alt="A hiking trail continuing down through green alpine slopes"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-content px-6 py-24 sm:px-10">
          <p className="eyebrow mb-6 text-[#EDE8DC]">Contact</p>
          <h2 className="max-w-2xl font-display text-3xl font-normal leading-tight text-[#F7F4EE] sm:text-4xl">
            Good models need good teams.
            <span className="italic"> Let&rsquo;s build something that ships.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="mailto:doumeng1988@gmail.com"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#F7F4EE] px-6 py-3 font-mono text-[12px] tracking-wide text-[#17140F] transition-opacity hover:opacity-85"
            >
              Get in touch <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="https://linkedin.com/in/doumengcarol"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring font-mono text-[12px] tracking-wide text-[#EDE8DC]/85 hover:text-[#F7F4EE]"
            >
              linkedin.com/in/doumengcarol
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-16 sm:px-10">
        <div className="mx-auto flex max-w-content flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg italic text-ink">Meng Dou</p>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-ink-muted">
              Senior Data Scientist &amp; AI Product Owner, based in the Eindhoven
              area, Netherlands.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-[13px] sm:flex sm:gap-16">
            <div>
              <p className="eyebrow mb-3">Reach me</p>
              <ul className="space-y-2 text-ink-muted">
                <li>
                  <a href="mailto:doumeng1988@gmail.com" className="link-underline pb-0.5 hover:text-ink">
                    doumeng1988@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+31625233660" className="link-underline pb-0.5 hover:text-ink">
                    +31 6 25 23 36 60
                  </a>
                </li>
                <li>Eindhoven area, NL</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Site</p>
              <ul className="space-y-2 text-ink-muted">
                <li><a href="#work" className="link-underline pb-0.5 hover:text-ink">Work</a></li>
                <li><a href="#approach" className="link-underline pb-0.5 hover:text-ink">Approach</a></li>
                <li><a href="#experience" className="link-underline pb-0.5 hover:text-ink">Experience</a></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Elsewhere</p>
              <ul className="space-y-2 text-ink-muted">
                <li>
                  <a
                    href="https://linkedin.com/in/doumengcarol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline pb-0.5 hover:text-ink"
                  >
                    LinkedIn &#8599;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-content border-t border-border pt-6">
          <p className="font-mono text-[11px] text-ink-faint">
            © {new Date().getFullYear()} Meng Dou. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
