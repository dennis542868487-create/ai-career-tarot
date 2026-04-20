import Link from "next/link";
import { questionOptions } from "@/lib/tarot";

function getQuestion(id?: string) {
  return questionOptions.find((item) => item.id === id) ?? questionOptions[0];
}

export default async function NewReadingPage({
  searchParams,
}: {
  searchParams: Promise<{ question?: string }>;
}) {
  const params = await searchParams;
  const selected = getQuestion(params.question);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#241537,_#110c1b_46%,_#09060f_100%)] px-5 py-8 text-stone-100">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <Link href="/" className="mb-6 text-sm text-stone-400">
          ← Back
        </Link>

        <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">Set up your reading</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight">Give the reading a little real context.</h1>
          <p className="mt-3 text-sm leading-7 text-stone-300">
            A few grounded details make the result feel more specific and less like a generic horoscope.
          </p>
        </div>

        <form action="/reading/draw" className="mt-6 space-y-5 rounded-[30px] border border-white/10 bg-black/20 p-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-200">Question focus</label>
            <select
              name="question"
              defaultValue={selected.id}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
            >
              {questionOptions.map((option) => (
                <option key={option.id} value={option.id} className="bg-[#120d1d]">
                  {option.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-200">What is your situation right now?</label>
            <textarea
              name="situation"
              required
              rows={4}
              placeholder="Example: I have a stable job, but I feel stuck and keep thinking about switching to something more flexible."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white placeholder:text-stone-500 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-200">What feels tense, uncertain, or heavy?</label>
            <textarea
              name="concern"
              rows={3}
              placeholder="Example: I'm worried I'll regret moving too fast, but I'm also scared of wasting more time."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white placeholder:text-stone-500 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-200">What outcome are you quietly hoping for?</label>
            <textarea
              name="hope"
              rows={3}
              placeholder="Example: I want clearer direction and a low-risk next step that I can test."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white placeholder:text-stone-500 outline-none"
            />
          </div>

          <div className="rounded-2xl border border-amber-200/15 bg-amber-100/10 p-4 text-xs leading-5 text-stone-300">
            Keep it honest and simple. You do not need to write a perfect prompt, just enough for the reading to understand your situation.
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-amber-200 px-5 py-4 text-sm font-semibold text-stone-950 transition hover:bg-amber-100"
          >
            Continue to card draw
          </button>
        </form>
      </div>
    </main>
  );
}
