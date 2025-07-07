import React from "react";
import { Files, Home, Pencil, UsersRound } from "lucide-react";

export default function SideNav() {
  return (
    <nav className="flex flex-col h-full bg-gray-800 text-white ">
      <div className="flex items-center justify-center h-16">
        <div className="p-4 text-lg font-bold">Dashboard</div>
      </div>
      <div className="flex-grow overflow-y-auto">
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <a
              href="/dashboard/"
              className="hover:bg-gray-700 p-2 rounded flex items-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </a>
          </li>
          <li>
            <a
              href="/dashboard/customers"
              className="hover:bg-gray-700 p-2 rounded flex items-center"
            >
              <Files className="w-5 h-5 mr-2" />
              Invoices
            </a>
          </li>
          <li>
            <a
              href="/dashboard/invoices"
              className="hover:bg-gray-700 p-2 rounded flex items-center"
            >
              <UsersRound className="w-5 h-5 mr-2" />
              Customers
            </a>
          </li>
        </ul>
      </div>

      <div className="p-4">
        <button className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
}
