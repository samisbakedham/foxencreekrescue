import Link from "next/link";
import { PawMark } from "@/components/paw-mark";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-28 text-center">
      <PawMark className="h-14 w-14 text-terracotta" />
      <h1 className="mt-6 font-display text-5xl font-medium text-bark">
        Off the trail
      </h1>
      <p className="mt-4 text-clay">
        We couldn&apos;t find that page. It may have moved, or never existed.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-sand transition-colors hover:bg-clay"
      >
        Back home
      </Link>
    </div>
  );
}
