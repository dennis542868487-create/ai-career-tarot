import Link from "next/link";
import { CardDrawForm } from "@/components/card-draw-form";

export default async function DrawPage({
  searchParams,
}: {
  searchParams: Promise<{
    question?: string;
    situation?: string;
    concern?: string;
    hope?: string;
  }>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#231433,_#100b18_48%,_#09060f_100%)] px-5 py-8 text-stone-100">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <Link
          href={`/reading/new?question=${encodeURIComponent(params.question ?? "")}`}
          className="mb-6 text-sm text-stone-400"
        >
          ← Back
        </Link>

        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.36)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">Draw your cards</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight">Start with the full deck, then choose the 3 cards that call to you.</h1>
          <p className="mt-3 text-sm leading-7 text-stone-300">
            We use the full deck, shuffle it, lay out 9 candidate cards, and let your selection order define the spread.
          </p>
        </div>

        <CardDrawForm
          question={params.question}
          situation={params.situation}
          concern={params.concern}
          hope={params.hope}
        />
      </div>
    </main>
  );
}
