import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input.tsx";
import { Search } from "lucide-react";
import Filter from "@/icons/Filter.svg?react";
import Refresh from "@/icons/Refresh.svg?react";

export default function TradingCard() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4 lg:gap-8">
            {/* ================= CARD 1 ================= */}
            <Card className="w-full rounded-lg overflow-hidden p-0 shadow-none border-none ring-0" dir="rtl">
                <CardHeader className="bg-gray-50 py-2 pr-4 lg:pr-6 m-0 rounded-none">
                    <h2 className="text-gray-400 text-xs lg:text-sm">طلب و بدهی ها</h2>
                </CardHeader>
                <CardContent className="p-3 lg:p-4">
                    <div className="grid grid-cols-3 py-2 lg:py-4 gap-2">
                        {/* ستون‌ها مثل قبل با تنظیمات responsive */}
                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="text-base lg:text-lg font-bold">0</span>
                            <div className="text-xs lg:text-sm text-right pr-2 lg:pr-4 text-gray-600 w-full">تومان</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900 hidden lg:block" />
                        </div>
                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="text-base lg:text-lg font-bold text-green-500">1200</span>
                            <div className="text-xs lg:text-sm text-right pr-2 lg:pr-4 text-gray-600 w-full">دلار</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900 hidden lg:block" />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-base lg:text-lg font-bold text-red-500">2000</span>
                            <div className="text-xs lg:text-sm text-right pr-2 lg:pr-4 text-gray-600 w-full">دینار</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* ================= MIDDLE COLUMN ================= */}
            <div className="w-full flex flex-col justify-between gap-3 lg:gap-0">
                {/* CARD 2 - DATE */}
                <Card className="w-full rounded-lg overflow-hidden p-0 shadow-none border-none ring-0" dir="rtl">
                    <CardHeader className="bg-gray-50 py-2 pr-4 lg:pr-6 m-0 rounded-none">
                        <h2 className="text-gray-400 text-xs lg:text-sm">تاریخ شمسی - میلادی</h2>
                    </CardHeader>
                    <CardContent className="p-3 lg:p-4">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="relative flex flex-col items-center justify-center text-center">
                                <div className="text-sm lg:text-[16px]">05 / 03 / 15</div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900 hidden lg:block" />
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="text-sm lg:text-[16px]">2026 / 06 / 21</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* SEARCH + FILTER */}
                <div className="flex gap-2 lg:gap-3 items-center">
                    <div className="w-full h-10 rounded-lg bg-white flex items-center px-3 lg:px-4 gap-2">
                        <Search className="text-black w-4 h-4" />
                        <Input
                            aria-label="Search"
                            dir="rtl"
                            placeholder="جستجو ..."
                            className="w-full text-right bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                        />
                    </div>
                    <div className="w-10 h-10 shrink-0 flex justify-center items-center bg-white rounded-lg cursor-pointer">
                        <Filter className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* ================= CARD 3 ================= */}
            <Card className="relative w-full rounded-lg overflow-visible p-0 shadow-none border-none ring-0" dir="rtl">
                {/* Refresh icon placed inside header on all screens, but absolute to mimic original position */}
                <CardHeader className="bg-gray-50 py-2 pr-4 lg:pr-6 m-0 rounded-t-lg relative">
                    <h2 className="text-gray-400 text-xs lg:text-sm">قیمت روز ارزها</h2>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 shrink-0 flex justify-center items-center bg-white rounded-lg cursor-pointer shadow-sm">
                        <Refresh className="w-4 h-4" />
                    </div>
                </CardHeader>

                <CardContent className="p-3 lg:p-4">
                    <div className="grid grid-cols-3 py-2 lg:py-4 gap-2">
                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="text-base lg:text-lg font-bold">17850</span>
                            <div className="text-xs lg:text-sm text-right pr-2 lg:pr-4 text-gray-600 w-full">دلار</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900 hidden lg:block" />
                        </div>
                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="text-base lg:text-lg font-bold">10800</span>
                            <div className="text-xs lg:text-sm text-right pr-2 lg:pr-4 text-gray-600 w-full">دینار</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-gray-900 hidden lg:block" />
                        </div>
                        <div className="flex flex-col items-center justify-center text-center">
                            <span className="text-base lg:text-lg font-bold">202000</span>
                            <div className="text-xs lg:text-sm text-right pr-2 lg:pr-4 text-gray-600 w-full">یورو</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}