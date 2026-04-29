import {
  memoBoxSx,
  memoPaperPropsSx,
  memoTextSx,
} from "@/styles/calendar/calendarStyle";
import { RecordDataType } from "@/types/calendar/recordTableType.type";
import { Box, Button, Popover, Typography } from "@mui/material";

type DayMemoProps = {
  position: {
    top: number;
    left: number;
  } | null;
  handleClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  handleClose: () => void;
  data: RecordDataType[] | null;
};

/** 날짜 메모 컴포넌트 */
const DayMemo = (props: DayMemoProps) => {
  return (
    <Popover
      open={Boolean(props.position)}
      onClose={props.handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        props.position
          ? { top: props.position.top, left: props.position.left }
          : undefined
      }
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      PaperProps={{
        sx: memoPaperPropsSx,
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
          <Typography sx={memoTextSx}>해당 날짜에 기록이 없습니다.</Typography>
        ) : (
          props.data?.map((data) => {
            return (
              <Typography key={data.id} sx={memoTextSx}>
                {JSON.stringify(data)}
              </Typography>
            );
          })
        )}

        <Box display="flex" justifyContent="flex-end" gap={0.5}>
          <Button onClick={props.handleClose}>닫기</Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default DayMemo;
