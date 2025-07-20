import React, { useEffect, useState } from "react";

import { getInvoiceStats } from "../query/route";
import { DollarSign, Clock, FileText, Users } from "lucide-react";
type StatItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export default function DashboardCards() {
  const [stats, setStats] = useState<StatItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInvoiceStats();

      const data: StatItem[] = [
        {
          label: "Collected",
          value: formatUSD(response.collected),
          icon: <DollarSign />,
        },
        {
          label: "Pending",
          value: formatUSD(response.pending),
          icon: <Clock />,
        },
        {
          label: "Total Invoices",
          value: response.totalInvoices.toString(),
          icon: <FileText />,
        },
        {
          label: "Total Customers",
          value: response.totalCustomers.toString(),
          icon: <Users />,
        },
      ];

      setStats(data);
    };

    fetchData();
  }, []);

  const formatUSD = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount / 100); // Assuming amount is in cents

  return (
    <div className="flex content-row p-4 w-500 h-full gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-sm bg-white p-6 border border-gray-200 w-50"
        >
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            {stat.icon}
            <span>{stat.label}</span>
          </div>
          <div className="content-center flex flex-col items-center">
            <p className=" font-xs text-black ">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
