import { ChangeEvent, useState } from "react";
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
  TextField,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export interface TableRowData {
  id: string;
  selected: boolean;
  date: Dayjs | null;
  particulars: string;
  amount: string;
  category: string;
  memo: string;
}

const CATEGORIES = [
  { value: "food", label: "식비" },
  { value: "transport", label: "교통비" },
  { value: "entertainment", label: "여가" },
  { value: "shopping", label: "쇼핑" },
  { value: "etc", label: "기타" },
];

// 입력 영역 스타일
const cellInputSx = {
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "8px 12px",
    fontSize: "0.875rem",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    "& fieldset": {
      borderColor: "#e0e0e0",
    },
    "&:hover fieldset": {
      borderColor: "#9e9e9e",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1976d2",
      borderWidth: 1,
    },
  },
};

// 헤더 스타일
const headerCellSx = {
  backgroundColor: "#f5f5f5",
  fontWeight: 600,
  fontSize: "0.875rem",
  borderBottom: "2px solid #e0e0e0",
  padding: "12px",
};

// 셀 스타일
const cellSx = {
  padding: "4px 8px",
  borderBottom: "1px solid #e0e0e0",
  verticalAlign: "middle",
};

// 체크박스 셀 스타일
const checkboxCellSx = {
  padding: "4px 8px",
  borderBottom: "1px solid #e0e0e0",
  width: 50,
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
      memo: "",
    },
  ]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setRows((prev) => prev.map((row) => ({ ...row, selected: checked })));
  };

  const handleSelectRow =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setRows((prev) =>
        prev.map((row) =>
          row.id === id ? { ...row, selected: event.target.checked } : row,
        ),
      );
    };

  const handleDateChange = (id: string) => (newDate: Dayjs | null) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, date: newDate } : row)),
    );
  };

  const handleFieldChange =
    (id: string, field: keyof TableRowData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRows((prev) =>
        prev.map((row) =>
          row.id === id ? { ...row, [field]: event.target.value } : row,
        ),
      );
    };

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
                <TableRow key={row.id}>
                  <TableCell sx={checkboxCellSx}>
                    <Checkbox
                      checked={row.selected}
                      onChange={handleSelectRow(row.id)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell sx={cellSx}>
                    <DatePicker
                      value={row.date}
                      onChange={handleDateChange(row.id)}
                      slotProps={{
                        textField: {
                          size: "small",
                          fullWidth: true,
                          sx: cellInputSx,
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell sx={cellSx}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={row.particulars}
                      onChange={handleFieldChange(row.id, "particulars")}
                      placeholder="거래내역"
                      sx={cellInputSx}
                    />
                  </TableCell>
                  <TableCell sx={cellSx}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      type="number"
                      value={row.amount}
                      onChange={handleFieldChange(row.id, "amount")}
                      placeholder="금액"
                      sx={cellInputSx}
                    />
                  </TableCell>
                  <TableCell sx={cellSx}>
                    <TextField
                      fullWidth
                      select
                      variant="outlined"
                      size="small"
                      value={row.category}
                      onChange={handleFieldChange(row.id, "category")}
                      SelectProps={{
                        native: true,
                      }}
                      sx={cellInputSx}
                    >
                      <option value="">분류</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell sx={cellSx}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={row.memo}
                      onChange={handleFieldChange(row.id, "memo")}
                      placeholder="메모"
                      sx={cellInputSx}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{ mt: 2, display: "flex", gap: 1, justifyContent: "flex-end" }}
        >
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleAddRow}
          >
            항목 추가
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
    </LocalizationProvider>
  );
};

export default DataTable;
