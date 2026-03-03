import { Dayjs } from "dayjs";

interface TableRowData {
  id: string;
  selected: boolean;
  date: Dayjs;
  particulars: string;
  amount: string;
  category: string;
  memo: string;
}

export default TableRowData;
