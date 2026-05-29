import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { animals, getAnimal, statusLabels } from "@/lib/animals";
import { PawMark } from "@/components/paw-mark";

export function generateStaticParams() {
  return animals.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const animal = getAnimal(slug);
  if (!animal) return { title: "Animal not found" };
  return {
    title: animal.name,
    description: animal.oneLiner,
  };
}

export default async function AnimalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const animal = getAnimal(slug);
  if (!animal) notFound();

  return (
    <article className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <Link
        href="/animals"
        className="text-sm font-medium text-terracotta hover:text-clay"
      >
        ← All animals
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-start">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-sun/70 to-terracotta/50">
          <PawMark className="h-28 w-28 text-cream/70" />
          <span className="absolute bottom-4 left-4 rounded-full bg-cream/80 px-3 py-1 text-[0.625rem] font-medium uppercase tracking-wider text-clay">
            Photo coming soon
          </span>
        </div>

        <div>
          <span className="inline-flex rounded-full bg-bark/10 px-3 py-1 text-xs font-semibold text-bark">
            {statusLabels[animal.status]}
          </span>
          <h1 className="mt-4 font-display text-5xl font-medium text-bark">
            {animal.name}
          </h1>
          <p className="mt-2 text-lg text-clay">{animal.oneLiner}</p>

          <dl className="mt-7 grid grid-cols-2 gap-y-4 border-y border-terracotta/15 py-5 text-sm">
            <div>
              <dt className="eyebrow">Species</dt>
              <dd className="mt-1 text-bark">{animal.species}</dd>
            </div>
            <div>
              <dt className="eyebrow">Age</dt>
              <dd className="mt-1 text-bark">{animal.age}</dd>
            </div>
            <div className="col-span-2">
              <dt className="eyebrow">Currently</dt>
              <dd className="mt-1 text-bark">{animal.location}</dd>
            </div>
          </dl>

          <h2 className="mt-7 font-display text-xl font-semibold text-bark">
            What we know so far
          </h2>
          <p className="mt-2 text-clay">{animal.story}</p>

          <h2 className="mt-6 font-display text-xl font-semibold text-bark">
            Good with
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {animal.goodWith.map((g) => (
              <span
                key={g}
                className="rounded-full bg-sand px-3 py-1 text-sm text-bark"
              >
                {g}
              </span>
            ))}
          </div>

          <div className="mt-9 rounded-2xl bg-bark p-6">
            <p className="font-display text-lg text-cream">
              Interested in {animal.name}?
            </p>
            <p className="mt-1 text-sm text-sand/85">
              Send us a note and we&apos;ll talk through whether it&apos;s the
              right fit. No pressure, no rush.
            </p>
            <a
              href={`mailto:hello@foxencreekrescue.org?subject=About ${animal.name}`}
              className="mt-4 inline-flex rounded-full bg-sun px-6 py-2.5 text-sm font-semibold text-bark transition-colors hover:bg-sand"
            >
              Ask about {animal.name}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
