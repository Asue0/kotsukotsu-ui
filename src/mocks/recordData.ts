import TableRowData from "@/types/calendar/recordTableType.type";
import dayjs from "dayjs";

const mockData: TableRowData[] = [
  {
    id: "1",
    selected: false,
    date: dayjs(),
    particulars: "",
    amount: "",
    category: "",
    memo: "초기데이터 입니다.",
  },
  {
    id: "2",
    selected: false,
    date: dayjs(),
    particulars: "",
    amount: "",
    category: "",
    memo: "초기데이터2 입니다.",
  },
];

export default mockData;
