import Link from "next/link";
import { questionOptions } from "@/lib/tarot";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#26163d,_#120d1d_45%,_#09060f_100%)] text-stone-100">
      <section className="mx-auto flex min-h-screen w-full max-w-md flex-col px-5 py-8">
        <div className="mb-10">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-amber-200/80">
            AI Career &amp; Money Tarot Reading
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-balance">
            Get clarity on your career and money path.
          </h1>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            Draw 3 tarot cards and receive an AI-guided reading designed for reflection, emotional clarity, and gentle next steps.
          </p>
        </div>

        <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-white">Choose your focus</h2>
            <span className="rounded-full bg-amber-300/15 px-3 py-1 text-xs text-amber-100">
              Mobile-first MVP
            </span>
          </div>
          <div className="space-y-3">
            {questionOptions.map((option) => (
              <Link
                key={option.id}
                href={`/reading/new?question=${option.id}`}
                className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-amber-200/40 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-white">{option.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{option.description}</p>
                  </div>
                  <span aria-hidden className="pt-1 text-amber-200">
                    ✦
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-3xl border border-white/10 bg-black/20 p-5">
          <h2 className="text-base font-medium text-white">What you get</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
            <li>• A 3-card spread: Current Energy, Hidden Block, Next Opportunity</li>
            <li>• A structured reading focused on career and money themes</li>
            <li>• Gentle guidance, not hard predictions or risky advice</li>
          </ul>
        </div>

        <div className="mt-auto rounded-2xl border border-amber-200/15 bg-amber-100/10 p-4 text-xs leading-5 text-stone-300">
          This reading is for reflection and entertainment. Use it as a perspective tool, not as financial, legal, or medical advice.
        </div>
      </section>
    </main>
  );
}
