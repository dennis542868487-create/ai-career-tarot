import Link from "next/link";
import { questionOptions, sampleReading, spreadPositions, tarotCards } from "@/lib/tarot";

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

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#09060f,_#151022)] px-5 py-8 text-stone-100">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <Link href="/" className="mb-6 text-sm text-stone-400">
          ← Start over
        </Link>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Your reading</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight">{getQuestionTitle(params.question)}</h1>
          <p className="mt-4 text-sm leading-7 text-stone-300">{sampleReading.summary}</p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {spreadPositions.map((position, index) => {
            const card = selectedCards[index] ?? tarotCards[index];
            return (
              <div key={position.id} className="rounded-3xl border border-white/10 bg-black/20 p-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">{position.label}</p>
                <div className="mt-3 rounded-2xl border border-dashed border-white/15 bg-white/5 px-3 py-5 text-center">
                  <p className="text-xs text-amber-200">{card.name}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 space-y-4">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-medium text-white">Current Energy</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">{sampleReading.current_energy}</p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-medium text-white">Hidden Block</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">{sampleReading.hidden_block}</p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-medium text-white">Next Opportunity</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">{sampleReading.next_opportunity}</p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-medium text-white">Next 7 Days</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">{sampleReading.next_7_days}</p>
          </section>

          <section className="rounded-3xl border border-amber-200/20 bg-amber-100/10 p-5">
            <h2 className="text-base font-medium text-white">Gentle Next Step</h2>
            <p className="mt-3 text-sm leading-7 text-stone-200">{sampleReading.gentle_next_step}</p>
          </section>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-5">
          <h2 className="text-base font-medium text-white">Unlock full reading</h2>
          <p className="mt-3 text-sm leading-7 text-stone-300">
            In the next version, this section will collect email to unlock a saved reading and follow-up spread.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-stone-500 outline-none"
          />
          <button className="mt-3 w-full rounded-full bg-amber-200 px-5 py-4 text-sm font-semibold text-stone-950">
            Unlock by email
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200/15 bg-amber-100/10 p-4 text-xs leading-5 text-stone-300">
          This reading is for reflection and entertainment. Use it as a perspective tool, not as financial, legal, or medical advice.
        </div>
      </div>
    </main>
  );
}
