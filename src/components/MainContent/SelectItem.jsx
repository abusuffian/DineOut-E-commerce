import ItemArray from "./ItemArray";
import Items from "./Items";

function SelectItem({ setCart }) {
  const handleAdd = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemove = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] <= 0) delete updated[id];
      return updated;
    });
  };
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="items-container">
        <Items
          onAdd={handleAdd}
          onRemove={handleRemove}
          ItemArray={ItemArray}
        />
      </div>
    </div>
  );
}

export default SelectItem;
