'use client'

import Image from "next/image";
import PicturesGrid from "@/components/ui/PicturesGrid";
import Schedule from "@/components/Schedule";
import Form from "@/components/Form";
import Faq from "@/components/Faq";
import Rules from "@/components/Rules";

export default function Home() {
  const blocks = [
    [ "/pictures/1.jpeg", "/pictures/2.jpeg", "/pictures/3.jpeg", "/pictures/4.jpeg", "/pictures/5.jpeg", "/pictures/6.jpeg", "/pictures/7.jpeg", ],
    [ "/pictures/6.jpeg", "/pictures/7.jpeg", "/pictures/1.jpeg", "/pictures/2.jpeg", "/pictures/3.jpeg", "/pictures/4.jpeg", "/pictures/5.jpeg", ],
    [ "/pictures/2.jpeg", "/pictures/3.jpeg", "/pictures/4.jpeg", "/pictures/5.jpeg", "/pictures/6.jpeg", "/pictures/7.jpeg", "/pictures/1.jpeg", ],
    [ "/pictures/3.jpeg", "/pictures/4.jpeg", "/pictures/5.jpeg", "/pictures/6.jpeg", "/pictures/7.jpeg", "/pictures/1.jpeg", "/pictures/2.jpeg", ],
    [ "/pictures/5.jpeg", "/pictures/6.jpeg", "/pictures/7.jpeg", "/pictures/1.jpeg", "/pictures/2.jpeg", "/pictures/3.jpeg", "/pictures/4.jpeg", ],
    [ "/pictures/7.jpeg", "/pictures/1.jpeg", "/pictures/2.jpeg", "/pictures/3.jpeg", "/pictures/4.jpeg", "/pictures/5.jpeg", "/pictures/6.jpeg", ],
  ];

  const blocks2 = [
    [ "/pictures/8.jpeg", "/pictures/9.jpeg", "/pictures/10.jpeg", "/pictures/11.jpeg", "/pictures/12.jpeg", "/pictures/13.jpeg", "/pictures/14.jpeg", ],
    [ "/pictures/13.jpeg", "/pictures/14.jpeg", "/pictures/8.jpeg", "/pictures/9.jpeg", "/pictures/10.jpeg", "/pictures/11.jpeg", "/pictures/12.jpeg", ],
    [ "/pictures/9.jpeg", "/pictures/10.jpeg", "/pictures/11.jpeg", "/pictures/12.jpeg", "/pictures/13.jpeg", "/pictures/14.jpeg", "/pictures/8.jpeg", ],
    [ "/pictures/10.jpeg", "/pictures/11.jpeg", "/pictures/12.jpeg", "/pictures/13.jpeg", "/pictures/14.jpeg", "/pictures/8.jpeg", "/pictures/9.jpeg", ],
    [ "/pictures/12.jpeg", "/pictures/13.jpeg", "/pictures/14.jpeg", "/pictures/8.jpeg", "/pictures/9.jpeg", "/pictures/10.jpeg", "/pictures/11.jpeg", ],
    [ "/pictures/14.jpeg", "/pictures/8.jpeg", "/pictures/9.jpeg", "/pictures/10.jpeg", "/pictures/11.jpeg", "/pictures/12.jpeg", "/pictures/13.jpeg", ],
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-[830px] flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center">
          
          <section className="w-full py-[40px] px-[30px]">
            <p className="text-right uppercase font-semibold text-[24px] leading-[26px]
                lg:text-[28px] lg:leading-[1.2]">
              В нашей истории<br/>
              <span className="italic">Новая глава</span><br/>
              – мы становимся<br/>
              семьей
            </p>
          </section>

          <section className="w-full pt-[40px] pb-[70px] lg:pb-[140px] px-[30px] relative">
            <div className="z-20 relative">
              <h2 className="font-display text-[28px] uppercase leading-[28px] mb-[45px] lg:text-[36px] lg:leading-[1.2]">
                Дорогие<br/> родные и&nbsp;друзья
                </h2>
              <div className="flex flex-col gap-5 text-[16px] leading-[1.4] lg:text-[22px] ">
                <p>Мы приняли важное решение – идти по&nbsp;жизни вместе, поддерживая и вдохновляя друг друга каждый день.</p>
                <p>Этот особенный день нам хочется провести в&nbsp;кругу самых близких людей, и&nbsp;мы будем счастливы, если вы разделите его вместе с&nbsp;нами.</p>
              </div>
            </div>
            <div className="absolute w-[173px] h-[175px] z-0 -top-[15px] translate-x-1/2 left-[80px] lg:left-[200px] heart-beat">
              <Image
                alt="Сердечко"
                src="/images/heart.svg"
                fill  
                style={{ objectFit: 'contain' }} 
                loading="eager"
              />
            </div>
          </section>

          <section className="w-screen">
            <PicturesGrid blocks={blocks}/>
          </section>

          <section className="w-full pb-[40px] pt-[70px] lg:pt-[140px] px-[30px] relative">
            {/* <div className="absolute w-[223px] h-[223px] z-0 -top-[15px] translate-x-1/2 -left-[150px]">
              <Image
                alt="Цветочек"
                src="/images/flower.svg"
                fill  
                style={{ objectFit: 'contain' }} 
              />
            </div> */}
            <div className="z-20 relative">
              <h2 className="font-display text-[28px] uppercase leading-[28px] mb-[45px] lg:text-[36px] lg:leading-[1.2]">
                Как будет<br/> проходить этот день
              </h2>
              <Schedule />
            </div>
          </section>

          <section className="w-full pb-[40px] pb-[70px] lg:pb-[140px] px-[30px] relative">
            <div className="absolute w-[223px] h-[223px] z-0 -top-[25px] translate-x-1/2 -left-[150px] flower-float-wide">
              <Image
                alt="Цветочек"
                src="/images/flower.svg"
                fill  
                style={{ objectFit: 'contain' }} 
                loading="eager"
              />
            </div>
            <div className="z-20 relative">
              <h2 className="font-display text-[28px] uppercase leading-[28px] mb-[45px] lg:text-[36px] lg:leading-[1.2]">
                Пожалуйста,<br/> ответьте
              </h2>
              <div className="w-full flex justify-end">
                <p className="text-[16px] text-right mb-[30px] lg:mb-[45px] leading-[1.4] lg:text-[22px] lg:max-w-[400px] lg:leading-[1.2]">
                  Нам важно, чтобы вы подтвердили своё присутствие и ответили на&nbsp;несколько вопросов
                </p>
              </div>
              <Form />
            </div>
          </section>

          <section className="w-screen">
            <PicturesGrid blocks={blocks2}/>
          </section>

          <section className="w-full pb-[40px] pt-[70px] lg:pt-[140px] px-[30px]">
            <h2 className="font-display text-[28px] uppercase leading-[28px] mb-[45px] lg:text-[36px] lg:leading-[1.2]">
              Ответы на&nbsp;Ваши<br/> возможные вопросы
            </h2>
            <Faq />
          </section>

          <section className="w-full py-[40px] px-[30px]">
            <div className="flex flex-col gap-[35px]">
              <h2 className="font-display text-[28px] uppercase leading-[28px] lg:text-[36px] lg:leading-[1.2]">
                Правила поведения<br/> на теплоходе
              </h2>
              <div className="flex flex-col gap-5 text-[16px] leading-[1.4] lg:text-[22px] ">
                <p>Чтобы прогулка прошла комфортно и&nbsp;безопасно, просим заранее 
                  ознакомиться с&nbsp;правилами поведения на&nbsp;теплоходе. <br/>
                  Это займёт всего несколько минут.</p>
              </div>
              <Rules />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
