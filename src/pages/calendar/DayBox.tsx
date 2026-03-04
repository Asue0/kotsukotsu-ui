import { Box, Button, Popover, Typography } from "@mui/material";
import { useState } from "react";
import BudgetForm from "./BudgetForm";
import { RecordDataType } from "@/types/calendar/recordTableType.type";

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

  /** 데이터 입력 제어 */

  // const [amount, setAmount] = useState<number>(0);

  return (
    <>
      <Box
        width={130}
        height={120}
        p={1}
        bgcolor={props.data?.length !== 0 ? "#d3ed7c" : ""}
        sx={{
          border: "1px solid gray",
          borderRadius: "3px",
          position: "relative",
          "&:hover": {
            boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.25)",
          },
          cursor: "pointer",
          transition: "box-shadow 0.2s ease-in-out",
        }}
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
          // onClose={handleClose} // 메모의 바깥을 클릭하면 메모가 닫히게 됨 (현재는 주석 처리로 off중)
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
              width: 300,
            },
          }}
        >
          <Box display="flex" flexDirection="column" gap={1}>
            {/** 기존 메모 데이터 */}
            {props.data?.length === 0 ? (
              <Typography sx={{ mb: 4 }}>
                해당 날짜에 기록이 없습니다.
              </Typography>
            ) : (
              <Typography sx={{ mb: 4 }}>
                {JSON.stringify(props.data)}
              </Typography>
            )}

            {/** 새로운 데이터 입력 */}
            <BudgetForm date={props.date} />

            <Box display="flex" justifyContent="flex-end" gap={0.5}>
              <Button>저장</Button>
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
