'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Main() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // прогресс 0 → 1
      const p = 1 - Math.min(Math.max(rect.bottom / windowHeight, 0), 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Возвращаем разные clip-path для mobile и desktop,
   * как было изначально, но оставляем более мягкую анимацию
   */

  // плавный easing
  const ease = progress * progress * (3 - 2 * progress);

  /**
   * MOBILE:
   * было очень агрессивно: 140 → 100
   * делаем мягче: 130 → 115
   */
  const mobileEllipseX = 160 - ease * 35;

  /**
   * DESKTOP:
   * было: 90 → 60
   * делаем мягче: 95 → 80
   */
  const desktopEllipseX = 100 - ease * 20;

  //Анимация тайпинга

  // const fullText =
  // "Это особенный для нас день, который мы хотим разделить вместе с вами";
  const lines = [
    "Это особенный для нас день,",
    "который мы хотим разделить",
    "вместе с вами",
  ];
  const fullText = lines.join("\n");

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 60 : 90;
    const pause = 1200;

    const timeout = setTimeout(() => {
      if (!deleting) {
        // печать
        setText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        // удаление
        setText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index - 1 === 0) {
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, deleting]);

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="relative w-full h-[calc(100svh-40px)] aspect-[16/10] min-h-[650px] max-h-[750px] lg:max-h-[850px]">

        {/* MOBILE background */}
        <div
          className="absolute inset-0 overflow-hidden lg:hidden"
          style={{
            clipPath: `ellipse(${mobileEllipseX}% 100% at 50% 0%)`,
          }}
        >
          <Image
            src="/images/2.jpg"
            alt="Wedding background"
            fill
            priority
            className="object-cover"
          />

          {/* затемнение */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* DESKTOP background */}
        <div
          className="hidden lg:block absolute inset-0 overflow-hidden"
          style={{
            clipPath: `ellipse(${desktopEllipseX}% 100% at 50% 0%)`,
          }}
        >
          <Image
            src="/images/2.jpg"
            alt="Wedding background"
            fill
            priority
            className="object-cover"
          />

          {/* затемнение */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Контент */}
        <div className="text-white relative z-10 h-full flex flex-col items-center text-center px-[30px]">

          <h1
            className="
              uppercase
              px-3
              text-[28px]
              max-w-[900px]
              mt-[120px]
              lg:mt-[150px]
              tracking-wide
              leading-[1.3]
              lg:text-[56px]
            "
          >
            Приглашаем <br className="lg:hidden flex" />
            вас <br className="hidden lg:flex" />
            на&nbsp;нашу <br className="lg:hidden flex" />
            свадьбу
          </h1>

          <div className="lg:absolute lg:bottom-[160px] lg:right-[100px] flex items-center gap-3 mt-32 lg:gap-8 lg:mt-8">
            <span className="text-[28px] lg:text-[64px] italic">(</span>
            <p className="lg:text-[14px] leading-[1.2] whitespace-pre-line">
              {text}
              <span className="animate-pulse">|</span>
            </p>
            <span className="text-[28px] lg:text-[64px] italic">)</span>
          </div>

          {/* стрелочка */}
          <div className="absolute bottom-[80px] lg:hidden">
            <svg
              className="arrow-float"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 256 256"
              fill="white"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}