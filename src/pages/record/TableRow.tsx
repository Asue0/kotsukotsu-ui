import {
  cellInputSx,
  cellSx,
  checkboxCellSx,
} from "@/styles/record/tableStyle";
import TableRowData from "@/types/calendar/recordTableType.type";
import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { memo } from "react";

interface RowProps {
  row: TableRowData;
  onSelectChange: (id: string, checked: boolean) => void;
  onDateChange: (id: string, date: Dayjs | null) => void;
  onFieldChange: (
    id: string,
    field: keyof Omit<TableRowData, "id" | "selected" | "date">,
    value: string,
  ) => void;
}

const CATEGORIES = [
  { value: "income", label: "수입" },
  { value: "food", label: "식비" },
  { value: "transport", label: "교통비" },
  { value: "entertainment", label: "여가" },
  { value: "shopping", label: "쇼핑" },
  { value: "etc", label: "기타" },
];

/** 입력 폼 한줄 컴포넌트 */
const TableRowComponent = memo(
  ({ row, onSelectChange, onDateChange, onFieldChange }: RowProps) => {
    return (
      <TableRow>
        <TableCell sx={checkboxCellSx}>
          <Checkbox
            checked={row.selected}
            onChange={(e) => onSelectChange(row.id, e.target.checked)}
            size="small"
          />
        </TableCell>
        <TableCell sx={cellSx}>
          <DatePicker
            value={row.date}
            onChange={(newDate) => onDateChange(row.id, newDate)}
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
            placeholder="거래내역"
            sx={cellInputSx}
            onChange={(e) =>
              onFieldChange(row.id, "particulars", e.target.value)
            }
          />
        </TableCell>
        <TableCell sx={cellSx}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            type="number"
            value={row.amount}
            placeholder="금액"
            sx={cellInputSx}
            onChange={(e) => onFieldChange(row.id, "amount", e.target.value)}
          />
        </TableCell>
        <TableCell sx={cellSx}>
          <TextField
            fullWidth
            select
            variant="outlined"
            size="small"
            value={row.category}
            SelectProps={{
              native: true,
            }}
            sx={cellInputSx}
            onChange={(e) => onFieldChange(row.id, "category", e.target.value)}
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
            placeholder="메모"
            sx={cellInputSx}
            onChange={(e) => onFieldChange(row.id, "memo", e.target.value)}
          />
        </TableCell>
      </TableRow>
    );
  },
);

export default TableRowComponent;
