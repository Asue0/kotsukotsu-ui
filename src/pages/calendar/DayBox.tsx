import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type DayBoxProps = {
  day: number;
  isThisMonth: boolean;
  data: string[] | null;
};

// const DayBox: React.FC<DayBoxProps> = ({ day }) => {
//   const handleDayClick = () => {
//     // 거래 입력 모달 열기
//     openTransactionModal(day.date);
//   };

//   return (
//     <Box onClick={handleDayClick} sx={{ cursor: 'pointer' }}>
//       {/* 날짜 표시 */}
//       <Typography>{day.date.getDate()}</Typography>

//       {/* 해당 날짜의 거래 내역 요약 */}
//       <TransactionSummary date={day.date} />
//     </Box>
//   );
// };

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

  const [budget, setBudget] = useState<string>("EXPENSES");

  const handleChange = (event: SelectChangeEvent) => {
    setBudget(event.target.value);
  };

  // const [amount, setAmount] = useState<number>(0);

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
          {!props.data ? (
            <Typography>해당 날짜에 기록이 없습니다.</Typography>
          ) : (
            <Typography>데이터가 있습니다.</Typography>
          )}

          {/** 새로운 데이터 입력 */}
          <Box display="flex" gap={1}>
            <FormControl sx={{ minWidth: 80 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={budget}
                onChange={handleChange}
                // 셀렉트 박스 내의 문자 색상 설정
                renderValue={(value) => (
                  <span style={{ fontWeight: 600 }}>
                    {value === "EXPENSES" ? "지출" : "수입"}
                  </span>
                )}
                sx={{
                  color: budget === "EXPENSES" ? "red" : "blue",
                  "& .MuiSelect-icon": {
                    color: budget === "EXPENSES" ? "red" : "blue",
                  },
                }}
              >
                <MenuItem
                  value={"EXPENSES"}
                  sx={{ color: "red", fontWeight: 600 }}
                >
                  지출
                </MenuItem>
                <MenuItem
                  value={"INCOME"}
                  sx={{ color: "blue", fontWeight: 600 }}
                >
                  수입
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              type="number"
              size="small"
              placeholder="금액"
              // value={amount}
              // onChange={handleAmountChange}
              sx={{
                "& input": {
                  color: budget === "EXPENSES" ? "red" : "blue",
                  fontWeight: 600,
                },
              }}
            />
          </Box>
          <TextField
            multiline
            fullWidth
            placeholder="메모"
            variant="standard"
          />
          <Box display="flex" justifyContent="flex-end" gap={0.5}>
            <Button>저장</Button>
            <Button onClick={handleClose}>닫기</Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default DayBox;
