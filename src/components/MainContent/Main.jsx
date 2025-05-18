import SumRep from "../Sum&Rep/SumRep";
import OrderSection from "./OrderSection";

function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderSection />
      <SumRep />
    </div>
  );
}

export default Main;
