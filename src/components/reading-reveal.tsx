"use client";

import { useEffect, useState } from "react";
import { TarotCardVisual } from "@/components/tarot-card-visual";
import type { TarotCard } from "@/lib/tarot";

type ReadingRevealProps = {
  cards: TarotCard[];
  positions: readonly {
    id: string;
    label: string;
  }[];
};

export function ReadingReveal({ cards, positions }: ReadingRevealProps) {
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    const timers = positions.map((_, index) =>
      window.setTimeout(() => {
        setRevealedCount(index + 1);
      }, 350 + index * 260),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [positions]);

  return (
    <div className="grid grid-cols-3 gap-3">
      {positions.map((position, index) => {
        const card = cards[index];
        const isRevealed = revealedCount > index;

        return (
          <div key={position.id} className="rounded-3xl border border-white/10 bg-white/5 p-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone-400">{position.label}</p>
            <div className="mt-3">
              <TarotCardVisual
                card={card}
                mode={isRevealed ? "front" : "back"}
                revealed={isRevealed}
                compact
                label={position.label}
                indexLabel={String(index + 1)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
