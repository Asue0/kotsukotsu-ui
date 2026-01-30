import { Box, Button, IconButton, Typography } from "@mui/material";
import DayBox from "./DayBox";
import getCalendar from "@/mocks/getCalendar";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useState } from "react";
import { useDidMountEffect } from "@/hooks/useDidMountEffect";
import CalendarType from "@/types/calendar/calendarType.type";

const CalendarMain = () => {
  const [mockDate, setMockDate] = useState(new Date()); // 임의로 날짜 설정

  const currentYear = mockDate.getFullYear();
  const currentMonth = mockDate.getMonth(); // 주의) Date 타입에서 month는 0부터 시작함(0~11)

  const WEEKARR = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const [calendar, setCalendar] = useState<CalendarType[]>(
    getCalendar(currentYear, currentMonth),
  );

  console.log(currentYear);
  console.log(currentMonth);

  const weekNum = calendar.length / 7;

  const moveMonth = (isNextMonth: boolean) => {
    if (isNextMonth) setMockDate(new Date(currentYear, currentMonth + 1));
    else setMockDate(new Date(currentYear, currentMonth - 1));
  };

  useDidMountEffect(() => {
    setCalendar(getCalendar(currentYear, currentMonth));
  }, [mockDate]);

  return (
    <Box
      display="flex"
      sx={{ width: "100%", height: "100%" }}
      alignItems="center"
      // justifyContent="center"
      flexDirection="column"
      gap={2}
    >
      <Typography variant="h3">
        {currentYear}년 {currentMonth + 1}월
      </Typography>

      <Box display="flex" flexDirection="column" gap={1}>
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
            {WEEKARR.map((_, index) => (
              <DayBox
                date={calendar[index + 7 * week].date}
                // 이번 달인지 체크
                isThisMonth={
                  calendar[index + 7 * week].date.getMonth() === currentMonth
                    ? true
                    : false
                }
                data={calendar[index + 7 * week].data}
                key={index}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CalendarMain;
