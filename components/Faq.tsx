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
            <p>Пожалуйста,  учитывайте погоду: вечером на воде может быть прохладно, поэтому советуем захватить пиджак, накидку или что-то теплое.</p>
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
          <DisclosureHeader>Как ночью добраться домой?</DisclosureHeader>
          <DisclosurePanel>
            <p className="mb-[10px]">Пожалуйста, заранее ознакомьтесь с расписанием разведения мостов и постройте маршрут с учетом того, что теплоход прибудет на <b>наб.&nbsp;Макарова,&nbsp;34, Васильевский остров в 03:00</b>.</p>
            <p>Актуальное расписание разведения мостов можно посмотреть на  <a href="https://mostotrest-spb.ru/" target="_blank"> сайте Мостотрест
              </a> или 
                в приложении Мосты Санкт-Петербурга 
                (скачать через <a href="https://play.google.com/store/apps/details?id=ru.mostotrest_spb.app" target="_blank">
                  GooglePlay
                </a> или <a href="https://apps.apple.com/ru/app/%D0%BC%D0%BE%D1%81%D1%82%D1%8B-%D0%BF%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%D0%B0/id1266806249?l=en-GB" target="_blank">
                  AppStore
              </a>).
            </p>
          </DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>
    </>
  );
}
