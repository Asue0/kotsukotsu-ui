import { Box, Typography } from "@mui/material";

type propsType = {
  day: number;
  isThisMonth: boolean;
  data: string | null;
};

const DayBox = (props: propsType) => {
  return (
    <Box
      width={130}
      height={120}
      p={1}
      bgcolor={props.data !== null ? "#d3ed7c" : ""}
      sx={{
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      <Typography color={props.isThisMonth ? "" : "textDisabled"}>
        {props.day}
      </Typography>
    </Box>
  );
};

export default DayBox;
