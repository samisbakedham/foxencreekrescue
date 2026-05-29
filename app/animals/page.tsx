import type { Metadata } from "next";
import Link from "next/link";
import { animals } from "@/lib/animals";
import { AnimalCard } from "@/components/animal-card";

export const metadata: Metadata = {
  title: "Adoptable animals",
  description:
    "Meet the dogs and cats currently in foster care with Foxen Creek Rescue on the Central Coast.",
};

export default function AnimalsPage() {
  return (
    <>
      <section className="border-b border-terracotta/15 bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="eyebrow">In our care</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-medium leading-tight text-bark md:text-6xl">
            Meet the animals
          </h1>
          <p className="mt-5 max-w-xl text-lg text-clay">
            Every one of them is living in a foster home right now. Some are ready
            for adoption, some need a little more time. We&apos;ll introduce them
            honestly — names, ages, quirks and all.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {animals.map((animal, i) => (
            <AnimalCard key={animal.slug} animal={animal} index={i} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-terracotta/30 bg-cream p-8 text-center">
          <p className="font-display text-2xl text-bark">
            Don&apos;t see the right one yet?
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-clay">
            New animals come through often, and the right match is worth waiting
            for. Tell us what you&apos;re looking for and we&apos;ll keep you in mind.
          </p>
          <Link
            href="/foster"
            className="mt-6 inline-flex rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-sand transition-colors hover:bg-clay"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
