import Link from "next/link";
import { animals } from "@/lib/animals";
import { AnimalCard } from "@/components/animal-card";
import { PawMark } from "@/components/paw-mark";

export default function HomePage() {
  const featured = animals.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand/60 to-cream" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <p className="eyebrow">Santa Maria Valley · Central Coast, CA</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-bark md:text-7xl">
            A small place for <em className="italic text-terracotta">second chances</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-clay">
            We&apos;re a volunteer animal rescue out on the Central Coast, helping dogs
            and cats find their next chapter — one foster home at a time. No shelter,
            no staff. Just patience and a lot of good people.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/animals"
              className="rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-sand transition-colors hover:bg-clay"
            >
              Meet the animals
            </Link>
            <Link
              href="/foster"
              className="rounded-full border border-terracotta/40 px-7 py-3 text-sm font-semibold text-bark transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Become a foster
            </Link>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-y border-terracotta/15 bg-sand">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
          {[
            {
              stat: "One at a time",
              label: "We take in only what we can care for well.",
            },
            {
              stat: "Foster-based",
              label: "Every animal lives in a real home, never a kennel.",
            },
            {
              stat: "Self-funded",
              label: "We cover our own costs and never solicit donations.",
            },
          ].map((item) => (
            <div key={item.stat}>
              <p className="font-display text-2xl font-semibold text-terracotta">
                {item.stat}
              </p>
              <p className="mt-1 text-sm text-bark/75">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured animals */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Looking for homes</p>
            <h2 className="mt-3 font-display text-4xl font-medium text-bark">
              The animals in our care
            </h2>
          </div>
          <Link
            href="/animals"
            className="text-sm font-medium text-terracotta hover:text-clay"
          >
            See everyone →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((animal, i) => (
            <AnimalCard key={animal.slug} animal={animal} index={i} />
          ))}
        </div>
      </section>

      {/* How we work / self-funded */}
      <section id="how-we-work" className="border-t border-terracotta/15 bg-sand scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <p className="eyebrow">How we work</p>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-bark">
                Quietly funded, so the focus stays on the animals.
              </h2>
              <p className="mt-6 text-clay">
                Foxen Creek runs on a self-funded model. Our costs — vet care, food,
                supplies — were generously covered at the start by a handful of
                anonymous supporters, and we keep things small enough to stay
                self-sufficient.
              </p>
              <p className="mt-4 text-clay">
                That means{" "}
                <strong className="font-semibold text-bark">
                  we don&apos;t run donation drives or fundraisers
                </strong>
                . If you want to help, the most valuable things you can give are a
                foster home, a few hours of your time, or a share of an animal&apos;s
                post.
              </p>
              <Link
                href="/foster"
                className="mt-8 inline-flex rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-sand transition-colors hover:bg-clay"
              >
                Here&apos;s how to help
              </Link>
            </div>

            <ul className="space-y-5">
              {[
                {
                  n: "01",
                  t: "We meet the animal",
                  d: "Usually through county shelters or a call from someone who's overwhelmed. We take the ones who need a little extra time.",
                },
                {
                  n: "02",
                  t: "They go straight to foster",
                  d: "A real home, not a cage. Time to decompress, see a vet, and just be a dog or cat for a while.",
                },
                {
                  n: "03",
                  t: "We get them sorted",
                  d: "Vaccines, spay/neuter, and an honest read on who they are and what home suits them.",
                },
                {
                  n: "04",
                  t: "We find the right match",
                  d: "Adoption is about fit, not speed. We'd rather wait for the right home than rush the wrong one.",
                },
              ].map((step) => (
                <li
                  key={step.n}
                  className="flex gap-5 rounded-2xl border border-terracotta/15 bg-cream p-5"
                >
                  <span className="font-display text-2xl italic text-terracotta">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-bark">
                      {step.t}
                    </h3>
                    <p className="mt-1 text-sm text-clay">{step.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-bark px-8 py-16 text-center md:px-16">
          <PawMark className="mx-auto h-12 w-12 text-sun" />
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl font-medium leading-tight text-cream md:text-5xl">
            Want to be part of this?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sand/85">
            We&apos;re always looking for fosters, volunteers, and good people who
            know the Central Coast. No experience needed — just a soft spot and a
            spare room.
          </p>
          <Link
            href="/foster"
            className="mt-9 inline-flex rounded-full bg-sun px-8 py-3 text-sm font-semibold text-bark transition-colors hover:bg-sand"
          >
            Get involved
          </Link>
        </div>
      </section>
    </>
  );
}
