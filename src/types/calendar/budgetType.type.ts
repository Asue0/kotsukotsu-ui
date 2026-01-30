interface BugetType {
  // budget : 'EXPENSES' | 'INCOME'
  budget: string;
  amount: number;
  memo: string;
  date: Date;
}
export default BugetType;
