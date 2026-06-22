import TradingTable from "@/pages/Trading/TradingTable.tsx";
import TradingAddCustomer from "@/pages/Trading/TradingAddCustomer.tsx";
import TradingCard from "@/pages/Trading/TradingCard.tsx";
import { useTrading } from "@/hooks/useTrading";

export default function Trading() {
    const { data, loading, error } = useTrading();

    return (
        <div className="h-full flex flex-col gap-4 py-3 lg:py-4 overflow-hidden">
            <TradingAddCustomer />
            <TradingCard data={data}/>

            {error && (
                <div className="text-red-500 text-sm px-2">
                    {error}
                </div>
            )}

            <div className="flex-1 min-h-0">
                <TradingTable data={data} loading={loading} />
            </div>
        </div>
    );
}