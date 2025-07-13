// components/RevenueChart.tsx
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchRevenueData } from "./lib/data";

export default async function RevenueChart() {
  const data = await fetchRevenueData();
  const formattedData = data.map((item) => ({
    month: item.month,
    revenue: item.revenue,
  }));

  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${value / 1000}K`} />
          <Tooltip formatter={(value) => `$${value}`} />
          <Bar dataKey="revenue" fill="#60A5FA" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-muted-foreground mt-2">📅 Last 12 months</p>
    </div>
  );
}
