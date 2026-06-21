import {
    Card,
    CardHeader,
    CardContent,
} from "@/components/ui/card";

import {Input} from "@/components/ui/input.tsx";
import {Search} from "lucide-react";

import Filter from "@/icons/Filter.svg?react";
import Refresh from "@/icons/Refresh.svg?react";

export default function TradingCard() {
    return (
        <div className="flex justify-between items-stretch gap-8">
            {/* ================= CARD 1 ================= */}
            <Card className="w-full rounded-lg overflow-hidden p-0 shadow-none border-none ring-0 gap-0" dir="rtl">
                <CardHeader className="bg-gray-50 py-2 pr-6 m-0 rounded-none">
                    <h2 className="text-gray-400 text-xs">طلب و بدهی ها</h2>
                </CardHeader>

                <CardContent className="p-4">
                    <div className="grid grid-cols-3 py-4">

                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="text-lg font-bold">0</span>
                            <div className="text-xs text-right pr-4 text-gray-600 w-full">تومان</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900" />
                        </div>

                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="text-lg font-bold text-green-500">1200</span>
                            <div className="text-xs text-right pr-4 text-gray-600 w-full">دلار</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900" />
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-lg font-bold text-red-500">2000</span>
                            <div className="text-xs text-right pr-4 text-gray-600 w-full">دینار</div>
                        </div>

                    </div>
                </CardContent>
            </Card>

            {/* ================= MIDDLE COLUMN ================= */}
            <div className="w-full flex flex-col justify-between">
                {/* CARD 2 - DATE */}
                <Card className="w-full rounded-lg overflow-hidden p-0 shadow-none border-none ring-0 gap-0" dir="rtl">
                    <CardHeader className="bg-gray-50 py-2 pr-6 m-0 rounded-none">
                        <h2 className="text-gray-400 text-xs">تاریخ شمسی - میلادی</h2>
                    </CardHeader>

                    <CardContent className="p-4">
                        <div className="grid grid-cols-2">

                            <div className="relative flex flex-col items-center justify-center text-center">
                                <div className="text-[16px]">05 / 03 / 15</div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900" />
                            </div>

                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="text-[16px]">2026 / 06 / 21</div>
                            </div>

                        </div>
                    </CardContent>
                </Card>

                {/* SEARCH + FILTER */}
                <div className="flex gap-3 items-center">

                    <div className="w-full h-10 rounded-lg bg-white flex items-center px-4 gap-2">
                        <Search className="text-black w-4 h-4" />

                        <Input
                            aria-label="Search"
                            dir="rtl"
                            placeholder="جستجو ..."
                            className="w-full text-right bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                    </div>

                    <div className="w-10 h-10 shrink-0 flex justify-center items-center bg-white rounded-lg cursor-pointer">
                        <Filter className="w-4 h-4" />
                    </div>

                </div>

            </div>

            {/* ================= CARD 3 ================= */}
            <Card className="relative w-full rounded-lg overflow-visible p-0 shadow-none border-none ring-0 gap-0" dir="rtl">
                <div className="absolute top-0 left-3 -translate-y-6 w-10 h-10 shrink-0 flex justify-center items-center bg-white rounded-lg cursor-pointer">
                    <Refresh className="w-4 h-4" />
                </div>
                <CardHeader className="bg-gray-50 py-2 pr-6 m-0 rounded-t-lg">
                    <h2 className="text-gray-400 text-xs">قیمت روز ارزها</h2>
                </CardHeader>

                <CardContent className="p-4">
                    <div className="grid grid-cols-3 py-4">

                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="text-lg font-bold">17850</span>
                            <div className="text-xs text-right pr-4 text-gray-600 w-full">دلار</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900" />
                        </div>

                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="text-lg font-bold">10800</span>
                            <div className="text-xs text-right pr-4 text-gray-600 w-full">دینار</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900" />
                        </div>

                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-lg font-bold">202000</span>
                            <div className="text-xs text-right pr-4 text-gray-600 w-full">یورو</div>
                        </div>

                    </div>
                </CardContent>
            </Card>

        </div>
    );
}