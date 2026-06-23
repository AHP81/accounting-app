"use client";

import { useMemo, useState } from "react";
import TradingTable from "@/pages/Trading/TradingTable";
import TradingAddCustomer from "@/pages/Trading/TradingAddCustomer";
import TradingCard from "@/pages/Trading/TradingCard";
import TradingFilterDialog, {
    type TradingFilters,
} from "@/pages/Trading/TradingFilterDialog";
import { useTrading } from "@/hooks/useTrading";
import type { TradingRow } from "@/services/trading.api";

const defaultFilters: TradingFilters = {
    activityFrom: "",
    activityTo: "",
    hasDescription: "all",
    toman: "all",
    usd: "all",
    iqd: "all",
};

function matchesMode(value: number, mode: TradingFilters[keyof Pick<TradingFilters, "toman" | "usd" | "iqd">]) {
    if (mode === "all") return true;
    if (mode === "positive") return value > 0;
    if (mode === "negative") return value < 0;
    return value === 0;
}

function startOfDay(value: string) {
    const d = new Date(value);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
}

function endOfDay(value: string) {
    const d = new Date(value);
    d.setHours(23, 59, 59, 999);
    return d.getTime();
}

export default function Trading() {
    const { data, loading, error } = useTrading();

    const [search, setSearch] = useState("");
    const [filterOpen, setFilterOpen] = useState(false);
    const [filters, setFilters] = useState<TradingFilters>(defaultFilters);

    const filteredData = useMemo(() => {
        const q = search.trim().toLowerCase();

        return data.filter((row: TradingRow) => {
            const nameMatch = !q || row.name.toLowerCase().includes(q);

            const desc = row.description?.trim() ?? "";
            const descMatch =
                filters.hasDescription === "all"
                    ? true
                    : filters.hasDescription === "yes"
                        ? desc.length > 0
                        : desc.length === 0;

            const activityTime = row.lastActivity ? new Date(row.lastActivity).getTime() : null;

            const fromMatch = filters.activityFrom
                ? activityTime !== null && activityTime >= startOfDay(filters.activityFrom)
                : true;

            const toMatch = filters.activityTo
                ? activityTime !== null && activityTime <= endOfDay(filters.activityTo)
                : true;

            const tomanMatch = matchesMode(row.toman, filters.toman);
            const usdMatch = matchesMode(row.usd, filters.usd);
            const iqdMatch = matchesMode(row.iqd, filters.iqd);

            return nameMatch && descMatch && fromMatch && toMatch && tomanMatch && usdMatch && iqdMatch;
        });
    }, [data, search, filters]);

    return (
        <div className="h-full flex flex-col gap-4 py-3 lg:py-4 overflow-hidden">
            <TradingAddCustomer onCreated={() => window.location.reload()} />

            <TradingCard
                data={data}
                searchValue={search}
                onSearchChange={setSearch}
                onOpenFilters={() => setFilterOpen(true)}
            />

            <TradingFilterDialog
                open={filterOpen}
                onOpenChange={setFilterOpen}
                value={filters}
                onChange={setFilters}
                onReset={() => setFilters(defaultFilters)}
            />

            {error && <div className="text-red-500 text-sm px-2">{error}</div>}

            <div className="flex-1 min-h-0">
                <TradingTable data={filteredData} loading={loading} />
            </div>
        </div>
    );
}