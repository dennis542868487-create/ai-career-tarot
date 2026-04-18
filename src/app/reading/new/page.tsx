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
    <main className="min-h-screen bg-[#0c0814] px-5 py-8 text-stone-100">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <Link href="/" className="mb-6 text-sm text-stone-400">
          ← Back
        </Link>

        <h1 className="text-3xl font-semibold">Set up your reading</h1>
        <p className="mt-3 text-sm leading-7 text-stone-300">
          Add a little context so the reading feels more grounded and less generic.
        </p>

        <form action="/reading/draw" className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-stone-200">Question</label>
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
            <label className="mb-2 block text-sm font-medium text-stone-200">Current work situation</label>
            <textarea
              name="situation"
              required
              rows={4}
              placeholder="Example: I have a stable job, but I feel stuck and keep thinking about switching to something more flexible."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white placeholder:text-stone-500 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-200">Biggest tension or concern</label>
            <textarea
              name="concern"
              rows={3}
              placeholder="Example: I'm worried I'll regret moving too fast, but I'm also scared of wasting more time."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white placeholder:text-stone-500 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-stone-200">What are you hoping for?</label>
            <textarea
              name="hope"
              rows={3}
              placeholder="Example: I want clearer direction and a low-risk next step that I can test."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-white placeholder:text-stone-500 outline-none"
            />
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
