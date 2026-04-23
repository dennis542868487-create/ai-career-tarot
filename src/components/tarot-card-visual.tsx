import Image from "next/image";
import type { TarotCard } from "@/lib/tarot";

type TarotCardVisualProps = {
  card?: TarotCard;
  mode?: "back" | "front";
  selected?: boolean;
  revealed?: boolean;
  label?: string;
  indexLabel?: string;
  compact?: boolean;
};

function getSuitSymbol(card?: TarotCard) {
  if (!card?.suit) return "✦";

  switch (card.suit) {
    case "wands":
      return "🜂";
    case "cups":
      return "◔";
    case "swords":
      return "✧";
    case "pentacles":
      return "◈";
    default:
      return "✦";
  }
}

function getArcanaLabel(card?: TarotCard) {
  if (!card) return "Mystery card";
  return card.arcana === "major" ? "Major Arcana" : `${card.suit?.[0]?.toUpperCase() ?? ""}${card.suit?.slice(1) ?? ""}`;
}

function getCardFacePath(card?: TarotCard) {
  if (!card) return null;

  const lookup: Record<string, string> = {
    fool: "/cards/faces/the-fool.png",
    magician: "/cards/faces/the-magician.jpg",
    "high-priestess": "/cards/faces/high-priestess.jpg",
    empress: "/cards/faces/empress.jpg",
    emperor: "/cards/faces/emperor.jpg",
    hierophant: "/cards/faces/hierophant.jpg",
    lovers: "/cards/faces/lovers.jpg",
    chariot: "/cards/faces/chariot.jpg",
    strength: "/cards/faces/strength.jpg",
    hermit: "/cards/faces/hermit.jpg",
    "wheel-of-fortune": "/cards/faces/wheel-of-fortune.png",
    justice: "/cards/faces/justice.jpg",
    "hanged-man": "/cards/faces/hanged-man.jpg",
    death: "/cards/faces/death.jpg",
    temperance: "/cards/faces/temperance.jpg",
    devil: "/cards/faces/devil.jpg",
    tower: "/cards/faces/tower.jpg",
    star: "/cards/faces/star.jpg",
    moon: "/cards/faces/moon.jpg",
    sun: "/cards/faces/sun.jpg",
    judgement: "/cards/faces/judgement.jpg",
    world: "/cards/faces/world.jpg",
    "page-of-swords": "/cards/faces/page-of-swords.jpg",
    "knight-of-swords": "/cards/faces/knight-of-swords.jpg",
    "queen-of-swords": "/cards/faces/queen-of-swords.png",
    "king-of-swords": "/cards/faces/king-of-swords.jpg",
    "ace-of-swords": "/cards/faces/ace-of-swords.jpg",
    "two-of-swords": "/cards/faces/two-of-swords.jpg",
    "three-of-swords": "/cards/faces/three-of-swords.jpg",
    "four-of-swords": "/cards/faces/four-of-swords.jpg",
    "five-of-swords": "/cards/faces/five-of-swords.jpg",
    "six-of-swords": "/cards/faces/six-of-swords.jpg",
    "seven-of-swords": "/cards/faces/seven-of-swords.jpg",
    "eight-of-swords": "/cards/faces/eight-of-swords.jpg",
    "nine-of-swords": "/cards/faces/nine-of-swords.jpg",
    "ten-of-swords": "/cards/faces/ten-of-swords.jpg",
    "ace-of-wands": "/cards/faces/ace-of-wands.jpg",
    "two-of-wands": "/cards/faces/two-of-wands.jpg",
    "three-of-wands": "/cards/faces/three-of-wands.jpg",
    "four-of-wands": "/cards/faces/four-of-wands.jpg",
    "five-of-wands": "/cards/faces/five-of-wands.jpg",
    "six-of-wands": "/cards/faces/six-of-wands.jpg",
    "seven-of-wands": "/cards/faces/seven-of-wands.jpg",
    "eight-of-wands": "/cards/faces/eight-of-wands.jpg",
    "nine-of-wands": "/cards/faces/nine-of-wands.jpg",
    "ten-of-wands": "/cards/faces/ten-of-wands.jpg",
    "page-of-wands": "/cards/faces/page-of-wands.jpg",
    "knight-of-wands": "/cards/faces/knight-of-wands.jpg",
    "queen-of-wands": "/cards/faces/queen-of-wands.jpg",
    "king-of-wands": "/cards/faces/king-of-wands.jpg",
    "ace-of-cups": "/cards/faces/ace-of-cups.jpg",
    "two-of-cups": "/cards/faces/two-of-cups.jpg",
    "three-of-cups": "/cards/faces/three-of-cups.jpg",
    "four-of-cups": "/cards/faces/four-of-cups.jpg",
    "five-of-cups": "/cards/faces/five-of-cups.jpg",
    "six-of-cups": "/cards/faces/six-of-cups.jpg",
    "seven-of-cups": "/cards/faces/seven-of-cups.jpg",
    "eight-of-cups": "/cards/faces/eight-of-cups.jpg",
    "nine-of-cups": "/cards/faces/nine-of-cups.jpg",
    "ten-of-cups": "/cards/faces/ten-of-cups.jpg",
    "page-of-cups": "/cards/faces/page-of-cups.jpg",
    "knight-of-cups": "/cards/faces/knight-of-cups.jpg",
    "queen-of-cups": "/cards/faces/queen-of-cups.jpg",
    "king-of-cups": "/cards/faces/king-of-cups.jpg",
    "ace-of-pentacles": "/cards/faces/ace-of-pentacles.jpg",
    "two-of-pentacles": "/cards/faces/two-of-pentacles.jpg",
    "three-of-pentacles": "/cards/faces/three-of-pentacles.jpg",
    "four-of-pentacles": "/cards/faces/four-of-pentacles.jpg",
    "five-of-pentacles": "/cards/faces/five-of-pentacles.jpg",
    "six-of-pentacles": "/cards/faces/six-of-pentacles.jpg",
    "seven-of-pentacles": "/cards/faces/seven-of-pentacles.jpg",
    "eight-of-pentacles": "/cards/faces/eight-of-pentacles.jpg",
    "nine-of-pentacles": "/cards/faces/nine-of-pentacles.jpg",
    "ten-of-pentacles": "/cards/faces/ten-of-pentacles.jpg",
    "page-of-pentacles": "/cards/faces/page-of-pentacles.jpg",
    "knight-of-pentacles": "/cards/faces/knight-of-pentacles.jpg",
    "queen-of-pentacles": "/cards/faces/queen-of-pentacles.jpg",
    "king-of-pentacles": "/cards/faces/king-of-pentacles.jpg",
  };

  return lookup[card.id] ?? null;
}

function getCardNumber(card?: TarotCard) {
  if (!card) return "00";

  const lookup: Record<string, string> = {
    fool: "00",
    magician: "01",
    "high-priestess": "02",
    emperor: "04",
    "wheel-of-fortune": "10",
    star: "17",
    "three-of-wands": "03",
    "eight-of-pentacles": "08",
    "queen-of-pentacles": "13",
  };

  return lookup[card.id] ?? "--";
}

export function TarotCardVisual({
  card,
  mode = "back",
  selected = false,
  revealed = false,
  label,
  indexLabel,
  compact = false,
}: TarotCardVisualProps) {
  if (mode === "back") {
    return (
      <div
        className={[
          "relative overflow-hidden rounded-[22px] border p-2 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition duration-300",
          selected
            ? "-translate-y-1 scale-[1.02] border-amber-200/60 bg-amber-100/10 shadow-[0_24px_55px_rgba(251,191,36,0.18)]"
            : "border-white/12 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))]",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),_transparent_35%)]" />

        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,_#201230,_#130d1d)]">
          <div className="relative aspect-[736/1024] w-full">
            <Image
              src="/cards/card-back.png"
              alt="Tarot card back"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 text-[10px] uppercase tracking-[0.24em] text-stone-200">
            <span className="rounded-full bg-black/35 px-2 py-1">Tarot</span>
            {indexLabel ? (
              <span className="rounded-full bg-amber-200 px-2 py-1 text-[10px] font-semibold text-stone-900">
                {indexLabel}
              </span>
            ) : null}
          </div>

          <div className="absolute inset-x-0 bottom-0 p-3">
            <p className="rounded-full bg-black/35 px-3 py-1 text-center text-[11px] text-stone-200 backdrop-blur-sm">
              {selected ? "Chosen" : "Tap to choose"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[24px] border p-2 shadow-[0_20px_55px_rgba(0,0,0,0.38)] transition duration-500",
        revealed
          ? "translate-y-0 scale-100 border-amber-200/35 bg-white/8 shadow-[0_24px_60px_rgba(251,191,36,0.16)]"
          : "translate-y-2 scale-[0.98] border-white/12 bg-white/5 opacity-90",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_42%)]" />
      <div className="absolute inset-[8px] rounded-[20px] border border-amber-900/10" />
      <div className="absolute inset-[14px] rounded-[16px] border border-stone-900/8" />

      <div className="relative flex aspect-[3/4] flex-col rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,248,235,0.96),_rgba(232,221,201,0.9))] p-3 text-stone-900">
        <div className="flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.18em] text-stone-500">
          <span>{label ?? getArcanaLabel(card)}</span>
          <span>{getCardNumber(card)}</span>
        </div>

        <div className="mt-3 overflow-hidden rounded-[18px] border border-stone-900/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.8),_rgba(255,255,255,0.35))] text-center shadow-inner">
          {getCardFacePath(card) ? (
            <div className="relative aspect-[1206/2622] w-full bg-white/60">
              <Image
                src={getCardFacePath(card)!}
                alt={card?.name ?? "Tarot card"}
                fill
                sizes={compact ? "120px" : "280px"}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="px-3 py-4">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-stone-900/10 bg-white/60 text-3xl text-stone-800 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                {getSuitSymbol(card)}
              </div>

              <div className="mt-4 space-y-2">
                <div className="mx-auto h-px w-10 bg-stone-900/10" />
                <p className="text-sm font-semibold tracking-[0.04em]">{card?.name ?? "Unknown card"}</p>
                <div className="mx-auto h-px w-10 bg-stone-900/10" />
              </div>

              {!compact ? (
                <p className="mt-3 text-[11px] leading-5 text-stone-600">
                  {(card?.keywords ?? []).slice(0, 3).join(" • ") || "reflection • clarity • motion"}
                </p>
              ) : null}
            </div>
          )}
        </div>

        <div className="mt-auto pt-3 text-[10px] leading-4 text-stone-500">
          <div className="flex items-center justify-between gap-3 border-t border-stone-900/10 pt-3">
            <span>{card?.arcana === "major" ? "Major" : "Minor"}</span>
            <span>{indexLabel ?? (revealed ? "Revealed" : "Hidden")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
