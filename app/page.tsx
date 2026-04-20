
'use client'
import Image from "next/image";
import Schedule from "@/components/Schedule";
import Form from "@/components/Form";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between bg-white">
        <div className="w-full flex flex-col items-center">
          <section className="w-full py-[40px] px-[30px]">
            <p className="text-right uppercase font-semibold text-[24px] leading-[26px]">
              В нашей истории<br/>
              <span className="italic">Новая глава</span><br/>
              – мы становимся<br/>
              семьей
            </p>
          </section>

          <section className="w-full py-[40px] px-[45px] relative">
            <div className="z-20 relative">
              <h2 className="font-display text-[28px] uppercase leading-[28px] mb-[45px]">Дорогие родные и&nbsp;друзья</h2>
              <div className="flex flex-col gap-5 text-[16px] leading-[1.4]">
                <p>Мы приняли важное решение – идти по&nbsp;жизни вместе, поддерживая и вдохновляя друг друга каждый день.</p>
                <p>Этот особенный день нам хочется провести в&nbsp;кругу самых близких людей, и&nbsp;мы будем счастливы, если вы разделите его вместе с&nbsp;нами.</p>
              </div>
            </div>
            <div className="absolute w-[173px] h-[175px] z-0 -top-[15px] translate-x-1/2 left-[80px]">
              <Image
                alt="Сердечко"
                src="/images/heart.svg"
                fill  
                style={{ objectFit: 'contain' }} 
              />
            </div>
          </section>

          <section className="w-full py-[40px] px-[30px] relative">
            {/* <div className="absolute w-[223px] h-[223px] z-0 -top-[15px] translate-x-1/2 -left-[150px]">
              <Image
                alt="Цветочек"
                src="/images/flower.svg"
                fill  
                style={{ objectFit: 'contain' }} 
              />
            </div> */}
            <div className="z-20 relative">
              <h2 className="font-display text-[28px] uppercase leading-[28px] mb-[45px]">Как будет проходить этот день</h2>
              <Schedule />
            </div>
          </section>

          <section className="w-full py-[40px] px-[30px] relative">
            <div className="absolute w-[223px] h-[223px] z-0 -top-[15px] translate-x-1/2 -left-[150px]">
              <Image
                alt="Цветочек"
                src="/images/flower.svg"
                fill  
                style={{ objectFit: 'contain' }} 
              />
            </div>
            <div className="z-20 relative">
              <h2 className="font-display text-[28px] uppercase leading-[28px] mb-[45px]">Пожалуйста, ответьте</h2>
              <p className="text-[16px] text-right mb-[30px] leading-[1.4]">Нам важно, чтобы вы подтвердили своё присутствие и ответили на&nbsp;несколько вопросов</p>
              <Form />
            </div>
          </section>

          <section className="w-full py-[40px] px-[30px]">
            <h2 className="font-display text-[28px] uppercase leading-[28px] mb-[45px]">Ответы <br/> на Ваши возможные вопросы</h2>
            <Faq />
          </section>

          <section className="w-full py-[40px] px-[30px]">
            <div className="flex flex-col gap-[15px]">
              <p className="text-right uppercase font-semibold text-[24px] leading-[26px]">
                Чтобы прогулка прошла комфортно и&nbsp;безопасно, просим заранее ознакомиться с&nbsp;правилами поведения на&nbsp;теплоходе  
              </p>
              <p className="text-right mb-3 leading-[1.4]">Это займёт всего <br/> несколько минут</p>
              <a href="/rules">[  правила  ]</a>
            </div>
          </section>
          
        
        </div>
      </main>
    </div>
  );
}
