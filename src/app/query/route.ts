// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";
import { promises } from "dns";

const sql = neon(process.env.DATABASE_URL!);
export default sql;

type Customer = {
  name: string;
  email: string;
  image: string;
  revenue: number;
};

type Invoice = {
  customer_id: string;
  amount: number;
  status: string;
  date: string;
};
export const getCustomers = async (): Promise<Customer[]> => {
  const rows = await sql`SELECT * FROM customers lIMIT 5`;
  return rows as Customer[];
};

export const getInvoicesGrafik = async (): Promise<Invoice[]> => {
  const rows = await sql`SELECT * FROM invoices `;
  return rows as Invoice[];
};
