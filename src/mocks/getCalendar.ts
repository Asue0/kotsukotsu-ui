import CalendarType from "@/types/calendar/calendarType.type";

// 달력 페이지 데이터 제작 함수
const getCalendar = (year: number, month: number) => {
  // 해당 년월에 1일이 무슨 요일인지를 구함
  const firstDay = new Date(year, month, 1).getDay();
  // 해당 년월의 마지막날이 30일인지 31일인지를 구함
  const lastDate = new Date(year, month + 1, 0).getDate();

  // 해당 년월의 마지막날이 무슨 요일인지를 구함
  const lastDay = new Date(year, month + 1, 0).getDay();

  const days: CalendarType[] = [];

  // 달력 첫줄에 표기될 이전 달의 날짜를 구함
  if (firstDay != 0) {
    for (let i = firstDay; i > 0; i--) {
      days.push({
        date: new Date(year, month, 1 - i),
        data: null,
      });
    }
  }

  // 이번달 날짜 삽입
  for (let i = 1; i <= lastDate; i++) {
    days.push({ date: new Date(year, month, i), data: null });
  }

  // 달력 마지막줄에 표기될 다음 달의 날짜를 구함
  if (lastDay != 6) {
    for (let i = 1; i <= 6 - lastDay; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        data: null,
      });
    }
  }

  return days;
};

export default getCalendar;
