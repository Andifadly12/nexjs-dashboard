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

export const getInvoiceStats = async () => {
  const [collected] =
    await sql`SELECT SUM(amount) as total FROM invoices WHERE status = 'paid'`;
  const [pending] =
    await sql`SELECT SUM(amount) as total FROM invoices WHERE status = 'pending'`;
  const [totalInvoices] = await sql`SELECT COUNT(*) as count FROM invoices`;
  const [totalCustomers] =
    await sql`SELECT COUNT(DISTINCT customer_id) as count FROM invoices`;

  return {
    collected: collected.total ?? 0,
    pending: pending.total ?? 0,
    totalInvoices: totalInvoices.count ?? 0,
    totalCustomers: totalCustomers.count ?? 0,
  };
};
