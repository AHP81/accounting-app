import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export default function TradingTable() {
    return (
        <div className="h-full w-full rounded-lg overflow-hidden bg-white flex flex-col">
            <div className="flex-1 overflow-auto overscroll-contain">
                <Table noWrapper dir="rtl" className="w-full border-separate border-spacing-0">
                    <TableHeader className="sticky top-0 z-40">
                        <TableRow className="bg-gray-50">
                            <TableHead className="text-right text-gray-700 text-sm lg:text-base font-bold py-3 lg:py-5 px-3 lg:px-4 min-w-[150px] lg:min-w-[200px] bg-gray-50">
                                نام مشتری
                            </TableHead>
                            <TableHead className="text-right text-gray-700 text-sm lg:text-base font-bold py-3 lg:py-5 px-3 lg:px-4 min-w-[80px] lg:min-w-[100px] bg-gray-50">
                                تومان
                            </TableHead>
                            <TableHead className="text-right text-gray-700 text-sm lg:text-base font-bold py-3 lg:py-5 px-3 lg:px-4 min-w-[80px] lg:min-w-[100px] bg-gray-50">
                                دلار
                            </TableHead>
                            <TableHead className="text-right text-gray-700 text-sm lg:text-base font-bold py-3 lg:py-5 px-3 lg:px-4 min-w-[80px] lg:min-w-[100px] bg-gray-50">
                                دینار
                            </TableHead>
                            <TableHead className="text-center text-gray-700 text-sm lg:text-base font-bold py-3 lg:py-5 px-3 lg:px-4 min-w-[90px] lg:min-w-[100px] bg-gray-50">
                                تاریخ
                            </TableHead>
                            <TableHead className="text-right text-gray-700 text-sm lg:text-base font-bold py-3 lg:py-5 pr-8 lg:pr-12 min-w-[200px] lg:min-w-[300px] bg-gray-50">
                                توضیحات
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array(50)
                            .fill(1)
                            .map((_, index, arr) => {
                                const isLast = index === arr.length - 1;
                                return (
                                    <TableRow
                                        key={index}
                                        className={cn(
                                            "bg-white border-b-0",
                                            isLast && "[&>td]:border-b-0"
                                        )}
                                    >
                                        <TableCell className="px-3 lg:px-4 py-3 lg:py-4 min-w-[150px] lg:min-w-[200px] border-b-2 border-gray-200 text-sm">
                                            ناظم عبدالامیر محمد هاشم
                                        </TableCell>
                                        <TableCell className="px-3 lg:px-4 py-3 lg:py-4 min-w-[80px] lg:min-w-[100px] text-green-400 border-b-2 border-gray-200 text-sm">
                                            <span dir="ltr">+100</span>
                                        </TableCell>
                                        <TableCell className="px-3 lg:px-4 py-3 lg:py-4 min-w-[80px] lg:min-w-[100px] text-red-400 border-b-2 border-gray-200 text-sm">
                                            <span dir="ltr">-100</span>
                                        </TableCell>
                                        <TableCell className="px-3 lg:px-4 py-3 lg:py-4 min-w-[80px] lg:min-w-[100px] text-gray-700 border-b-2 border-gray-200 text-sm">
                                            <span dir="ltr">0</span>
                                        </TableCell>
                                        <TableCell className="px-3 lg:px-4 py-3 lg:py-4 min-w-[90px] lg:min-w-[100px] text-center border-b-2 border-gray-200 text-sm">
                                            04/11/24
                                        </TableCell>
                                        <TableCell className="pr-8 lg:pr-12 py-3 lg:py-4 max-w-[200px] lg:max-w-[300px] border-b-2 border-gray-200">
                                            <div className="truncate text-sm" title="علی پسر حاج ناظم...">
                                                علی پسر حاج ناظم...
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}