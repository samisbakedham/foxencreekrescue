import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foster & Volunteer",
  description:
    "How to foster or volunteer with Foxen Creek Rescue. We're self-funded and don't take donations — your time and a spare room are what help most.",
};

const fosterFacts = [
  {
    t: "We provide everything",
    d: "Food, litter, crates, supplies, and all vet care. You provide the space and the company.",
  },
  {
    t: "Any length works",
    d: "A weekend, a few weeks, or until adoption. We match animals to what you can offer.",
  },
  {
    t: "You're never alone",
    d: "Someone to text at 2am when you're worried. We've all been there.",
  },
  {
    t: "No experience needed",
    d: "If you've loved a pet, you can foster. We'll walk you through the rest.",
  },
];

const volunteerWays = [
  "Drive an animal to a vet appointment",
  "Take adoption-day photos",
  "Help with a home visit or meet-and-greet",
  "Share posts so the right adopter sees them",
  "Lend a skill — vetting, training, web, design",
];

export default function FosterPage() {
  return (
    <>
      <section className="border-b border-terracotta/15 bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="eyebrow">Get involved</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-medium leading-tight text-bark md:text-6xl">
            The most useful thing you can give isn&apos;t money.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-clay">
            Foxen Creek is self-funded — we don&apos;t run fundraisers and we
            don&apos;t take donations. What we always need is people: fosters,
            volunteers, and folks who know the Central Coast.
          </p>
        </div>
      </section>

      {/* Self-funded explainer */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-3xl border border-terracotta/20 bg-cream p-8 md:p-12">
          <p className="eyebrow">Why we don&apos;t ask for donations</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2 md:gap-12">
            <p className="font-display text-2xl leading-snug text-bark">
              We run on a self-funded, self-sufficient model — and we intend to
              keep it that way.
            </p>
            <div className="space-y-4 text-clay">
              <p>
                Our costs were generously covered at the outset by a small group of
                anonymous supporters. We keep our intake small on purpose so we can
                stay self-sufficient without fundraising drives.
              </p>
              <p>
                So if you came here to donate — thank you, truly, but there&apos;s no
                donate button to find. Put that good will toward fostering, an hour
                of your time, or simply sharing an animal&apos;s story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fostering */}
      <section className="border-y border-terracotta/15 bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="eyebrow">Fostering</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-bark">
            Open up a spare room
          </h2>
          <p className="mt-3 max-w-xl text-clay">
            Fostering is the single most valuable thing you can do. It&apos;s how
            every animal here gets a real home instead of a kennel.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {fosterFacts.map((f) => (
              <div
                key={f.t}
                className="rounded-2xl border border-terracotta/15 bg-cream p-6"
              >
                <h3 className="font-display text-xl font-semibold text-bark">
                  {f.t}
                </h3>
                <p className="mt-2 text-sm text-clay">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <p className="eyebrow">Volunteering</p>
            <h2 className="mt-3 font-display text-4xl font-medium text-bark">
              A few hours goes a long way
            </h2>
            <p className="mt-3 text-clay">
              Can&apos;t foster right now? There&apos;s plenty of other ways to be
              useful. Most of rescue is just people showing up.
            </p>
          </div>
          <ul className="space-y-3">
            {volunteerWays.map((w) => (
              <li
                key={w}
                className="flex items-start gap-3 rounded-xl bg-sand px-5 py-3 text-bark"
              >
                <span className="mt-0.5 text-terracotta">—</span>
                <span className="text-sm">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="rounded-3xl bg-bark px-8 py-14 text-center md:px-16">
          <p className="eyebrow text-sun">Reach out</p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-4xl font-medium leading-tight text-cream">
            Tell us a little about you
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sand/85">
            Email is the easiest way to reach us. Let us know whether you&apos;re
            thinking about fostering, volunteering, or adopting — and roughly where
            on the Central Coast you are.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@foxencreekrescue.org?subject=I'd like to help"
              className="rounded-full bg-sun px-8 py-3 text-sm font-semibold text-bark transition-colors hover:bg-sand"
            >
              hello@foxencreekrescue.org
            </a>
            <span className="text-sm text-sand/70">
              Santa Maria · Orcutt · Lompoc · Santa Barbara
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
