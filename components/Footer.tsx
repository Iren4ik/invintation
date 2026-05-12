'use client';
import Image from "next/image";
import ContactCard from "@/components/ui/ContactCard";
import { useEffect, useRef, useState } from "react";

export default function Contacts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const p = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * плавный easing (как у тебя в Rules)
   */
  const ease = 1 - (progress * progress * (3 - 2 * progress));

  /**
   * 🔥 диапазоны анимации (оставлены мягкими, но видимыми)
   */
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

  return (
    <div ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="relative w-full min-h-[500px] lg:min-h-[500px]">

        {/* MOBILE */}
        <div
          className="absolute inset-0 overflow-hidden lg:hidden"
          style={{
            clipPath: `ellipse(${mobileEllipseX}% 100% at 50% 100%)`,
          }}
        >
          <div className="absolute inset-0">
            {/* <Image
              src="/images/2.jpg"
              alt="Wedding background"
              fill
              priority
              className="object-cover"
            /> */}

            <div className="absolute inset-0 bg-dark-gray-sec" />
          </div>
        </div>

        {/* DESKTOP */}
        <div
          className="hidden lg:block absolute inset-0 overflow-hidden"
          style={{
            clipPath: `ellipse(${desktopEllipseX}% 100% at 50% 100%)`,
          }}
        >
          {/* ВАЖНО: wrapper */}
          <div className="absolute inset-0">
            {/* <Image
              src="/images/2.jpg"
              alt="Wedding background"
              fill
              priority
              className="object-cover"
            /> */}

            <div className="absolute inset-0 bg-dark-gray-sec" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-white px-[30px] pt-[140px] pb-[100px]">

          <div className="w-full max-w-[770px] mx-auto">

            <h2 className="text-[26px] uppercase leading-[1.2] mb-[50px] lg:text-[36px] lg:mb-[60px]">
              Контакты
            </h2>

            <p className="text-[16px] lg:text-[20px] leading-[1.5] mb-[40px] lg:mb-[60px] max-w-[700px]">
              Если у вас появились вопросы по мероприятию, размещению,
              таймингу или организационным моментам — пожалуйста,
              свяжитесь с нами удобным способом.
            </p>

            <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2 lg:gap-[40px]">

              <ContactCard
                name="Ирена"
                phone="+7 (981) 783-82-53"
                telegram="https://t.me/me_irena"
                vk="https://vk.com/id101836236"
              />

              <ContactCard
                name="Коля"
                phone="+7 (999) 222-68-86"
                telegram="https://t.me/Nikon68i86"
                vk="https://vk.com/nikon_b1"
              />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}