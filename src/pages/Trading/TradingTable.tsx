import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
// import { cn } from "@/lib/utils";
// import { cn } from "@/lib/utils";
import type {TradingRow} from "@/services/trading.api";

type Props = {
    data: TradingRow[];
    loading: boolean;
};

export default function TradingTable({ data, loading }: Props) {
    return (
        <div className="h-full w-full rounded-lg overflow-hidden bg-white flex flex-col">
            <div className="flex-1 overflow-auto overscroll-contain">
                <Table noWrapper dir="rtl" className="w-full border-separate border-spacing-0">

                    <TableHeader className="sticky top-0 z-40">
                        <TableRow className="bg-gray-50">
                            <TableHead className="text-right">نام مشتری</TableHead>
                            <TableHead className="text-right">تومان</TableHead>
                            <TableHead className="text-right">دلار</TableHead>
                            <TableHead className="text-right">دینار</TableHead>
                            <TableHead className="text-center">آخرین فعالیت</TableHead>
                            <TableHead className="text-right">توضیحات</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {loading &&
                            Array(10).fill(0).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell colSpan={6} className="py-4 text-gray-400">
                                        Loading...
                                    </TableCell>
                                </TableRow>
                            ))}

                        {!loading &&
                            data.map((row) => (
                                <TableRow key={row.customerId} className="bg-white">
                                    <TableCell className="font-medium">
                                        {row.name}
                                    </TableCell>

                                    <TableCell className={row.toman >= 0 ? "text-green-500" : "text-red-500"}>
                                        {row.toman}
                                    </TableCell>

                                    <TableCell className={row.usd >= 0 ? "text-green-500" : "text-red-500"}>
                                        {row.usd}
                                    </TableCell>

                                    <TableCell className={row.iqd >= 0 ? "text-green-500" : "text-red-500"}>
                                        {row.iqd}
                                    </TableCell>

                                    <TableCell className="text-center text-sm text-gray-600">
                                        {row.lastActivity
                                            ? new Date(row.lastActivity).toLocaleDateString()
                                            : "-"}
                                    </TableCell>

                                    <TableCell className="max-w-[250px] truncate text-sm">
                                        {row.description || "-"}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}