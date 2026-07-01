'use client';

import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import LiveClock from './LiveClock';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="focus-ring flex items-center gap-2.5">
          <Image
            src="/headshot.jpg"
            alt="Meng Dou"
            width={30}
            height={30}
            className="h-[30px] w-[30px] rounded-full border border-border object-cover"
            priority
          />
          <span className="font-display text-[15px] italic text-ink">Meng Dou</span>
        </a>

        <div className="hidden md:block">
          <LiveClock />
        </div>

        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring eyebrow link-underline pb-0.5 text-ink-muted hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="focus-ring hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2 font-mono text-[11.5px] tracking-wide text-bg transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Get in touch <span aria-hidden="true">&rarr;</span>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
