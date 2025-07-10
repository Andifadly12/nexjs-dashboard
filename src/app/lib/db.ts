"use server";

import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

export default sql;
// Fetch the last 5 invoices, sorted by date
