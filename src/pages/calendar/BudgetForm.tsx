import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

const BudgetForm = (props: { date: Date }) => {
  const [budget, setBudget] = useState<string>("EXPENSES");

  const handleChange = (event: SelectChangeEvent) => {
    setBudget(event.target.value);
  };

  console.log(props.date);

  return (
    <Box display="flex" flexDirection="column" gap={1}>
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
            <MenuItem value={"EXPENSES"} sx={{ color: "red", fontWeight: 600 }}>
              지출
            </MenuItem>
            <MenuItem value={"INCOME"} sx={{ color: "blue", fontWeight: 600 }}>
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
      <TextField multiline fullWidth placeholder="메모" variant="standard" />
    </Box>
  );
};

export default BudgetForm;
