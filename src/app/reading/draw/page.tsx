import Link from "next/link";
import { spreadPositions, tarotCards } from "@/lib/tarot";

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
  const cards = tarotCards.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#0b0711] px-5 py-8 text-stone-100">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <Link
          href={`/reading/new?question=${encodeURIComponent(params.question ?? "")}`}
          className="mb-6 text-sm text-stone-400"
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-semibold">Draw your cards</h1>
        <p className="mt-3 text-sm leading-7 text-stone-300">
          For this MVP, card selection is a guided mock flow. We&apos;ll wire true interactive draws next.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {cards.map((card, index) => {
            const selectedCards = [...cards.slice(index, index + 3), ...cards.slice(0, Math.max(0, index - 3))]
              .slice(0, 3)
              .map((item) => item.id)
              .join(",");

            return (
              <Link
                key={card.id}
                href={`/reading/result?question=${encodeURIComponent(params.question ?? "")}&situation=${encodeURIComponent(params.situation ?? "")}&concern=${encodeURIComponent(params.concern ?? "")}&hope=${encodeURIComponent(params.hope ?? "")}&cards=${encodeURIComponent(selectedCards)}`}
                className="group rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))] p-4 transition hover:border-amber-200/40"
              >
                <div className="flex aspect-[3/4] flex-col justify-between rounded-[18px] border border-dashed border-white/15 bg-black/20 p-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-stone-400">Card back</span>
                  <span className="text-center text-2xl text-amber-200 transition group-hover:scale-110">✦</span>
                  <span className="text-xs text-stone-500">Tap to reveal a spread</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-base font-medium text-white">Spread structure</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
            {spreadPositions.map((position, index) => (
              <div key={position.id}>
                <p className="font-medium text-stone-100">
                  {index + 1}. {position.label}
                </p>
                <p>{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
