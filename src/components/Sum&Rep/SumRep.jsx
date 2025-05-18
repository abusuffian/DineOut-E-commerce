import { useState } from "react";
import FilterSvg from "./FilterSvg";
import OdSumm from "./OrderSummary/OdSumm";
import Row from "./Row";

function SumRep() {
  const [totalDel, setTotalDel] = useState(0);

  const handleDeliver = () => {
    setTotalDel((item) => item + 1);
  };
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      {/* <!-- Order Summary --> */}
      <OdSumm delItem={totalDel} />

      {/* <!-- Order Reports --> */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Order Reports</h2>

          <div className="flex gap-4 items-center">
            <FilterSvg />
            <select className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
              <option>All</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>
        <div className="bg-cardbg rounded-lg p-4">
          <div className="reports-container">
            <Row onDeliver={handleDeliver} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SumRep;
