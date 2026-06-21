import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";

export default function Trading() {
    return (
        // wrapper بیرونی فقط گردی و برش، بدون اسکرول
        <div className="w-full rounded-lg overflow-hidden bg-white shadow-sm">

            {/* اسکرول کانتینر LTR (بدون dir) – اسکرولبار سمت راست */}
            <div className="max-h-[70vh] overflow-auto">

                {/* جدول با dir="rtl" برای چینش راست‌به‌چپ محتوا */}
                <Table dir="rtl" className="w-full border-separate border-spacing-0">

                    {/* HEADER: sticky + پس‌زمینه + z-index */}
                    <TableHeader className="sticky top-0 z-40">
                        <TableRow className="bg-gray-50">  {/* بدون border-b */}

                            <TableHead className="text-right text-gray-700 text-base font-bold py-5 px-4 min-w-[200px] bg-gray-50">
                                نام مشتری
                            </TableHead>
                            <TableHead className="text-right text-gray-700 text-base font-bold py-5 px-4 min-w-[100px] bg-gray-50">
                                تومان
                            </TableHead>
                            <TableHead className="text-right text-gray-700 text-base font-bold py-5 px-4 min-w-[100px] bg-gray-50">
                                دلار
                            </TableHead>
                            <TableHead className="text-right text-gray-700 text-base font-bold py-5 px-4 min-w-[100px] bg-gray-50">
                                دینار
                            </TableHead>
                            <TableHead className="text-gray-700 text-base font-bold py-5 px-4 min-w-[100px] text-center bg-gray-50">
                                تاریخ
                            </TableHead>
                            <TableHead className="text-right text-gray-700 text-base font-bold py-5 pr-12 min-w-[300px] bg-gray-50">
                                توضیحات
                            </TableHead>

                        </TableRow>
                    </TableHeader>

                    {/* BODY */}
                    <TableBody>
                        {Array(50).fill(1).map((_, index) => (
                            <TableRow
                                key={index}
                                // فاصله عمودی بیشتر + خط پررنگ‌تر و رنگ gray-800
                                className="border-b-2 border-gray-800 bg-white"
                            >
                                <TableCell className="px-4 py-4 min-w-[200px]">
                                    ناظم عبدالامیر محمد هاشم
                                </TableCell>
                                <TableCell className="px-4 py-4 min-w-[100px] text-green-400">
                                    <span dir="ltr">+100</span>
                                </TableCell>
                                <TableCell className="px-4 py-4 min-w-[100px] text-red-400">
                                    <span dir="ltr">-100</span>
                                </TableCell>
                                <TableCell className="px-4 py-4 min-w-[100px] text-gray-700">
                                    <span dir="ltr">0</span>
                                </TableCell>
                                <TableCell className="px-4 py-4 min-w-[100px] text-center">
                                    04/11/24
                                </TableCell>
                                <TableCell className="pr-12 py-4 max-w-[300px]">
                                    <div
                                        className="truncate"
                                        title="علی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظم"
                                    >
                                        علی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظمعلی پسر حاج ناظم
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