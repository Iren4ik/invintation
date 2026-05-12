export default function Schedule() {
  
  const scheduleItems = [
    {
      time: "20:30",
      title: "Сбор гостей перед началом церемонии",
      location: "Дворец бракосочетания\u00A0№2, Санкт-Петербург, ул.\u00A0Фурштатская, д.\u00A052",
      link: "https://yandex.ru/maps/org/dvorets_brakosochetaniya_2/1063007010/?ll=30.364871%2C59.945392&z=17",
      textLink: "точка на карте"
    },
    {
      time: "21:00",
      title: "Церемония бракосочетания",
      location: "Момент, когда мы скажем друг другу «да» и\u00A0станем мужем и\u00A0женой",
    },
    {
      time: "22:30",
      title: "Сбор гостей перед отправлением теплохода",
      location: "Место посадки на теплоход будет сообщено дополнительно. Для вашего удобства после церемонии будет организован трансфер от\u00A0Дворца бракосочетания",
      // link: "https://maps.google.com/?q=Фурштатская+52",
      textLink: "точка на карте будет позже"
    },
    {
      time: "23:00",
      title: "Отправление на теплоходе",
      location: "Плывём навстречу огням ночного города, романтике и\u00A0разводным мостам",
    },
    {
      time: "03:00",
      title: "Прибытие теплохода",
      location: "Васильевский остров, причал на\u00A0наб.\u00A0Макарова,\u00A034",
      link: "https://yandex.ru/maps/2/saint-petersburg/search/%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%2C%20%D0%BF%D1%80%D0%B8%D1%87%D0%B0%D0%BB%20%D0%BD%D0%B0%20%D0%BD%D0%B0%D0%B1.%20%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%B2%D0%B0%2C%2034/?ll=30.267238%2C59.951274&sll=30.364871%2C59.945392&sspn=0.014452%2C0.004376&z=14.23",
      textLink: "точка на карте"
    },
  ];

  

  return (
    <div>
      {scheduleItems.map((item, index) => (
        <div 
          key={index} 
          className={`flex gap-[15px] lg:gap-[35px] py-[15px] lg:py-[20px] ${index !== scheduleItems.length - 1 ? 'border-b-1' : ''}`}
        >
          <div>
            <span className="bg-beige rounded-full py-1.5 lg:py-2.5 px-2.5 lg:px-4 font-semibold text-[14px] lg:text-[22px]">
              {item.time}
            </span>
          </div>
          <div className="flex flex-col gap-2.5 lg:gap-5 pt-1.5 lg:pt-2.5">
            <p className="font-semibold text-[14px] leading-[16px] lg:text-[22px]">
              {item.title}
            </p>
            <p className="text-[12px] lg:text-[20px]">
              {item.location}
            </p>
            {item.textLink && (
              item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[12px] lg:text-[18px]"
                >
                  [ <span className="underline">{item.textLink}</span> ]
                </a>
              ) : (
                <p className="font-semibold text-[12px] lg:text-[18px]">
                  [ {item.textLink} ]
                </p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}