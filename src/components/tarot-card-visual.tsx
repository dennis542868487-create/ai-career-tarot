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
        <div className="absolute inset-[14%] rounded-full border border-fuchsia-200/10" />
        <div className="absolute inset-[22%] rounded-full border border-amber-200/12" />

        <div className="relative flex aspect-[3/4] flex-col justify-between rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,_#201230,_#130d1d)] p-3">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-stone-400">
            <span>Tarot</span>
            {indexLabel ? (
              <span className="rounded-full bg-amber-200 px-2 py-1 text-[10px] font-semibold text-stone-900">
                {indexLabel}
              </span>
            ) : null}
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <div className="absolute h-28 w-28 rounded-full border border-amber-200/15" />
            <div className="absolute h-20 w-20 rotate-45 border border-white/10" />
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-200/25 bg-amber-200/5 text-3xl text-amber-200 shadow-[0_0_30px_rgba(251,191,36,0.12)]">
              ✦
            </div>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <span className="h-2 rounded-full bg-white/10" />
              <span className="h-2 rounded-full bg-amber-200/25" />
              <span className="h-2 rounded-full bg-white/10" />
            </div>
            <p className="text-center text-[11px] text-stone-500">{selected ? "Chosen" : "Tap to choose"}</p>
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

        <div className="mt-3 rounded-[18px] border border-stone-900/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.8),_rgba(255,255,255,0.35))] px-3 py-4 text-center shadow-inner">
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
