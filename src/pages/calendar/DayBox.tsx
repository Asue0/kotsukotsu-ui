import { Box } from "@mui/material";

const DayBox = ({ day }: { day: number }) => {
  return (
    <Box
      width={150}
      height={150}
      sx={{ border: "1px solid gray", borderRadius: "5px" }}
    >
      {day}
    </Box>
  );
};

export default DayBox;
