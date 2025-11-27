import { FONT_WEIGHTS } from "@/components/welcom";
import { WINDOW_CONFIG } from "@/constants";

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

export type WindowConfigItem = {
	isOpen: boolean;
	zIndex: number;
	data: unknown | null;
};

type WindowKey = keyof typeof WINDOW_CONFIG;

export type WindowStore = {
	windows: typeof WINDOW_CONFIG;
	nextZIndex: number;

	openWindow: (windowKey: WindowKey, data?: unknown | null) => void;
	closeWindow: (windowKey: WindowKey) => void;
	focusWindow: (windowKey: WindowKey) => void;
};
