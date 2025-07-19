"use clinent";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

import { get } from "http";
import { getData } from "../query/route";

interface RevenueItem {
  month: string;
  revenue: number;
}

export default function RevenueChart() {
  const [formattedData, setFormattedData] = useState<RevenueItem[]>([]);

  useEffect(() => {
    const data = getData();
    console.log(data);
    // const loadData = async () => {
    //   const data = await fetchRevenueData();
    //   const recent12 = data.map((item) => ({
    //     month: item.month,
    //     revenue: item.revenue,
    //   }));
    //   setFormattedData(recent12);
    // };
    // loadData();
  }, []);

  return (
    <div className="rounded-lg border bg-white p-8 shadow-sm w-full max-w-xl">
      <div className="w-full h-74">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={formattedData}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} height={30} />
            <YAxis
              tickFormatter={(value) => `$${value / 1000}K`}
              tick={{ fontSize: 12 }}
              width={40}
            />
            <Tooltip
              contentStyle={{ fontSize: "14px" }}
              formatter={(value: number) => `$${value}`}
            />
            <Bar dataKey="revenue" fill="#60A5FA" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-muted-foreground mt-2">📅 Last 12 months</p>
      </div>
    </div>
  );
}
