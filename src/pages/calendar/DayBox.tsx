import { Box, Typography } from "@mui/material";

type propsType = {
  day: number;
  thisMonth: boolean;
  data: string | null;
};

const DayBox = (props: propsType) => {
  return (
    <Box
      width={150}
      height={150}
      p={1}
      bgcolor={props.data !== null ? "#d3ed7c" : ""}
      sx={{
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      <Typography color={props.thisMonth ? "" : "textDisabled"}>
        {props.day}
      </Typography>
    </Box>
  );
};

export default DayBox;
