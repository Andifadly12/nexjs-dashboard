"use client";
import React from "react";
import RevenueCart from "./revenue-Cart";
import LatestInvoices from "./latest-invoices";

export default function page() {
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl text-black`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <p className="text-sm font-medium text-black pb-2">Recent Revenue</p>
          <RevenueCart />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <p className="text-sm font-medium text-black pb-2">Latest Invoices</p>
          <LatestInvoices />
        </div>
      </div>
    </main>
  );
}
