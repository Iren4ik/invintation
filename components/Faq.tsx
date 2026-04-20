import {DisclosureGroup} from '@/components/ui/Disclosure/DisclosureGroup';
import {Disclosure, DisclosureHeader, DisclosurePanel} from '@/components/ui/Disclosure/Disclosure';

export default function Faq() {
  return (
    <>
      <DisclosureGroup allowsMultipleExpanded>
        <Disclosure>
          <DisclosureHeader>Есть ли дресс-код?</DisclosureHeader>
          <DisclosurePanel>
            <p className="mb-[10px]">Вечерний, нарядный, элегантный стиль ✨. Определенной цветовой палитры нет, но мы будем рады, если вы выберете образы в сдержанных, спокойных оттенках.</p>
            <p>Пожалуйста,  учитывайте погоду: вечером и на воде может быть прохладно, поэтому советуем захватить пиджак, накидку или что-то теплое.</p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureHeader>Во сколько лучше приехать?</DisclosureHeader>
          <DisclosurePanel>
            <p className="mb-[10px]">Начало церемонии в 21:00. Рекомендуем приехать на церемонию <b>к 20:30</b>.</p>
            <p>Теплоход отходит от причала в 23:00. Рекомендуем приехать <b>к 22:30, так как посадка длится всего 15 минут</b> ⏰. </p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureHeader>Как быть с цветами?</DisclosureHeader>
          <DisclosurePanel>
            <p className="mb-[10px]">Мы будем благодарны, если вы откажитесь от букетов - у нас дома только одна ваза (и это не намек). Если хочется добавить символичный жест, вы можете принести по одному цветочку, который у вас ассоциируется с нами.</p>
            <p>Также просим не дарить алкоголь - печень у нас тоже одна 😊.</p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureHeader>Пройдёт ли прогулка на теплоходе, если пойдёт дождь?</DisclosureHeader>
          <DisclosurePanel>
            <p>Да, прогулка состоится в любую погоду: у теплохода есть закрытый салон, а на открытой палубе есть навес.</p>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureHeader>Есть ли правила поведения на теплоходе?</DisclosureHeader>
          <DisclosurePanel>
            <p className="mb-[10px]">Да, на борту действуют простые правила безопасности и поведения. Пожалуйста, не забудьте с ними ознакомиться.</p>
            <a className="text-right" href="/rules">[ правила ]</a>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureHeader>Как ночью добраться домой?</DisclosureHeader>
          <DisclosurePanel>
            <p className="mb-[10px]">Пожалуйста, заранее ознакомьтесь с расписанием разведения мостов и постройте маршрут с учетом того, что теплоход прибудет на <b>наб. Макарова,  34, Васильевский остров в 03:00</b>.</p>
            <p className="mb-[10px]">Актуальное расписание разведения мостов можно посмотреть на сайте <b>Мостотрест</b> или в приложении <b>Мосты Санкт-Петербурга</b>.</p>
            <a className="text-right" href="https://mostotrest-spb.ru/">[  сайт Мостотрест  ]</a>
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>
    </>
  );
}
