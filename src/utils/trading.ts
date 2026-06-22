import type {TradingRow} from "@/services/trading.api";

export function calculateTotals(data: TradingRow[]) {
    return data.reduce(
        (acc, item) => {
            acc.toman += item.toman;
            acc.usd += item.usd;
            acc.iqd += item.iqd;
            return acc;
        },
        {
            toman: 0,
            usd: 0,
            iqd: 0,
        }
    );
}