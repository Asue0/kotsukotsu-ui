import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Box, IconButton, Typography } from "@mui/material";

const RecordMain = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date()); // 임의로 날짜 설정

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 주의) Date 타입에서 month는 0부터 시작함(0~11)

  const moveMonth = (isNextMonth: boolean) => {
    if (isNextMonth) setCurrentDate(new Date(currentYear, currentMonth + 1));
    else setCurrentDate(new Date(currentYear, currentMonth - 1));
  };

  useEffect(() => {
    console.log(currentDate);
  }, [currentDate]);

  return (
    <Box sx={{ p: 2 }}>
      <Box display={"flex"} justifyContent={"space-between"} mb={3}>
        <Typography variant="h3">
          {currentYear}년 {currentMonth + 1}월
        </Typography>
        <Box>
          {/** 달력 이동 버튼 */}
          <Box display="flex" flexDirection="row" justifyContent="end">
            <IconButton
              size="large"
              onClick={() => {
                moveMonth(false);
              }}
            >
              <ArrowCircleLeftIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              size="large"
              onClick={() => {
                moveMonth(true);
              }}
            >
              <ArrowCircleRightIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {/** 테이블 영역 */}
      <DataTable />
    </Box>
  );
};

export default RecordMain;
