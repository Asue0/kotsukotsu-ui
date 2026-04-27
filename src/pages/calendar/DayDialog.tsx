import {
  dialogContainerBoxSx,
  dialogDetailDataBoxSx,
  dialogRecordDataBoxSx,
  memoTextSx,
} from "@/styles/calendar/calendarStyle";
import { RecordDataType } from "@/types/calendar/recordTableType.type";
import { Box, Dialog, Typography } from "@mui/material";
import dayjs from "dayjs";

export interface DayDialogProps {
  open: boolean;
  onClose: () => void;
  data: RecordDataType[];
  date: Date;
}

export const DayDialog = (props: DayDialogProps) => {
  const { onClose, open, data, date } = props;

  return (
    /** Dialog 크기
     *  "xs" (≈444px)
        "sm" (≈600px) ← 기본
        "md" (≈900px)
        "lg" (≈1200px)
        "xl" (≈1536px)
        false (제한 없음)
     */
    <Dialog maxWidth="md" onClose={onClose} open={open}>
      <Box sx={dialogContainerBoxSx}>
        <Box sx={{ width: "90%", height: "80%", display: "flex" }}>
          <Box sx={dialogRecordDataBoxSx}>
            {data.length !== 0 ? (
              <>
                <h2>시작점</h2>
                <Typography sx={memoTextSx}>
                  {JSON.stringify(data, null, 2)}
                </Typography>
              </>
            ) : (
              <Typography>수입/지출 기록이 없습니다.</Typography>
            )}
          </Box>
          <Box sx={dialogDetailDataBoxSx}>
            <h2>{dayjs(date).format("MM/DD/YYYY")}</h2>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
