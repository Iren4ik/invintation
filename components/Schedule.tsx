export default function Schedule() {
  const scheduleItems = [
    {
      time: "20:30",
      title: "Сбор гостей перед началом церемонии",
      location: "Дворец бракосочетания №2, Санкт-Петербург, ул. Фурштатская, д. 52",
      link: "",
      textLink: "[ точка на карте ]"
    },
    {
      time: "21:00",
      title: "Церемония бракосочетания",
      location: "Момент, когда мы официально скажем друг другу «да» и станем семьёй",
    },
    {
      time: "22:30",
      title: "Сбор гостей перед отправлением теплохода",
      location: "Место посадки на теплоход будет сообщено дополнительно. Для вашего удобства после церемонии будет организовать трансфер от Дворца бракосочетания",
      // link: "https://maps.google.com/?q=Фурштатская+52",
      textLink: "[ точка на карте будет позже ]"
    },
    {
      time: "23:00",
      title: "Отправление на теплоходе",
      location: "Плывём навстречу огням ночного города, романтике и разводным мостам",
    },
    {
      time: "03:00",
      title: "Прибытие теплохода",
      location: "Васильевский остров, причал на наб. Макарова, 34",
      link: "",
      textLink: "[ точка на карте ]"
    },
  ];

  return (
    <div>
      {scheduleItems.map((item, index) => (
        <div 
          key={index} 
          className={`flex gap-[15px] py-[15px] ${index !== scheduleItems.length - 1 ? 'border-b-1' : ''}`}
        >
          <div>
            <span className="bg-beige rounded-full py-1.5 px-2.5 font-semibold text-[14px]">
              {item.time}
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="font-semibold text-[14px] leading-[16px]">
              {item.title}
            </p>
            <p className="text-[12px]">
              {item.location}
            </p>
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[12px] cursor-pointer hover:opacity-70 transition"
            >
              {item.textLink}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}