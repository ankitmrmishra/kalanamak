import { OrderTable } from "./orders";

async function getOrders() {
  // Replace this with your actual API call
  const res = await fetch("http://localhost:3000/api/admin", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }
  return res.json();
}

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <div className="container mx-auto py-10 px-44">
      <h1 className="text-2xl font-bold mb-5">Order Management</h1>
      <OrderTable orders={orders} />
    </div>
  );
}
