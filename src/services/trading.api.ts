export type TradingRow = {
    customerId: number;
    name: string;
    toman: number;
    usd: number;
    iqd: number;
    lastActivity: string | null;
    description?: string | null;
};

export async function getTrading(): Promise<TradingRow[]> {
    const res = await fetch("http://localhost:3000/api/trading");
    return res.json();
}