import { Box, Button } from "@mui/material";
import DayBox from "./DayBox";

const CalendarMain = () => {
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
      <Box display="flex"> </Box>
      <DayBox />
    </Box>
  );
};

export default CalendarMain;
