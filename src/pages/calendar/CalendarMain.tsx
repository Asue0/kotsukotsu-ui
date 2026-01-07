import { Box, Button } from "@mui/material";
import DayBox from "./DayBox";
import getCalendar from "@/mocks/getCalendar";

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
      <Button variant="contained" fullWidth>
        상단바지롱
      </Button>
      <Box display="flex" flexDirection="column" gap={1}>
        {Array.from({ length: weekNum }).map((_, week) => (
          <Box display="flex" gap={1} key={week}>
            {WEEKARR.map((_, index) => (
              <DayBox
                day={calendar[index + 7 * week].day}
                thisMonth={
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
