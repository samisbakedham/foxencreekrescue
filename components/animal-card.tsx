import Link from "next/link";
import { type Animal, statusLabels } from "@/lib/animals";
import { PawMark } from "./paw-mark";

const statusStyles: Record<Animal["status"], string> = {
  available: "bg-terracotta text-sand",
  pending: "bg-sun text-bark",
  "in-foster": "bg-bark/10 text-bark",
};

const portraitTints = [
  "from-sun/70 to-terracotta/50",
  "from-sand-deep to-sun/50",
  "from-terracotta/40 to-clay/50",
  "from-sun/50 to-sand-deep",
];

export function AnimalCard({ animal, index = 0 }: { animal: Animal; index?: number }) {
  return (
    <Link
      href={`/animals/${animal.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-terracotta/15 bg-cream transition-all hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-lg hover:shadow-bark/5"
    >
      <div
        className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${
          portraitTints[index % portraitTints.length]
        }`}
      >
        <PawMark className="h-16 w-16 text-cream/70 transition-transform group-hover:scale-110" />
        <span className="absolute bottom-3 left-3 rounded-full bg-cream/80 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-wider text-clay">
          Photo coming soon
        </span>
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-[0.6875rem] font-semibold ${
            statusStyles[animal.status]
          }`}
        >
          {statusLabels[animal.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold text-bark">
            {animal.name}
          </h3>
          <span className="text-xs font-medium uppercase tracking-wider text-terracotta">
            {animal.species}
          </span>
        </div>
        <p className="mt-1 text-sm text-clay">{animal.oneLiner}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-bark/60">
          <span>{animal.age}</span>
          <span>·</span>
          <span>{animal.location}</span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terracotta">
          Meet {animal.name}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
