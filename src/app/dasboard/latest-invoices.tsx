import React from "react";
import { fetchLatestInvoices } from "../lib/data";

interface rwvenueData {
  name: string;
  email: string;
  image: string;
  amount: number;
}
export default function LatestInvoices() {
  const [invoices, setInvoices] = React.useState<rwvenueData[]>([]);

  React.useEffect(() => {
    const fetchDataInvoices = async () => {
      // Replace this with your actual API endpoint or data-fetching logic
      const response = await fetchLatestInvoices();
      const resultdata = response.map((data) => ({
        name: data.name,
        email: data.email,
        image: data.image,
        amount: data.amount,
      }));
      setInvoices(resultdata);
    };
    fetchDataInvoices();
  }, []);
  console.log(invoices.map((invoice) => invoice.name));
  return (
    <main>
      <div className="rounded-lg border bg-white p-8 shadow-sm w-full max-w-xl">
        {invoices.map((invoice) => (
          <div className="space-content-between flex items-center justify-between mb-4">
            <div className="flex items-center justify-start gap-4">
              <div>
                <img
                  src={invoice.image}
                  alt="Invoice Image"
                  height={20}
                  width={30}
                  className="h-10 w-10 rounded-full object-cover mask-circle"
                />
              </div>
              <div>
                <p className="text-black font-medium text-xs">{invoice.name}</p>
                <p className="text-gray-500   text-xs">{invoice.email}</p>
              </div>
            </div>
            <p className="text-black font-medium text-xs">${invoice.amount}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
