import TradingTable from "@/pages/Trading/TradingTable.tsx";
import TradingAddCustomer from "@/pages/Trading/TradingAddCustomer.tsx";
import TradingCard from "@/pages/Trading/TradingCard.tsx";

export default function Trading() {
    return (
        <div className={'flex flex-col gap-6'}>
            <TradingAddCustomer />
            <TradingCard />
            <TradingTable />
        </div>
    )
}