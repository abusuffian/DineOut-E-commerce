import { useState } from "react";
import items from "./ItemArray";
import NameInput from "./NameInput";
import SelectItem from "./SelectItem";

function OrderSection() {
  const [Name, setName] = useState("");
  const [cart, setCart] = useState({});

  const handleOrder = () => {
    const orderItems = items
      .filter((item) => cart[item.id])
      .map((item) => ({
        ...item,
        quantity: cart[item.id],
        total: cart[item.id] * item.price,
      }));

    const totalAmount = orderItems.reduce((sum, item) => sum + item.total, 0);

    console.log("Customer:", Name);
    console.log("Order Items:", orderItems);
    alert(`Order Placed for ${Name}. Total: BDT ${totalAmount}`);

    // Reset
    setCart({});
    setName("");
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + (cart[item.id] || 0) * item.price,
    0
  );

  return (
    <div className="bg-[#2d2d2d] p-6 rounded-md max-w-md mx-auto text-white">
      <NameInput customerName={Name} setCustomerName={Name} />

      <SelectItem cart={cart} setCart={setCart} />

      <button
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        onClick={handleOrder}
        disabled={totalPrice === 0 || !Name.trim()}
      >
        Place Order (BDT {totalPrice || 0})
      </button>
    </div>
  );
}

export default OrderSection;
