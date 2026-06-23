import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import type { TradingRow } from "@/services/trading.api";

type Props = {
    data: TradingRow[];
    loading: boolean;
};

function formatYmd(value?: string | number | Date) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";

    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}/${m}/${d}`;
}

function signedClass(value: number) {
    if (value > 0) return "text-green-500";
    if (value < 0) return "text-red-500";
    return "text-black";
}

function renderAmount(value: number) {
    if (value === 0) {
        return <span className="inline-block min-w-[7ch]">&nbsp;</span>;
    }

    return (
        <span dir="ltr" className="inline-block min-w-[7ch] tabular-nums">
      {value.toLocaleString("en-US")}
    </span>
    );
}

export default function TradingTable({ data, loading }: Props) {
    return (
        <div className="h-full w-full rounded-lg overflow-hidden bg-white flex flex-col">
            <div className="flex-1 overflow-auto overscroll-contain">
                <Table noWrapper dir="rtl" className="w-full table-fixed border-separate border-spacing-0">
                    <colgroup>
                        <col className="w-[22%]" />
                        <col className="w-[12%]" />
                        <col className="w-[12%]" />
                        <col className="w-[12%]" />
                        <col className="w-[18%]" />
                        <col className="w-[24%]" />
                    </colgroup>

                    <TableHeader className="sticky top-0 z-40">
                        <TableRow className="bg-gray-50">
                            <TableHead className="text-right font-bold text-base lg:text-[16px]">نام مشتری</TableHead>
                            <TableHead className="text-right font-bold text-base lg:text-[16px]">تومان</TableHead>
                            <TableHead className="text-right font-bold text-base lg:text-[16px]">دلار</TableHead>
                            <TableHead className="text-right font-bold text-base lg:text-[16px]">دینار</TableHead>
                            <TableHead className="text-center font-bold text-base lg:text-[16px]">آخرین فعالیت</TableHead>
                            <TableHead className="text-right font-bold text-base lg:text-[16px]">توضیحات</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {loading &&
                            Array(10)
                                .fill(0)
                                .map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell colSpan={6} className="py-4 text-gray-400">
                                            Loading...
                                        </TableCell>
                                    </TableRow>
                                ))}

                        {!loading && data.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} className="py-6 text-center text-sm text-gray-400">
                                    موردی پیدا نشد
                                </TableCell>
                            </TableRow>
                        )}

                        {!loading &&
                            data.map((row) => (
                                <TableRow key={row.customerId} className="bg-white">
                                    <TableCell className="font-medium truncate">
                                        {row.name}
                                    </TableCell>

                                    <TableCell className={signedClass(row.toman)}>
                                        {renderAmount(row.toman)}
                                    </TableCell>

                                    <TableCell className={signedClass(row.usd)}>
                                        {renderAmount(row.usd)}
                                    </TableCell>

                                    <TableCell className={signedClass(row.iqd)}>
                                        {renderAmount(row.iqd)}
                                    </TableCell>

                                    <TableCell className="text-center text-sm text-gray-600">
                    <span className="inline-block min-w-[10ch]">
                      {formatYmd(row.lastActivity) || "\u00A0"}
                    </span>
                                    </TableCell>

                                    <TableCell className="max-w-[250px]">
                                        <div className="relative group w-full">
                      <span className="block truncate text-sm">
                        {row.description?.trim() || "\u00A0"}
                      </span>

                                            {row.description?.trim() && (
                                                <div className="pointer-events-none absolute right-0 top-full z-50 mt-1 hidden max-w-sm rounded-md bg-gray-900 px-3 py-2 text-xs leading-5 text-white shadow-lg group-hover:block whitespace-normal">
                                                    {row.description}
                                                </div>
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}