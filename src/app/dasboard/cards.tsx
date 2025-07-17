import React from "react";
import { fetchCustomers } from "../lib/data";

type Stat = {
  label: string;
  value: string;
  icon: React.ReactNode; // Assuming icon is a React node
};

export default function DashboardCards() {
  const [stats, setStats] = React.useState<Stat[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      // Replace this with your actual API endpoint or data-fetching logic
      const response = await fetchCustomers();
      const data = response.map((data) => ({
        label: data.label,
        value: data.value,
        icon: React.createElement(data.icon), // Convert IconType to ReactNode
      }));
      setStats(data);
    };
    fetchData();
  }, []);
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
