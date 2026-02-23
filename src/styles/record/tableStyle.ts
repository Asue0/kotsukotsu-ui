// 헤더 스타일
const headerCellSx = {
  backgroundColor: "#f5f5f5",
  fontWeight: 600,
  fontSize: "0.875rem",
  borderBottom: "2px solid #e0e0e0",
  padding: "12px",
};

// 체크박스 셀 스타일
const checkboxCellSx = {
  padding: "4px 8px",
  borderBottom: "1px solid #e0e0e0",
  width: 50,
};

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

// 셀 스타일
const cellSx = {
  padding: "4px 8px",
  borderBottom: "1px solid #e0e0e0",
  verticalAlign: "middle",
};

export { headerCellSx, checkboxCellSx, cellInputSx, cellSx };
