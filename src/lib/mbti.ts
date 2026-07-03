import { MbtiLetter } from "@/types/mbti";

type ScoreMap = Record<MbtiLetter, number>;

function pickLetter(scores: ScoreMap, a: MbtiLetter, b: MbtiLetter, tieBreak: MbtiLetter) {
  if (scores[a] > scores[b]) return a;
  if (scores[b] > scores[a]) return b;
  return tieBreak;
}

/**
 * 8개 응답(각 알파벳)을 집계해 4자리 MBTI 코드를 산출한다.
 * 동점 시 I, N, T, P를 우선한다 (기획 명세서 알고리즘 가이드 기준).
 */
export function calculateMbti(answers: MbtiLetter[]): string {
  const scores: ScoreMap = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  for (const letter of answers) {
    scores[letter] += 1;
  }

  const ei = pickLetter(scores, "E", "I", "I");
  const sn = pickLetter(scores, "S", "N", "N");
  const tf = pickLetter(scores, "T", "F", "T");
  const jp = pickLetter(scores, "J", "P", "P");

  return `${ei}${sn}${tf}${jp}`;
}

export const MBTI_TYPE_PATTERN = /^[EI][SN][TF][JP]$/;

export function isValidMbtiType(value: string): boolean {
  return MBTI_TYPE_PATTERN.test(value.toUpperCase());
}
