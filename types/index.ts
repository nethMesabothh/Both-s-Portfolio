import { FONT_WEIGHTS } from "@/components/welcom";

export type FontWeightType = keyof typeof FONT_WEIGHTS;

export type RenderTextType = {
  text: string;
  className: string;
  baseWeight?: number;
};

export type AnimateLetterType = {
  letter: HTMLSpanElement;
  weight: number;
  duration?: number;
};

export type SetupTextHoverType = {
  container: HTMLElement | null;
  type: FontWeightType;
};
