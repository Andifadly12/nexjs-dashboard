const custumers = [
  { id: "cust1", name: "Customer 1" },
  { id: "cust2", name: "Customer 2" },
  { id: "cust3", name: "Customer 3" },
  { id: "cust4", name: "Customer 4" },
  { id: "cust5", name: "Customer 5" },
];

const invoices = [
  {
    customer_id: custumers[0].id,
    amount: 15792,
    status: "pending",
    date: "2023-10-01",
  },
  {
    customer_id: custumers[1].id,
    amount: 12000,
    status: "paid",
    date: "2023-10-02",
  },
  {
    customer_id: custumers[2].id,
    amount: 8000,
    status: "overdue",
    date: "2023-10-03",
  },
  {
    customer_id: custumers[3].id,
    amount: 5000,
    status: "pending",
    date: "2023-10-04",
  },
  {
    customer_id: custumers[4].id,
    amount: 3000,
    status: "paid",
    date: "2023-10-05",
  },
];
