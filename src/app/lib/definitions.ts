export type Invoices = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: "pending" | "paid" | "overdue";
};
export type Revenue = {
  month: string; // e.g., "Jan", "Feb"
  revenue: number; // e.g., 10000
}[];
