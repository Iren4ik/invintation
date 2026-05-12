import Image from 'next/image';

export default function Calendar() {
  const year = 2026;
  const month = 6; // Июль (0-индекс)
  const targetDay = 9;
  
  const firstDayOfMonth = new Date(year, month, 1);
  const startWeekday = firstDayOfMonth.getDay();
  const mondayBasedStart = startWeekday === 0 ? 6 : startWeekday - 1;
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  
  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < mondayBasedStart; i++) {
    calendarCells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }
  
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    weeks.push(calendarCells.slice(i, i + 7));
  }
  
  // Типизированная проверка выходного дня
  const isWeekend = (day: number | null, weekIndex: number, dayIndex: number) => {
    if (day === null) return false;
    const absoluteIndex = weekIndex * 7 + dayIndex;
    const dayOfWeek = absoluteIndex % 7; // 0=Пн, 5=Сб, 6=Вс
    return dayOfWeek === 5 || dayOfWeek === 6;
  };
  
  const isTargetDate = (day: number) => day === targetDay;
  
  const getWeekdayColor = (idx: number) => {
    return idx === 5 || idx === 6 ? 'text-zinc-400' : 'text-black';
  };
  
  return (
    <div className="flex gap-3 w-full items-center text-[14px] lg:text-[18px]">
      <div className="flex-1">
        <div className="grid grid-cols-7 gap-1 mb-4">
          {weekdays.map((day, idx) => (
            <div
              key={idx}
              className={`text-center font-bold uppercase tracking-wide py-1 ${getWeekdayColor(idx)}`}
            >
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {weeks.flatMap((week, weekIdx) =>
            week.map((day, dayIdx) => {
              const isEmpty = day === null;
              const isTarget = !isEmpty && isTargetDate(day);
              const weekend = !isEmpty && isWeekend(day, weekIdx, dayIdx);
              
              if (isEmpty) {
                return <div key={`empty-${weekIdx}-${dayIdx}`} />;
              }
              
              return (
                <div
                  key={`day-${day}`}
                  className={`
                    relative flex items-center justify-center py-2 rounded-full
                    ${isTarget 
                      ? 'text-black font-bold text-[16px] lg:text-[26px]' 
                      : weekend 
                        ? 'text-zinc-400' 
                        : 'text-black'
                    }
                  `}
                >
                  {isTarget && (
                    <div className="absolute inset-0 w-full h-full star-rotate">
                      <Image
                        alt="Сердечко"
                        src="/images/star.svg"
                        fill
                        style={{ objectFit: 'contain' }}
                        loading="eager"
                      />
                    </div>
                  )}
                  <span className="relative z-10">{day}</span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}