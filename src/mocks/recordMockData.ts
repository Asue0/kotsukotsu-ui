import TableRowData from "@/types/calendar/recordTableType.type";
import dayjs from "dayjs";

const mockData: TableRowData[] = [
  {
    id: "1",
    selected: false,
    date: dayjs(),
    particulars: "용돈",
    amount: "10000",
    category: "income",
    memo: "초기데이터 입니다.",
  },
  {
    id: "2",
    selected: false,
    date: dayjs(),
    particulars: "돈까스",
    amount: "-10000",
    category: "food",
    memo: "초기데이터2 입니다.",
  },
];

export default mockData;
