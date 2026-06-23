"use client";

import { useMemo, useState } from "react";
import TradingTable from "@/pages/Trading/TradingTable";
import TradingAddCustomer from "@/pages/Trading/TradingAddCustomer";
import TradingCard from "@/pages/Trading/TradingCard";
import { useTrading } from "@/hooks/useTrading";

export default function Trading() {
    const { data, loading, error } = useTrading();
    const [search, setSearch] = useState("");

    const filteredData = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return data;
        return data.filter((row) =>
            row.name.toLowerCase().includes(q)
        );
    }, [data, search]);

    return (
        <div className="h-full flex flex-col gap-4 py-3 lg:py-4 overflow-hidden">
            <TradingAddCustomer onCreated={() => window.location.reload()} />
            <TradingCard
                data={data}
                searchValue={search}
                onSearchChange={setSearch}
            />

            {error && (
                <div className="text-red-500 text-sm px-2">
                    {error}
                </div>
            )}

            <div className="flex-1 min-h-0">
                <TradingTable data={filteredData} loading={loading} />
            </div>
        </div>
    );
}