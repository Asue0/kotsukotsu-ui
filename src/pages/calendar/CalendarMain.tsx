import { Box, Button, IconButton, Typography } from "@mui/material";
import DayBox from "./DayBox";
import getCalendar from "@/mocks/getCalendar";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useMemo, useState } from "react";
import { RecordDataType } from "@/types/calendar/recordTableType.type";
import mockData from "@/mocks/recordMockData";
import CalendarDataType from "@/types/calendar/calendarType.type";
import dayjs from "dayjs";
import { useDidMountEffect } from "@/hooks/useDidMountEffect";

// 변환 로직 (DB 데이터를 Map으로 변환)
const formatSchedules = (data: RecordDataType[]): CalendarDataType => {
  return data.reduce((acc, schedule) => {
    const dateKey = schedule.date.format("YYYY-MM-DD"); // "2024-03-01" 형태로 포맷
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(schedule);
    return acc;
  }, {} as CalendarDataType);
};

const CalendarMain = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date()); // 임의로 날짜 설정
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 주의) Date 타입에서 month는 0부터 시작함(0~11)

  const [calendar, setCalendar] = useState<Date[]>([]); // 각 달력의 날짜

  const [schedules, setSchedules] = useState<RecordDataType[]>([]); // DB에서 받아올 날짜별 데이터
  const scheduleMap = useMemo(() => formatSchedules(schedules), [schedules]); // DB에서 받아온 날짜별 데이터 MAP으로 포맷팅

  const WEEKARR = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const weekNum = calendar.length / 7;

  /** 날짜별 데이터 패칭 함수 */
  const fetchData = async () => {
    try {
      // fetch나 axios를 사용하여 API 엔드포인트에서 데이터를 가져옴
      // const response = await fetch('https://api.example.com/posts');
      // const data: TableRowData[] = await response.json();

      // 상태 업데이트: 받아온 데이터를 state에 저장
      const days = getCalendar(currentYear, currentMonth);
      setCalendar(days);
      setSchedules(mockData);
      console.log("패치 작동중");
    } catch (error) {
      console.error("데이터 로드 실패:", error);
    } finally {
      console.log("끝"); // 에러 방지용
    }
  };

  const moveMonth = (isNextMonth: boolean) => {
    if (isNextMonth) setCurrentDate(new Date(currentYear, currentMonth + 1));
    else setCurrentDate(new Date(currentYear, currentMonth - 1));
  };

  useDidMountEffect(() => {
    fetchData();
  }, [currentDate]);

  return (
    <Box
      display="flex"
      sx={{ width: "100%", height: "100%" }}
      alignItems="center"
      // justifyContent="center"
      flexDirection="column"
      gap={2}
    >
      <Box display="flex" flexDirection="column" gap={1}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="end"
        >
          {/** 날짜 타이틀 */}
          <Box display="flex" flexDirection="row" alignItems="end" gap={1}>
            <Typography variant="h2">{currentMonth + 1}월</Typography>
            <Typography variant="h5">{currentYear}년</Typography>
          </Box>
          {/** 달력 이동 버튼 */}
          <Box display="flex" flexDirection="row" justifyContent="end">
            <IconButton
              size="large"
              onClick={() => {
                moveMonth(false);
              }}
            >
              <ArrowCircleLeftIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              size="large"
              onClick={() => {
                moveMonth(true);
              }}
            >
              <ArrowCircleRightIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
        {/** 요일 버튼 */}
        <Box display="flex" flexDirection="row" gap={1}>
          {WEEKARR.map((day) => (
            <Button
              fullWidth
              variant="contained"
              sx={{ cursor: "default" }}
              key={day}
            >
              {day}
            </Button>
          ))}
        </Box>

        {/** 달력 날짜 */}
        {Array.from({ length: weekNum }).map((_, week) => (
          <Box display="flex" gap={1} key={week}>
            {WEEKARR.map((_, index) => {
              const day = calendar[index + 7 * week];
              const dayKey = dayjs(day).format("YYYY-MM-DD");
              const daySchedules = scheduleMap[dayKey] || [];
              return (
                <DayBox
                  date={day}
                  // 이번 달인지 체크
                  isThisMonth={day.getMonth() === currentMonth ? true : false}
                  data={daySchedules}
                  key={JSON.stringify(day)}
                />
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CalendarMain;
