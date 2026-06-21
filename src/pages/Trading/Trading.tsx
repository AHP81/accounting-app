import TradingTable from "@/pages/Trading/TradingTable.tsx";
import TradingAddCustomer from "@/pages/Trading/TradingAddCustomer.tsx";
import TradingCard from "@/pages/Trading/TradingCard.tsx";

export default function Trading() {
    return (
        <div className="h-screen flex flex-col gap-6 overflow-hidden py-4">
            <TradingAddCustomer />
            <TradingCard />
            <div className="flex-1 min-h-0">
                <TradingTable />
            </div>
        </div>
    );
}