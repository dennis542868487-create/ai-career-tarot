import Link from "next/link";
import { ReadingReveal } from "@/components/reading-reveal";
import { generateReading } from "@/lib/reading";
import { questionOptions, spreadPositions, tarotCards } from "@/lib/tarot";

function getQuestionTitle(question?: string) {
  return questionOptions.find((item) => item.id === question)?.title ?? questionOptions[0].title;
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{
    question?: string;
    situation?: string;
    concern?: string;
    hope?: string;
    cards?: string;
  }>;
}) {
  const params = await searchParams;
  const selectedCardIds = (params.cards ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);

  const selectedCards = selectedCardIds.map(
    (id) => tarotCards.find((card) => card.id === id) ?? tarotCards[0],
  );

  const reading = generateReading({
    question: params.question,
    situation: params.situation,
    concern: params.concern,
    hope: params.hope,
    cards: selectedCards,
  });

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#27173b,_#120d1d_48%,_#09060f_100%)] px-5 py-8 text-stone-100">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <Link href="/" className="mb-6 text-sm text-stone-400">
          ← Start over
        </Link>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.04))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Your reading</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight">{getQuestionTitle(params.question)}</h1>
          <p className="mt-3 text-sm text-stone-400">A reflective read on the energy around your situation right now.</p>
          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-xs leading-6 text-stone-300">
            Interpreting your spread in sequence. Start with the cards, then read the sections below.
          </div>
          <p className="mt-5 text-sm leading-7 text-stone-200">{reading.summary}</p>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-medium text-white">Your 3-card spread</h2>
              <p className="mt-1 text-xs text-stone-400">The cards reveal in order, current energy, hidden block, then next opportunity.</p>
            </div>
            <span className="text-amber-200">✦</span>
          </div>
          <ReadingReveal cards={selectedCards} positions={spreadPositions} />
        </div>

        <div className="mt-6 space-y-4">
          <section className="animate-[fadeIn_0.45s_ease_0.15s_both] rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Card 1</p>
            <h2 className="mt-2 text-base font-medium text-white">Current Energy</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">{reading.current_energy}</p>
          </section>

          <section className="animate-[fadeIn_0.45s_ease_0.3s_both] rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Card 2</p>
            <h2 className="mt-2 text-base font-medium text-white">Hidden Block</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">{reading.hidden_block}</p>
          </section>

          <section className="animate-[fadeIn_0.45s_ease_0.45s_both] rounded-[28px] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Card 3</p>
            <h2 className="mt-2 text-base font-medium text-white">Next Opportunity</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">{reading.next_opportunity}</p>
          </section>

          <section className="animate-[fadeIn_0.45s_ease_0.6s_both] rounded-[28px] border border-white/10 bg-black/20 p-5">
            <h2 className="text-base font-medium text-white">What the next 7 days may feel like</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">{reading.next_7_days}</p>
          </section>

          <section className="animate-[fadeIn_0.45s_ease_0.75s_both] rounded-[28px] border border-amber-200/20 bg-amber-100/10 p-5">
            <h2 className="text-base font-medium text-white">A gentle next step</h2>
            <p className="mt-3 text-sm leading-7 text-stone-200">{reading.gentle_next_step}</p>
          </section>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200/15 bg-amber-100/10 p-4 text-xs leading-5 text-stone-300">
          This reading is for reflection and entertainment. It should help you think, not tell you what will definitely happen or replace financial, legal, medical, or life advice.
        </div>
      </div>
    </main>
  );
}
