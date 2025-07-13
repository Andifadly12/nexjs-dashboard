import React from "react";

export default function LatestInvoices() {
  return (
    <main>
      <div className="rounded-lg border bg-white p-8 shadow-sm w-full max-w-xl">
        <div className="space-content-between flex items-center justify-between">
          <div className="flex items-center justify-start gap-4">
            <div>
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="Invoice Image"
                height={20}
                width={30}
                className="h-10 w-10 rounded-full object-cover mask-circle"
              />
            </div>
            <div>
              <p className="text-black font-medium text-xs">name</p>
              <p className="text-gray-500   text-xs">email</p>
            </div>
          </div>
          <p className="text-black font-medium text-xs">$32</p>
        </div>
      </div>
    </main>
  );
}
