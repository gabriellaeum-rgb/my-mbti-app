export type Dimension = "EI" | "SN" | "TF" | "JP";

export type MbtiLetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export interface QuizOption {
  id: "A" | "B";
  text: string;
  letter: MbtiLetter;
}

export interface QuizQuestion {
  id: number;
  dimension: Dimension;
  dimensionLabel: string;
  question: string;
  options: [QuizOption, QuizOption];
}

export interface PersonaMatch {
  code: string;
  title: string;
  reason: string;
}

export interface Persona {
  code: string;
  title: string;
  tagline: string;
  emoji: string;
  gradient: string;
  traits: string[];
  bestMatch: PersonaMatch;
  worstMatch: PersonaMatch;
}
