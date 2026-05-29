import Link from "next/link";
import { PawMark } from "./paw-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-terracotta/20 bg-sand">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-terracotta">
                <PawMark className="h-6 w-6" />
              </span>
              <span className="font-display text-lg font-semibold text-bark">
                Foxen Creek Rescue
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-clay">
              A small place for second chances on the Central Coast. Foster-based,
              self-funded, and built one animal at a time.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-3">Explore</h3>
            <ul className="space-y-2 text-sm text-bark/80">
              <li>
                <Link href="/animals" className="hover:text-terracotta">
                  Adoptable animals
                </Link>
              </li>
              <li>
                <Link href="/foster" className="hover:text-terracotta">
                  Foster &amp; volunteer
                </Link>
              </li>
              <li>
                <Link href="/#how-we-work" className="hover:text-terracotta">
                  How we work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-3">Reach us</h3>
            <ul className="space-y-2 text-sm text-bark/80">
              <li>
                <a
                  href="mailto:hello@foxencreekrescue.org"
                  className="hover:text-terracotta"
                >
                  hello@foxencreekrescue.org
                </a>
              </li>
              <li>Santa Maria Valley, CA</li>
              <li>DMs open for fosters &amp; vets</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-terracotta/15 pt-6 text-[0.625rem] uppercase tracking-[0.35em] text-terracotta sm:flex-row">
          <span>Foxen Creek Rescue · Central Coast · Est. 2026</span>
          <span className="tracking-[0.2em] normal-case text-clay/70">
            Self-funded. We don&apos;t solicit donations.
          </span>
        </div>
      </div>
    </footer>
  );
}
