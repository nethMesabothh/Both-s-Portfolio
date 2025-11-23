"use client";
import { AnimateLetterType, RenderTextType, SetupTextHoverType } from "@/types";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = ({ text, className, baseWeight = 400 }: RenderTextType) => {
  return [...text].map((char, i) => {
    return (
      <span
        key={i}
        className={className}
        style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  });
};

const setupTextHover = ({ container, type }: SetupTextHoverType) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = ({
    letter,
    weight,
    duration = 0.25,
  }: AnimateLetterType) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`, // FIXED
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);

      animateLetter({
        letter,
        weight: min + (max - min) * intensity,
      });
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => {
      animateLetter({
        letter,
        weight: base,
        duration: 0.3,
      });
    });
  };
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover({
      container: titleRef.current,
      type: "title",
    });

    const subtitleCleanup = setupTextHover({
      container: subtitleRef.current,
      type: "subtitle",
    });

    return () => {
      titleCleanup();
      subtitleCleanup();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={titleRef}>
        {renderText({
          text: "Hey, I'm Both! Welcom to my",
          baseWeight: 100,
          className: "text-3xl font-georama",
        })}
      </p>
      <h1 ref={subtitleRef} className="mt-7">
        {renderText({
          text: "portfolio",
          className: "text-9xl italic font-georama",
        })}
      </h1>
      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tabled screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
