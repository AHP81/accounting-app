import TradingTable from "@/pages/Trading/TradingTable.tsx";
import TradingAddCustomer from "@/pages/Trading/TradingAddCustomer.tsx";
import TradingCard from "@/pages/Trading/TradingCard.tsx";

export default function Trading() {
    return (
        <div className="h-full flex flex-col gap-4 py-3 lg:py-4 overflow-hidden">
            <TradingAddCustomer />
            <TradingCard />
            <div className="flex-1 min-h-0">
                <TradingTable />
            </div>
        </div>
    );
}