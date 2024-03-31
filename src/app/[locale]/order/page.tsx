import { OrderDataCollection } from "./order-data-collection";
import { OrderSummary } from "./order-summary";

export default function Page() {
  return (
    <div className="min-h-screen pt-28">
      <div className="flex gap-4 container">
        <div className="w-[70%]">
          <OrderDataCollection />
        </div>
        <div className="w-[30%]">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
