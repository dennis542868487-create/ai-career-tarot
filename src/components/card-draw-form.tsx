"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { TarotCardVisual } from "@/components/tarot-card-visual";
import { spreadPositions, tarotCards } from "@/lib/tarot";

type CardDrawFormProps = {
  question?: string;
  situation?: string;
  concern?: string;
  hope?: string;
};

const loadingSteps = ["Shuffling the deck", "Reading the energy", "Revealing your spread"];

function shuffleCards<T>(items: T[]) {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
  }

  return next;
}

export function CardDrawForm({
  question = "",
  situation = "",
  concern = "",
  hope = "",
}: CardDrawFormProps) {
  const router = useRouter();
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [candidateCards, setCandidateCards] = useState(() => shuffleCards(tarotCards).slice(0, 9));
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [ritualStage, setRitualStage] = useState<"deck" | "shuffle" | "layout">("deck");

  const deckCount = tarotCards.length;
  const deckVisuals = useMemo(() => Array.from({ length: 4 }, (_, index) => index), []);

  useEffect(() => {
    const stageTimers = [
      window.setTimeout(() => setRitualStage("shuffle"), 500),
      window.setTimeout(() => {
        setCandidateCards(shuffleCards(tarotCards).slice(0, 9));
        setRitualStage("layout");
      }, 1500),
    ];

    return () => {
      stageTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  function toggleCard(cardId: string) {
    if (isLoading || ritualStage !== "layout") return;

    setSelectedCards((current) => {
      if (current.includes(cardId)) {
        return current.filter((id) => id !== cardId);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, cardId];
    });
  }

  function continueToReading() {
    if (selectedCards.length !== 3 || isLoading) return;

    setIsLoading(true);
    setLoadingStep(0);

    window.setTimeout(() => setLoadingStep(1), 500);
    window.setTimeout(() => setLoadingStep(2), 1050);
    window.setTimeout(() => {
      const params = new URLSearchParams({
        question,
        situation,
        concern,
        hope,
        cards: selectedCards.join(","),
      });

      router.push(`/reading/result?${params.toString()}`);
    }, 1650);
  }

  return (
    <>
      <div className="mt-6 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,_rgba(11,7,17,0.92),_rgba(22,15,32,0.96))] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-medium text-white">Full deck ritual</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              We start with the full deck, shuffle it, then lay out 9 cards. Choose the 3 that pull your attention first.
            </p>
          </div>
          <span className="rounded-full border border-amber-200/20 bg-amber-200/10 px-3 py-1 text-xs text-amber-100">
            {selectedCards.length}/3
          </span>
        </div>

        <div className="mt-5 rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.08),_rgba(255,255,255,0.02)_52%,_rgba(0,0,0,0.18)_100%)] p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone-400">Deck state</p>
              <p className="mt-2 text-sm text-stone-200">
                {ritualStage === "deck" && `A full ${deckCount}-card deck is ready.`}
                {ritualStage === "shuffle" && "Shuffling the full deck and drawing your candidate cards."}
                {ritualStage === "layout" && "9 cards have been laid out. Choose the 3 that stand out first."}
              </p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300">
              {ritualStage === "deck" ? "Deck ready" : ritualStage === "shuffle" ? "Shuffling" : "Cards laid out"}
            </span>
          </div>

          <div className="relative mt-6 flex min-h-[200px] items-center justify-center overflow-hidden rounded-[24px] border border-white/8 bg-black/20 px-4 py-8">
            {ritualStage !== "layout" ? (
              <div className="relative h-40 w-32">
                {deckVisuals.map((layer) => (
                  <div
                    key={layer}
                    className={[
                      "absolute inset-0 transition duration-500",
                      ritualStage === "shuffle"
                        ? "animate-[deckShuffle_0.9s_ease-in-out_infinite]"
                        : "",
                    ].join(" ")}
                    style={{
                      transform:
                        ritualStage === "shuffle"
                          ? `translate(${layer % 2 === 0 ? -10 + layer * 4 : 10 - layer * 4}px, ${layer * 2}px) rotate(${layer % 2 === 0 ? -8 + layer * 2 : 8 - layer * 2}deg)`
                          : `translateY(${layer * 2}px) rotate(${layer % 2 === 0 ? -3 : 3}deg)`,
                      animationDelay: `${layer * 120}ms`,
                    }}
                  >
                    <TarotCardVisual mode="back" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid w-full grid-cols-3 gap-3">
                {candidateCards.map((card, index) => {
                  const isSelected = selectedCards.includes(card.id);
                  const selectionIndex = selectedCards.indexOf(card.id);

                  return (
                    <button
                      key={card.id}
                      type="button"
                      onClick={() => toggleCard(card.id)}
                      disabled={isLoading}
                      className="group text-left transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
                      style={{ animationDelay: `${index * 60}ms` }}
                    >
                      <div className="animate-[fadeIn_0.35s_ease_both]">
                        <TarotCardVisual
                          mode="back"
                          selected={isSelected}
                          indexLabel={isSelected ? String(selectionIndex + 1) : undefined}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
        <h2 className="text-base font-medium text-white">Your spread</h2>
        <p className="mt-2 text-sm leading-6 text-stone-300">
          The order you choose the cards becomes the reading order, Current Energy, Hidden Block, then Next Opportunity.
        </p>
        <div className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
          {spreadPositions.map((position, index) => {
            const cardId = selectedCards[index];
            const card = tarotCards.find((item) => item.id === cardId);

            return (
              <div key={position.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-stone-100">
                      {index + 1}. {position.label}
                    </p>
                    <p className="mt-1 text-stone-400">{position.description}</p>
                  </div>
                  <span className="text-amber-200">✦</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="shrink-0" style={{ width: 72 }}>
                    {card ? (
                      <TarotCardVisual card={card} mode="front" compact revealed indexLabel={String(index + 1)} />
                    ) : (
                      <TarotCardVisual mode="back" />
                    )}
                  </div>
                  <p className="text-sm text-amber-200">{card ? card.name : "No card selected yet"}</p>
                </div>
              </div>
            );
          })}
        </div>

        {isLoading ? (
          <div className="mt-5 rounded-3xl border border-amber-200/20 bg-amber-100/10 p-5 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/5 text-2xl text-amber-200 animate-[pulseGlow_1.6s_ease-in-out_infinite]">
              ✦
            </div>
            <p className="mt-4 text-sm font-medium text-white">{loadingSteps[loadingStep]}</p>
            <p className="mt-2 text-xs leading-6 text-stone-300">
              Taking a breath before the reading opens.
            </p>
            <div className="mt-4 flex justify-center gap-2">
              {loadingSteps.map((step, index) => (
                <span
                  key={step}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    index <= loadingStep ? "bg-amber-200" : "bg-white/15",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={continueToReading}
            disabled={selectedCards.length !== 3 || ritualStage !== "layout"}
            className="mt-5 w-full rounded-full bg-amber-200 px-5 py-4 text-sm font-semibold text-stone-950 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:bg-stone-600 disabled:text-stone-300"
          >
            {ritualStage !== "layout"
              ? "Preparing the deck"
              : selectedCards.length === 3
                ? "Reveal your reading"
                : `Select ${3 - selectedCards.length} more card${3 - selectedCards.length === 1 ? "" : "s"}`}
          </button>
        )}
      </div>
    </>
  );
}
