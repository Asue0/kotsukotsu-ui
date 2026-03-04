import { Dayjs } from "dayjs";

/** 수입/지출 테이블 타입 (date null 포함) */
export interface TableRowDataType {
  id: string;
  selected: boolean;
  date: Dayjs | null;
  particulars: string;
  amount: string;
  category: string;
  memo: string;
}

/** 수입/지출 데이터 타입 (date null 불가) */
export interface RecordDataType {
  id: string;
  selected: boolean;
  date: Dayjs;
  particulars: string;
  amount: string;
  category: string;
  memo: string;
}
