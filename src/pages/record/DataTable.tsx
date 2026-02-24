import { useState, useCallback } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import TableRowData from "@/types/calendar/recordTableType.type";
import TableRowComponent from "./TableRow";
import { checkboxCellSx, headerCellSx } from "@/styles/record/tableStyle";

// 저장용 데이터 타입 (selected 필드 제외)
interface SaveData {
  id: string;
  date: Dayjs | null;
  particulars: string;
  amount: string;
  category: string;
  memo: string;
}

// API 저장 함수 placeholder - 나중에 실제 API 함수로 교체
const saveRecordApi = async (data: SaveData[]): Promise<void> => {
  // TODO: 실제 API 호출 구현
  // 예시:
  // await axios.post('/api/records', data);
  console.log("API 호출:", data);
};

const DataTable = () => {
  const [rows, setRows] = useState<TableRowData[]>([
    {
      id: "1",
      selected: false,
      date: dayjs(),
      particulars: "",
      amount: "",
      category: "",
      memo: "초기데이터 입니다.",
    },
  ]);

  // 부모 컴포넌트에서 호출할 수 있는 함수 노출
  // useImperativeHandle(ref, () => ({
  //   getData: () => rows,
  // }));

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setRows((prev) => prev.map((row) => ({ ...row, selected: checked })));
  };

  const handleSelectRow = useCallback((id: string, checked: boolean) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, selected: checked } : row)),
    );
  }, []);

  const handleDateChange = useCallback((id: string, newDate: Dayjs | null) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, date: newDate } : row)),
    );
  }, []);

  const handleFieldChange = useCallback(
    (
      id: string,
      field: keyof Omit<TableRowData, "id" | "selected" | "date">,
      value: string,
    ) => {
      setRows((prev) =>
        prev.map((row) => (row.id === id ? { ...row, [field]: value } : row)),
      );
    },
    [],
  );

  const handleAddRow = () => {
    const newId = String(Date.now());
    setRows((prev) => [
      ...prev,
      {
        id: newId,
        selected: false,
        date: dayjs(),
        particulars: "",
        amount: "",
        category: "",
        memo: "",
      },
    ]);
  };

  const handleDeleteSelected = () => {
    setRows((prev) => prev.filter((row) => !row.selected));
  };

  const selectedCount = rows.filter((row) => row.selected).length;

  // 저장 버튼 클릭 핸들러
  const handleSave = useCallback(async () => {
    // selected 필드 제외하고 데이터 변환
    const dataToSave: SaveData[] = rows.map((row) => ({
      id: row.id,
      date: row.date,
      particulars: row.particulars,
      amount: row.amount,
      category: row.category,
      memo: row.memo,
    }));

    await saveRecordApi(dataToSave);
  }, [rows]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 2 }}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", border: "1px solid #e0e0e0" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ ...checkboxCellSx, backgroundColor: "#f5f5f5" }}
                >
                  <Checkbox
                    checked={
                      rows.length > 0 && rows.every((row) => row.selected)
                    }
                    indeterminate={
                      selectedCount > 0 && selectedCount < rows.length
                    }
                    onChange={handleSelectAll}
                    size="small"
                  />
                </TableCell>
                <TableCell sx={headerCellSx}>날짜</TableCell>
                <TableCell sx={headerCellSx}>거래내역</TableCell>
                <TableCell sx={headerCellSx}>금액</TableCell>
                <TableCell sx={headerCellSx}>분류</TableCell>
                <TableCell sx={headerCellSx}>메모</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRowComponent
                  key={row.id}
                  row={row}
                  onSelectChange={handleSelectRow}
                  onDateChange={handleDateChange}
                  onFieldChange={handleFieldChange}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: 1,
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleAddRow}
          >
            항목 추가
          </Button>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained" onClick={handleSave}>
              저장
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteSelected}
              disabled={selectedCount === 0}
            >
              선택 삭제 ({selectedCount})
            </Button>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default DataTable;
