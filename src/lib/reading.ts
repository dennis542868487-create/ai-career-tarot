import { questionOptions, TarotCard } from "@/lib/tarot";

export type ReadingResult = {
  summary: string;
  current_energy: string;
  hidden_block: string;
  next_opportunity: string;
  next_7_days: string;
  gentle_next_step: string;
};

type GenerateReadingInput = {
  question?: string;
  situation?: string;
  concern?: string;
  hope?: string;
  cards: TarotCard[];
};

function getQuestion(questionId?: string) {
  return questionOptions.find((item) => item.id === questionId) ?? questionOptions[0];
}

function getTheme(questionId?: string) {
  return questionId === "money-block" ? "money" : "career";
}

function getMeaning(card: TarotCard, theme: "career" | "money") {
  return theme === "money" ? card.moneyMeaning : card.careerMeaning;
}

export function generateReading({
  question,
  situation,
  concern,
  hope,
  cards,
}: GenerateReadingInput): ReadingResult {
  const safeCards = cards.slice(0, 3);
  const selectedQuestion = getQuestion(question);
  const theme = getTheme(question);
  const [current, block, opportunity] = safeCards;

  const currentMeaning = current ? getMeaning(current, theme) : "You may be in a transition phase that benefits from observation before action.";
  const blockMeaning = block ? getMeaning(block, theme) : "A hidden tension may be reducing clarity more than ability.";
  const opportunityMeaning = opportunity
    ? getMeaning(opportunity, theme)
    : "A healthier next step may come from a small, testable move rather than a dramatic leap.";

  const contextLine = situation
    ? `Based on what you shared, your current situation sounds like: ${situation.trim()}`
    : "Your reading is based on the energy of the cards and the question you chose.";

  const concernLine = concern
    ? `A likely pressure point here is ${concern.trim().toLowerCase()}.`
    : "There may also be uncertainty about timing, effort, or which option deserves attention.";

  const hopeLine = hope
    ? `What you are hoping for, ${hope.trim().toLowerCase()}, is useful to keep in view without forcing certainty too early.`
    : "It may help to stay close to what feels sustainable rather than chasing immediate certainty.";

  return {
    summary: `${selectedQuestion.title} This spread points more toward reflection and pattern recognition than instant certainty. ${contextLine}`,
    current_energy: `${current?.name ?? "Current energy"} suggests that ${currentMeaning}`,
    hidden_block: `${block?.name ?? "Hidden block"} points to a softer obstacle. ${blockMeaning} ${concernLine}`,
    next_opportunity: `${opportunity?.name ?? "Next opportunity"} suggests a workable opening. ${opportunityMeaning}`,
    next_7_days: `Over the next 7 days, notice which actions create more clarity, steadiness, or useful feedback. ${hopeLine}`,
    gentle_next_step:
      "Choose one low-risk action this week, such as refining your resume, testing a small offer, reviewing your spending pattern, or reaching out to one relevant person. Use the response as information, not as a final verdict on your future.",
  };
}
