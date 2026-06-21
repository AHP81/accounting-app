import FormatMoney from "@/ui/data-table/components/FormatMoney";
import type {Column, Transaction} from "@/ui/data-table/types.tsx";

export const columns: Column<Transaction>[] = [
    {
        key: "customer",
        title: "نام مشتری",
        width: 180,
    },
    {
        key: "toman",
        title: "تومان",
        width: 120,
        align: "right",
        render: (value: number) => <FormatMoney value={Number(value)} />,
    },
    {
        key: "dollar",
        title: "دلار",
        width: 120,
        align: "right",
        render: (value: number) => <FormatMoney value={Number(value)} />,
    },
    {
        key: "dinar",
        title: "دینار",
        width: 120,
        align: "right",
        render: (value: number) => <FormatMoney value={Number(value)} />,
    },
    {
        key: "date",
        title: "تاریخ",
        width: 140,
        align: "center",
    },
    {
        key: "description",
        title: "توضیحات",
        width: 300,
    },
];