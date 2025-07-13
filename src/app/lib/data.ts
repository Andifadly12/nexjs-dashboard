// lib/api.ts

export const fetchRevenueData = async () => {
  // Simulating a fetch call to get revenue data
  return [
    { id: "1", month: "Jan", year: 2001, revenue: 12000 },
    { id: "2", month: "Feb", year: 2001, revenue: 15000 },
    { id: "3", month: "Mar", year: 2001, revenue: 8000 },
    { id: "4", month: "Apr", year: 2001, revenue: 20000 },
    { id: "5", month: "May", year: 2001, revenue: 17000 },
    { id: "6", month: "Jun", year: 2001, revenue: 22000 },
    { id: "7", month: "Jul", year: 2001, revenue: 18000 },
    { id: "8", month: "Aug", year: 2001, revenue: 25000 },
    { id: "9", month: "Sep", year: 2001, revenue: 30000 },
    { id: "10", month: "Oct", year: 2001, revenue: 27000 },
    { id: "11", month: "Nov", year: 2001, revenue: 32000 },
    { id: "12", month: "Dec", year: 2001, revenue: 35000 },
  ];
};

export const fetchLatestInvoices = async () => {
  return [
    {
      id: "1",
      name: "kirana",
      email: "kirana@gamail.com",
      image: "https://i.pravatar.cc/150?img=1",
      amount: 1200,
      status: "paid",
      date: "2023-10-01",
    },
    {
      id: "2",
      name: "John Doe",
      email: "jhon@gmail.com",
      image: "https://i.pravatar.cc/150?img=2",
      amount: 1500,
      status: "pending",
      date: "2023-10-02",
    },
    {
      id: "3",
      name: "Jane Smith",
      email: "jane@gmail.com",
      image: "https://i.pravatar.cc/150?img=3",
      amount: 1800,
      status: "paid",
      date: "2023-10-03",
    },
    {
      id: "4",
      name: "Alice Johnson",
      email: "alice@gmail.com",
      image: "https://i.pravatar.cc/150?img=4",
      amount: 2000,
      status: "pending",
      date: "2023-10-04",
    },
    {
      id: "5",
      name: "Bob Brown",
      email: "bob@gmail.com",
      image: "https://i.pravatar.cc/150?img=5",
      amount: 2200,
      status: "paid",
      date: "2023-10-05",
    },
  ];
};
