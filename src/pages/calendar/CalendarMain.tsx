import { Box, Button, IconButton, Typography } from "@mui/material";
import DayBox from "./DayBox";
import getCalendar from "@/mocks/getCalendar";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const CalendarMain = () => {
  const MOCKDATE = { year: 2026, month: 1 }; // 임의로 날짜 설정

  const WEEKARR = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const calendar = getCalendar(MOCKDATE.year, MOCKDATE.month);
  const weekNum = calendar.length / 7;

  console.log(calendar);

  return (
    <Box
      display="flex"
      sx={{ width: "100%", height: "100%" }}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={2}
    >
      <Typography variant="h3">
        {MOCKDATE.year}년 {MOCKDATE.month}월
      </Typography>

      <Box display="flex" flexDirection="column" gap={1}>
        {/** 달력 이동 버튼 */}
        <Box display="flex" flexDirection="row" justifyContent="end">
          <IconButton size="large">
            <ArrowCircleLeftIcon fontSize="inherit" />
          </IconButton>
          <IconButton size="large">
            <ArrowCircleRightIcon fontSize="inherit" />
          </IconButton>
        </Box>

        {/** 요일 버튼 */}
        <Box display="flex" flexDirection="row" gap={1}>
          {WEEKARR.map((day) => (
            <Button fullWidth variant="contained">
              {day}
            </Button>
          ))}
        </Box>

        {/** 달력 날짜 */}
        {Array.from({ length: weekNum }).map((_, week) => (
          <Box display="flex" gap={1} key={week}>
            {WEEKARR.map((_, index) => (
              <DayBox
                day={calendar[index + 7 * week].day}
                // 이번 달인지 체크
                isThisMonth={
                  calendar[index + 7 * week].month === MOCKDATE.month
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
