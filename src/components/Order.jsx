import { useState } from "react";
import data from "../data";
import CreateOrder from "./CreateOrder";
import OrderReports from "./OrderReports";
import OrderSummery from "./OrderSummery";

function Order() {
  const [selectedItems, setSelectedItems] = useState([]);
  const SampleData = [
    {
      id: 1,
      name: "Hemel",
      items: 5,
      amount: 300,
      status: "pending",
    },
  ];
  const [items, setItems] = useState(data);
  const [orders, setOrders] = useState(SampleData);
  const [customerName, setCustomerName] = useState("");
  const [deliveredOrders, setDeliveredOrders] = useState([]);

  const handleName = (name) => {
    setCustomerName(name);
  };

  const handleItem = (item) => {
    setSelectedItems((prev) => [...prev, item]);
  };
  const totalAmount = selectedItems.reduce((sum, item) => sum + item.price, 0);
  const handlePlaceOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      name: customerName,
      items: selectedItems.length,
      amount: totalAmount,
      status: "pending",
    };
    setOrders([...orders, newOrder]);
    setSelectedItems([]);
    setCustomerName("");
  };

  const handleDeliver = (deliverItem) => {
    const updateOrders = orders.map((order) => {
      if (order.id === deliverItem) {
        const deliverOrder = { ...order, status: "delivered" };
        setDeliveredOrders((prev) => [...prev, deliverOrder]);
        return deliverOrder;
      }
      return order;
    });
    setOrders(updateOrders);
  };

  const handleDelete = (orderId) => {
    const filterItem = orders.filter((order) => order.id !== orderId);
    setOrders(filterItem);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder
        items={items}
        setItems={setItems}
        onName={handleName}
        onAddItem={handleItem}
        selectedItems={selectedItems}
        onPlaceItem={handlePlaceOrder}
        totalAmount={totalAmount}
        customerName={customerName}
      />

      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <OrderSummery orders={orders} deliveredOrders={deliveredOrders} />

        <OrderReports
          orders={orders}
          setOrders={setOrders}
          onDelete={handleDelete}
          onDelivered={handleDeliver}
        />
      </div>
    </div>
  );
}

export default Order;
