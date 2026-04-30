import {
  dialogContainerBoxSx,
  dialogDetailDataBoxSx,
  dialogRecordDataBoxSx,
  dialogTextAreaBoxSx,
  memoTextSx,
} from "@/styles/calendar/calendarStyle";
import { RecordDataType } from "@/types/calendar/recordTableType.type";
import {
  Box,
  Button,
  Dialog,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import ImageUpload from "./ImageUpload";

export interface DayDialogProps {
  open: boolean;
  onClose: () => void;
  data: RecordDataType[];
  date: Date;
}

/** 다이알로그 컴포넌트 */
export const DayDialog = (props: DayDialogProps) => {
  const { onClose, open, data, date } = props;

  /** 이미지 업로드 관련 */

  return (
    /* Dialog 크기
        "xs" (≈444px)
        "sm" (≈600px) ← 기본
        "md" (≈900px)
        "lg" (≈1200px)
        "xl" (≈1536px)
        false (제한 없음)
     */
    <Dialog maxWidth="md" onClose={onClose} open={open}>
      <Box sx={dialogContainerBoxSx}>
        <Box sx={{ width: "90%", height: "80%", display: "flex" }}>
          {/** 왼쪽 컨텐츠 (수입 지출 메모) 영역 */}
          <Box sx={dialogRecordDataBoxSx}>
            {/* justifyContent: "center" 효과를 위해 flexGrow 1의 박스 두개를 삽입 */}
            <Box sx={{ flexGrow: 1 }} />
            {data.length !== 0 ? (
              <>
                <h2>수입</h2>
                <Typography sx={memoTextSx}>
                  {data
                    .filter(
                      (income: RecordDataType) => income.category === "income",
                    )
                    .map(
                      (income: RecordDataType) =>
                        `${income.particulars}: ${income.amount}`,
                    )}
                </Typography>
                <h2>지출</h2>
                <Typography sx={memoTextSx}>
                  {data
                    .filter(
                      (expense: RecordDataType) =>
                        expense.category === "expense",
                    )
                    .map(
                      (expense: RecordDataType) =>
                        `${expense.particulars}: ${expense.amount}`,
                    )}
                </Typography>
              </>
            ) : (
              <Typography>수입/지출 기록이 없습니다.</Typography>
            )}
            <Box sx={{ flexGrow: 1 }} />
          </Box>
          {/** 오른쪽 컨텐츠(이미지 업로드 / 세부 내용 적기) 영역 */}
          <Box sx={dialogDetailDataBoxSx}>
            <h2>{dayjs(date).format("MM/DD/YYYY")}</h2>
            <ImageUpload />
            <Box sx={dialogTextAreaBoxSx}>
              <TextareaAutosize
                style={{ height: "100%", resize: "none" }}
                placeholder="세부 내용 입력"
              />
              <Button variant="contained" size="small">
                등록
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
