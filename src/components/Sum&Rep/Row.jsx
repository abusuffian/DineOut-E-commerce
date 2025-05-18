import { useState } from "react";
import DeleteBtn from "./DeleteBtn";
import UserData from "./UserData";
function OrderTable({ onDeliver }) {
  const [orders, setOrders] = useState(UserData);

  const handleDeliver = (id, quantity) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "DELIVERED" } : order
      )
    );
    onDeliver(quantity);
  };

  const handleDelete = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <table className="main-w-full">
      <thead>
        <tr className="text-left text-sm">
          <th className="pb-3 font-medium pr-15">ID</th>
          <th className="pb-3 font-medium pr-15">Customer Name</th>
          <th className="pb-3 font-medium pr-15">Items</th>
          <th className="pb-3 font-medium pr-15">Amount</th>
          <th className="pb-3 font-medium pr-15">Status</th>
          <th className="pb-3 font-medium pr-15">Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="border-t border-gray-700">
            <td className="py-3">{order.id}</td>
            <td className="py-3">{order.name}</td>
            <td className="py-3">{order.quantity}</td>
            <td className="py-3">{order.phone}</td>
            <td className="py-3">
              <span
                className={
                  order.status === "PENDING" ? "text-red-500" : "text-green-500"
                }
              >
                {order.status}
              </span>
            </td>
            <td className="py-3">
              <DeleteBtn
                onDelete={() => handleDelete(order.id)}
                onDeliver={() => handleDeliver(order.id, order.quantity)}
                status={order.status}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
