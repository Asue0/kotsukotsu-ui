import { Box, Button, Popover, TextField, Typography } from "@mui/material";
import { useState } from "react";

type propsType = {
  day: number;
  isThisMonth: boolean;
  data: string[] | null;
};

const DayBox = (props: propsType) => {
  /** popover 제어 */
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      top: e.clientY,
      left: e.clientX,
    });
  };

  const handleClose = () => {
    setPosition(null);
  };

  return (
    <>
      <Box
        width={130}
        height={120}
        p={1}
        bgcolor={props.data !== null ? "#d3ed7c" : ""}
        sx={{
          border: "1px solid gray",
          borderRadius: "5px",
          position: "relative",
        }}
        onClick={handleClick}
      >
        <Typography color={props.isThisMonth ? "" : "textDisabled"}>
          {props.day}
        </Typography>
      </Box>
      {/** 메모 영역 */}
      <Popover
        open={Boolean(position)}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          position ? { top: position.top, left: position.left } : undefined
        }
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#FFF9C4",
            padding: 2,
            width: 200,
          },
        }}
      >
        {!props.data ? (
          <Typography>해당 날짜에 기록이 없습니다.</Typography>
        ) : (
          <Typography>데이터가 있습니다.</Typography>
        )}
        <TextField multiline fullWidth placeholder="메모" variant="standard" />
        <Box display="flex" justifyContent="flex-end" gap={0.5}>
          <Button>저장</Button>
          <Button>닫기</Button>
        </Box>
      </Popover>
    </>
  );
};

export default DayBox;
