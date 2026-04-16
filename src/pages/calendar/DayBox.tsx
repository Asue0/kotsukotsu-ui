import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { RecordDataType } from "@/types/calendar/recordTableType.type";
import { modalBoxSx } from "@/styles/calendar/calendarStyle";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DayMemo from "./DayMemo";
import { DayDialog } from "./DayDialog";

type DayBoxProps = {
  date: Date;
  isThisMonth: boolean;
  data: RecordDataType[] | null;
};

const DayBox = (props: DayBoxProps) => {
  // modal
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  // memo 등장 위치 관련
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  /** 모달(dialog) 제어 */
  const handleDialogClickOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  /** memo(popover) 제어 */
  const handleMemoClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation(); // 이벤트 버블링을 막기 위함
    setPosition({
      top: e.clientY,
      left: e.clientX,
    });
  };

  const handleMemoClose = () => {
    setPosition(null);
  };

  return (
    <>
      <Box
        bgcolor={props.data?.length !== 0 ? "#d3ed7c" : ""}
        sx={modalBoxSx}
        onClick={handleDialogClickOpen}
      >
        <Typography color={props.isThisMonth ? "" : "textDisabled"}>
          {props.date.getDate()}
        </Typography>
        <SearchOutlinedIcon
          sx={{
            visibility: props.isThisMonth ? "" : "hidden",
            position: "absolute", // 위치 조정을 위해 absolute를 사용
            bottom: 2,
            right: 2,
            borderRadius: "50%",
            opacity: 0.5,
          }}
          onClick={handleMemoClick}
        />
      </Box>
      <DayDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        data={props.data}
      />
      {/** 메모 영역 */}
      {props.isThisMonth ? (
        <DayMemo
          position={position}
          handleClick={handleMemoClick}
          handleClose={handleMemoClose}
          data={props.data}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default DayBox;
