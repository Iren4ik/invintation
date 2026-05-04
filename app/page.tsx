'use client'

import Image from "next/image";
import PicturesGrid from "@/components/ui/PicturesGrid";
import Schedule from "@/components/Schedule";
import Calendar from "@/components/Calendar";
import Form from "@/components/Form";
import Faq from "@/components/Faq";
import Rules from "@/components/Rules";
import ContactCard from "@/components/ContactCard";
import { cn } from "@/lib/utils";
import {
  firstGalleryBlocks,
  secondGalleryBlocks,
} from "@/data/gallery";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={cn(
        "w-full px-[30px] pt-[60px] pb-[40px] relative",
        className
      )}
    >
      {children}
    </section>
  );
}

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-[28px] uppercase leading-[28px] mb-[45px] lg:text-[36px] lg:leading-[1.2] lg:mb-[60px]",
        className
      )}
    >
      {children}
    </h2>
  );
}

type GallerySectionProps = {
  blocks: string[][];
  className?: string;
};

function GallerySection({
  blocks,
  className = "",
}: GallerySectionProps) {
  return (
    <section
      className={cn(
        "w-screen mt-[50px] mb-[30px]",
        className
      )}
    >
      <PicturesGrid blocks={blocks} />
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-[830px] flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center">
          <Section>
            <p className="text-right uppercase font-semibold text-[24px] leading-[26px]
                lg:text-[28px] lg:leading-[1.2]">
              В нашей истории<br/>
              <span className="italic">Новая глава</span><br/>
              – мы становимся<br/>
              семьей
            </p>
          </Section>

          <Section>
            <div className="z-20 relative">
              <SectionTitle>
                Дорогие<br />родные и&nbsp;друзья
              </SectionTitle>

              <div className="flex flex-col gap-5 text-[16px] leading-[1.4] lg:text-[22px]">
                <p>
                  Мы приняли важное решение – идти по&nbsp;жизни вместе,
                  поддерживая и вдохновляя друг друга каждый день.
                </p>
                <p>
                  Этот особенный день нам хочется провести в&nbsp;кругу самых
                  близких людей, и&nbsp;мы будем счастливы, если вы разделите
                  его вместе с&nbsp;нами.
                </p>
              </div>
            </div>

            <div className="absolute w-[173px] h-[175px] z-0 -top-[15px] translate-x-1/2 left-[80px] lg:left-[200px] heart-beat">
              <Image
                alt="Сердечко"
                src="/images/heart.svg"
                fill
                style={{ objectFit: "contain" }}
                loading="eager"
              />
            </div>
          </Section>

          <GallerySection blocks={firstGalleryBlocks} />

          <Section>
            <div className="z-20 relative">
              <div className="flex items-center gap-4 mb-[45px] lg:mb-[60px]">
                <div className="flex-shrink-0 pr-1 lg:pr-6">
                  <h2 className="font-display text-[28px] uppercase leading-[1.2] lg:text-[36px] lg:hidden">
                    Дата
                  </h2>

                  <h2 className="font-display text-[28px] uppercase leading-[1.2] lg:text-[36px] hidden lg:block">
                    Сохраните <br />
                    дату
                  </h2>
                </div>

                <div className="flex-1 h-[2px] bg-black"></div>

                <div className="flex-shrink-0 pl-1 lg:pl-6">
                  <span className="font-display text-right text-[28px] lg:text-[36px] uppercase leading-[1.2] whitespace-nowrap">
                    09.07
                    <span className="hidden lg:inline">.2026</span>
                  </span>
                </div>
              </div>

              <Calendar />
            </div>
          </Section>

          <Section>
            <div className="z-20 relative">
              <SectionTitle>
                Как будет<br />
                проходить этот день
              </SectionTitle>

              <Schedule />
            </div>
          </Section>

          <Section>
            <div className="absolute w-[223px] h-[223px] z-0 -top-[25px] translate-x-1/2 -left-[150px] flower-float-wide">
              <Image
                alt="Цветочек"
                src="/images/flower.svg"
                fill
                style={{ objectFit: "contain" }}
                loading="eager"
              />
            </div>

            <div className="z-20 relative">
              <SectionTitle>
                Пожалуйста,<br />
                ответьте
              </SectionTitle>

              <div className="w-full flex justify-end">
                <p className="text-[16px] text-right mb-[30px] lg:mb-[45px] leading-[1.4] lg:text-[22px] lg:max-w-[400px] lg:leading-[1.2]">
                  Нам важно, чтобы вы подтвердили своё присутствие и ответили
                  на&nbsp;несколько вопросов
                </p>
              </div>

              <Form />
            </div>
          </Section>

          <GallerySection blocks={secondGalleryBlocks} />

          <Section>
            <SectionTitle>
              Ответы на&nbsp;Ваши<br />
              возможные вопросы
            </SectionTitle>

            <Faq />
          </Section>

          <Section>
            <SectionTitle>
              Правила поведения<br />
              на теплоходе
            </SectionTitle>

            <div className="flex flex-col gap-5 text-[16px] leading-[1.4] lg:text-[22px] mb-[45px] lg:mb-[60px]">
              <p>
                Чтобы прогулка прошла комфортно и&nbsp;безопасно, просим
                заранее ознакомиться с&nbsp;правилами поведения
                на&nbsp;теплоходе.
                <br />
                Это займёт всего несколько минут.
              </p>
            </div>

            <Rules />
          </Section>

          <Section className="w-screen !max-w-none bg-dark-gray-sec text-white rounded-tl-[20px] rounded-tr-[20px] lg:rounded-tl-[50px] lg:rounded-tr-[50px] 
            mt-[80px] py-[70px] lg:pt-[90px] lg:pb-[100px] px-0">
  
            {/* контейнер контента как у остальных секций */}
            <div className="w-full max-w-[830px] mx-auto px-[30px]">
              
              <SectionTitle>
                Контакты
              </SectionTitle>

              <p className="text-[16px] lg:text-[20px] leading-[1.5] mb-[40px] lg:mb-[60px] max-w-[700px]">
                Если у вас появятся вопросы по мероприятию, размещению,
                таймингу или организационным моментам — пожалуйста,
                свяжитесь с нами удобным способом.
              </p>

              <div
                className="
                  grid
                  grid-cols-1
                  gap-[30px]
                  lg:grid-cols-3
                  lg:gap-[40px]
                "
              >
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

                <ContactCard
                  name="Организатор"
                  role="По организационным вопросам на теплоходе"
                  // phone="+7 (999) 333-33-33"
                />
              </div>

            </div>
          </Section>

        </div>
      </main>
    </div>
  );
}