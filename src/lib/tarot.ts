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
    id: "empress",
    name: "The Empress",
    arcana: "major",
    keywords: ["growth", "abundance", "nurturing"],
    careerMeaning: "Creative work and steady care may be more valuable right now than forcing faster external progress.",
    moneyMeaning: "Money may grow more reliably when you support what is already healthy instead of chasing every new option.",
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
    id: "hierophant",
    name: "The Hierophant",
    arcana: "major",
    keywords: ["tradition", "guidance", "institution"],
    careerMeaning: "There may be value in proven paths, mentors, or structures you previously saw as too conventional.",
    moneyMeaning: "Financial clarity may improve through advice, education, or better understanding of established systems.",
  },
  {
    id: "lovers",
    name: "The Lovers",
    arcana: "major",
    keywords: ["alignment", "choice", "values"],
    careerMeaning: "A career choice may matter more because it touches identity and values, not just practical outcomes.",
    moneyMeaning: "Money decisions may improve when they align with what you actually want to sustain long term.",
  },
  {
    id: "chariot",
    name: "The Chariot",
    arcana: "major",
    keywords: ["drive", "direction", "control"],
    careerMeaning: "Momentum builds when you stop splitting energy and commit to one clear direction.",
    moneyMeaning: "Financial progress may come from stronger discipline and cleaner decision-making, not more urgency.",
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
    id: "justice",
    name: "Justice",
    arcana: "major",
    keywords: ["clarity", "fairness", "decision"],
    careerMeaning: "A better career move may depend on clear facts and honest tradeoffs rather than wishful thinking.",
    moneyMeaning: "Money improves when you look directly at patterns, costs, and consequences without avoidance.",
  },
  {
    id: "hermit",
    name: "The Hermit",
    arcana: "major",
    keywords: ["introspection", "solitude", "wisdom"],
    careerMeaning: "A quieter period may be useful if it helps you separate outside pressure from your actual direction.",
    moneyMeaning: "Financial clarity may come from stepping back, reviewing habits, and making fewer reactive choices.",
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
    id: "sun",
    name: "The Sun",
    arcana: "major",
    keywords: ["confidence", "visibility", "success"],
    careerMeaning: "This is a sign to lean into what is working and let your stronger work become more visible.",
    moneyMeaning: "Financial movement may improve through confidence, simplicity, and showing the value you already create.",
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
    id: "six-of-wands",
    name: "Six of Wands",
    arcana: "minor",
    suit: "wands",
    keywords: ["recognition", "confidence", "progress"],
    careerMeaning: "Your effort may be closer to visible recognition than you think, so keep showing up clearly.",
    moneyMeaning: "Financial progress may follow stronger confidence and clearer public proof of your value.",
  },
  {
    id: "ace-of-cups",
    name: "Ace of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["new feeling", "openness", "emotional clarity"],
    careerMeaning: "A fresh emotional opening may be pointing you toward work that feels more human and energizing.",
    moneyMeaning: "Money choices may improve when emotional honesty replaces shame, numbness, or avoidance.",
  },
  {
    id: "four-of-cups",
    name: "Four of Cups",
    arcana: "minor",
    suit: "cups",
    keywords: ["stagnation", "apathy", "missed offer"],
    careerMeaning: "There may already be an opening nearby, but discouragement could be making it harder to notice.",
    moneyMeaning: "A money opportunity may look unglamorous at first, so pay attention to what feels small but solid.",
  },
  {
    id: "two-of-swords",
    name: "Two of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["indecision", "avoidance", "pause"],
    careerMeaning: "The block may be less about lack of options and more about delaying a choice you already understand.",
    moneyMeaning: "Financial tension may ease once you face a decision directly instead of staying split between options.",
  },
  {
    id: "queen-of-swords",
    name: "Queen of Swords",
    arcana: "minor",
    suit: "swords",
    keywords: ["discernment", "truth", "boundaries"],
    careerMeaning: "A cleaner decision may come from better boundaries and more honest filtering of what matters.",
    moneyMeaning: "Money improves when you cut noise, tighten standards, and think with calm precision.",
  },
  {
    id: "page-of-pentacles",
    name: "Page of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["learning", "offer", "grounded start"],
    careerMeaning: "A practical new path may begin through learning, a test project, or a modest but useful opening.",
    moneyMeaning: "Income growth may start small, but the foundation looks worth taking seriously.",
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
  {
    id: "ten-of-pentacles",
    name: "Ten of Pentacles",
    arcana: "minor",
    suit: "pentacles",
    keywords: ["long-term wealth", "security", "legacy"],
    careerMeaning: "Long-term career choices may matter more than short bursts of excitement right now.",
    moneyMeaning: "This points toward building durable stability, systems, and support, not just quick wins.",
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
