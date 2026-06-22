import { useEffect, useState } from "react";
import { getTrading, type TradingRow } from "@/services/trading.api";

export function useTrading() {
    const [data, setData] = useState<TradingRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        load();
    }, []);

    async function load() {
        try {
            setLoading(true);
            const res = await getTrading();
            setData(res);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return { data, loading, error, refetch: load };
}