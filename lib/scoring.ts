import { questions } from './questions';
import type { DimensionWeights } from './types';

/**
 * The Vibe Engine
 *
 * Accepts the user's answers as a flat index array (one entry per question,
 * value = the 0-based index of the chosen option).
 *
 * Returns the personality-type id string, e.g. 'WVAK' or 'ZMJJ-KK'.
 */
export function calculateResult(answers: number[]): string {
  // Easter egg: Q4 option B (index 1) + Q15 option B (index 1)
  if (answers[3] === 1 && answers[14] === 1) {
    return 'ZMJJ-KK';
  }

  // Accumulate dimension weights from every selected option
  const totals: Required<DimensionWeights> = {
    W: 0, S: 0,
    V: 0, M: 0,
    A: 0, B: 0,
    K: 0, O: 0,
  };

  answers.forEach((optionIndex, qIndex) => {
    const option = questions[qIndex]?.options[optionIndex];
    if (!option) return;
    for (const [dim, val] of Object.entries(option.weights) as [keyof DimensionWeights, number][]) {
      totals[dim] += val;
    }
  });

  // Compare each axis pair; tie → left letter (W, V, A, K)
  const axis1 = totals.W >= totals.S ? 'W' : 'S';
  const axis2 = totals.V >= totals.M ? 'V' : 'M';
  const axis3 = totals.A >= totals.B ? 'A' : 'B';
  const axis4 = totals.K >= totals.O ? 'K' : 'O';

  return axis1 + axis2 + axis3 + axis4;
}
