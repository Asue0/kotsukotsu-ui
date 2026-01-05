import { Box, Button } from "@mui/material";
import DayBox from "./DayBox";
import getCalendar from "@/mocks/getCalendar";

const CalendarMain = () => {
  const weekArr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const mockCalendar = getCalendar(2026, 1);
  const weekNum = mockCalendar.length / 7;

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
          <Box display="flex" gap={1}>
            {weekArr.map((_, index) => (
              <DayBox day={mockCalendar[index + 7 * week]} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CalendarMain;
