import type { Flow, FlowTurn } from "../data/sdhcFlows";

export function getNextTurn(flow: Flow, currentTurnIndex: number): FlowTurn | null {
  const nextIndex = currentTurnIndex + 1;
  if (nextIndex < flow.turns.length) {
    return flow.turns[nextIndex];
  }
  return null;
}

export function isFollowUpMatch(userText: string, turn: FlowTurn): boolean {
  const normalize = (s: string) =>
    s.toLowerCase().replace(/[?.,!]/g, '').replace(/\s+/g, " ").trim();

  const normalizedInput = normalize(userText);

  // Build list of candidates: main question + variants
  const candidates = [
    turn.userQuestion,
    ...(turn.userQuestionVariants ?? []),
  ].map(normalize);

  // Simple direct match or "contains" check
  if (candidates.some(c => normalizedInput === c || normalizedInput.includes(c) || c.includes(normalizedInput))) {
    return true;
  }

  // Loose partial match for the main words (eviction, rent, etc.)
  return candidates.some((c) => {
    const words = c.split(" ").filter((w) => w.length > 3);
    const matchedWords = words.filter((w) => normalizedInput.includes(w));
    return matchedWords.length >= Math.max(1, Math.floor(words.length / 2));
  });
}

// Find which turn in a flow matches the user's question (for eviction flow, allows jumping to any turn)
export function findMatchingTurn(flow: Flow, userText: string): { turn: FlowTurn; index: number } | null {
  for (let i = 0; i < flow.turns.length; i++) {
    const turn = flow.turns[i];
    if (isFollowUpMatch(userText, turn)) {
      return { turn, index: i };
    }
  }
  return null;
}

