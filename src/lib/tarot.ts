export type QuestionOption = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
};

export type TarotCard = {
  id: string;
  name: string;
  arcana: "major" | "minor";
  suit?: "wands" | "cups" | "swords" | "pentacles";
  keywords: string[];
  careerMeaning: string;
  moneyMeaning: string;
};

export const questionOptions: QuestionOption[] = [
  {
    id: "job-change",
    title: "Should I change jobs soon?",
    shortTitle: "Change jobs",
    description: "Explore whether your current role still fits, and what to watch before making a move.",
  },
  {
    id: "money-block",
    title: "What is blocking my money flow?",
    shortTitle: "Money block",
    description: "Reflect on hidden patterns, constraints, or habits affecting your income energy.",
  },
  {
    id: "career-opportunity",
    title: "What career opportunity should I pay attention to now?",
    shortTitle: "Opportunity",
    description: "Look for the path, skill, or opening that deserves your attention next.",
  },
  {
    id: "next-move",
    title: "What is a gentle next step for work or side income?",
    shortTitle: "Next step",
    description: "Get a grounded, low-risk perspective on where to focus next.",
  },
];

export const spreadPositions = [
  {
    id: "current-energy",
    label: "Current Energy",
    description: "What energy is shaping your work or money situation right now.",
  },
  {
    id: "hidden-block",
    label: "Hidden Block",
    description: "What tension, blind spot, or pattern may be slowing progress.",
  },
  {
    id: "next-opportunity",
    label: "Next Opportunity",
    description: "Where a healthy opening or useful direction may be appearing.",
  },
] as const;

export const tarotCards: TarotCard[] = [
  {
    id: "fool",
    name: "The Fool",
    arcana: "major",
    keywords: ["fresh start", "risk", "openness"],
    careerMeaning: "A new chapter may be calling, but it helps to move with curiosity instead of impulse.",
    moneyMeaning: "There may be a new income path worth exploring, though it needs small tests before bigger commitments.",
  },
  {
    id: "magician",
    name: "The Magician",
    arcana: "major",
    keywords: ["resourcefulness", "skill", "initiative"],
    careerMeaning: "Your current situation may respond well to focused action and better use of your existing skills.",
    moneyMeaning: "You may already have useful tools or abilities that can be turned into income with clearer packaging.",
  },
  {
    id: "high-priestess",
    name: "The High Priestess",
    arcana: "major",
    keywords: ["intuition", "timing", "hidden insight"],
    careerMeaning: "More information may be needed before making a visible move, especially if something still feels unclear.",
    moneyMeaning: "A financial pattern may become clearer if you pause and look beneath surface urgency.",
  },
  {
    id: "emperor",
    name: "The Emperor",
    arcana: "major",
    keywords: ["structure", "authority", "discipline"],
    careerMeaning: "Progress may come through stronger structure, boundaries, and leadership rather than constant searching.",
    moneyMeaning: "Your money flow may benefit from more planning, systems, and steadier decision-making.",
  },
  {
    id: "wheel-of-fortune",
    name: "Wheel of Fortune",
    arcana: "major",
    keywords: ["timing", "change", "turning point"],
    careerMeaning: "A shift may already be underway, and paying attention to timing could matter more than forcing results.",
    moneyMeaning: "Your financial momentum may be changing, but stable follow-through matters more than chasing luck.",
  },
  {
    id: "star",
    name: "The Star",
    arcana: "major",
    keywords: ["hope", "renewal", "alignment"],
    careerMeaning: "A more aligned direction may be available if you reconnect with what feels meaningful and sustainable.",
    moneyMeaning: "Money growth may come from rebuilding trust in your path and choosing clearer long-term value.",
  },
  {
    id: "three-of-wands",
    name: "Three of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["expansion", "foresight", "exploration"],
    careerMeaning: "Your next step may involve widening your horizon, reaching outward, or testing a broader market.",
    moneyMeaning: "Income growth may come from thinking beyond your current lane and exploring expansion carefully.",
  },
  {
    id: "eight-of-pentacles",
    name: "Eight of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["craft", "consistency", "improvement"],
    careerMeaning: "Steady skill-building may matter more right now than dramatic change.",
    moneyMeaning: "Financial improvement may come through repetition, refinement, and a stronger offer.",
  },
  {
    id: "queen-of-pentacles",
    name: "Queen of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["stability", "care", "resource management"],
    careerMeaning: "A grounded, well-supported path may serve you better than chasing status alone.",
    moneyMeaning: "Money energy improves when you protect what is already working and build from stability.",
  },
];

export const sampleReading = {
  summary:
    "This spread suggests that your next progress comes less from forcing a dramatic leap and more from recognizing where your existing strengths can open a steadier opportunity.",
  current_energy:
    "You may be in a phase where your attention is split between wanting change and needing more clarity. There is movement here, but it benefits from focus.",
  hidden_block:
    "The main block may not be a lack of potential, but uncertainty about which path deserves sustained effort. Too many open loops can dilute momentum.",
  next_opportunity:
    "A healthier opportunity may come from improving, packaging, or repositioning something you already know how to do, rather than starting from zero.",
  next_7_days:
    "Over the next week, notice where you feel repeated interest, useful feedback, or small signs of traction. Those signals are more valuable than dramatic certainty.",
  gentle_next_step:
    "Choose one low-risk move this week, such as updating your resume, testing a small offer, or reaching out to one relevant contact, and use the response as information rather than proof of your worth.",
};
