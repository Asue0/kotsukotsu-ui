import { Box, Button, Popover, Typography } from "@mui/material";
import { useState } from "react";
import { RecordDataType } from "@/types/calendar/recordTableType.type";
import {
  memoBoxSx,
  modalBoxSx,
  modalMemoSx,
  modalPaperPropsSx,
} from "@/styles/calendar/calendarStyle";

type DayBoxProps = {
  date: Date;
  isThisMonth: boolean;
  data: RecordDataType[] | null;
};

const DayBox = (props: DayBoxProps) => {
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
        bgcolor={props.data?.length !== 0 ? "#d3ed7c" : ""}
        sx={modalBoxSx}
        onClick={handleClick}
      >
        <Typography color={props.isThisMonth ? "" : "textDisabled"}>
          {props.date.getDate()}
        </Typography>
      </Box>
      {/** 메모 영역 */}
      {props.isThisMonth ? (
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
            sx: modalPaperPropsSx,
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            width={"100%"}
            gap={1}
            sx={memoBoxSx}
          >
            {/** 기존 메모 데이터 */}
            {props.data?.length === 0 ? (
              <Typography sx={modalMemoSx}>
                해당 날짜에 기록이 없습니다.
              </Typography>
            ) : (
              props.data?.map((data) => {
                return (
                  <Typography key={data.id} sx={modalMemoSx}>
                    {JSON.stringify(data)}
                  </Typography>
                );
              })
            )}

            <Box display="flex" justifyContent="flex-end" gap={0.5}>
              <Button onClick={handleClose}>닫기</Button>
            </Box>
          </Box>
        </Popover>
      ) : (
        <></>
      )}
    </>
  );
};

export default DayBox;
