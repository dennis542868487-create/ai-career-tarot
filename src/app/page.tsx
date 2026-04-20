import Link from "next/link";
import { questionOptions } from "@/lib/tarot";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#3a2255,_#171124_42%,_#09060f_78%)] text-stone-100">
      <section className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.04))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-200/12 blur-2xl" />
          <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-fuchsia-300/10 blur-2xl" />

          <p className="relative mb-4 text-[11px] uppercase tracking-[0.35em] text-amber-200/80">
            AI Career &amp; Money Tarot Reading
          </p>
          <h1 className="relative text-4xl font-semibold leading-tight text-balance">
            A calmer way to reflect on your next career or money move.
          </h1>
          <p className="relative mt-4 text-sm leading-7 text-stone-300">
            Pick a focus, draw 3 cards, and get an AI-guided reading built for clarity, pattern-spotting, and gentle next steps.
          </p>

          <div className="relative mt-6 flex items-center gap-3 text-xs text-stone-300">
            <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-amber-100">
              3-card spread
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              mobile-first MVP
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-medium text-white">Choose your focus</h2>
              <p className="mt-1 text-xs text-stone-400">Start with the question that feels most real right now.</p>
            </div>
            <span className="text-amber-200">✦</span>
          </div>
          <div className="space-y-3">
            {questionOptions.map((option) => (
              <Link
                key={option.id}
                href={`/reading/new?question=${option.id}`}
                className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:-translate-y-0.5 hover:border-amber-200/40 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-white">{option.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{option.description}</p>
                  </div>
                  <span aria-hidden className="pt-1 text-amber-200">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,_rgba(0,0,0,0.2),_rgba(255,255,255,0.04))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
          <h2 className="text-base font-medium text-white">How it works</h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
            <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Step 1</p>
              <p className="mt-2">Choose a question and add a little context about what is actually going on.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Step 2</p>
              <p className="mt-2">See a reshuffled card set, then draw 3 cards for Current Energy, Hidden Block, and Next Opportunity.</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Step 3</p>
              <p className="mt-2">Read a structured interpretation designed to feel grounded, not overly mystical or pushy.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[28px] border border-amber-200/15 bg-amber-100/10 p-5">
          <h2 className="text-base font-medium text-white">What you get</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
            <li>• A focused 3-card reading for career and money themes</li>
            <li>• A short summary plus card-by-card interpretation</li>
            <li>• A gentle next step, not hard predictions or risky advice</li>
          </ul>
        </div>

        <div className="mt-auto pt-6 text-xs leading-5 text-stone-400">
          This reading is for reflection and entertainment. It should help you notice patterns and possibilities, not replace financial, legal, medical, or life decision advice.
        </div>
      </section>
    </main>
  );
}
