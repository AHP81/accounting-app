import { Button } from "@/components/ui/button.tsx";
import Plus from "@/icons/Plus.svg?react";

export default function TradingAddCustomer() {
    return (
        <div dir="rtl" className="flex gap-3 lg:gap-4 flex-wrap">
            <Button className="py-3 px-5 lg:py-5 lg:px-7 bg-green-400 hover:bg-green-500 text-white cursor-pointer rounded-lg text-sm lg:text-base gap-2">
                <span>افزودن مشتری</span>
                <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
            </Button>

            <Button className="py-3 px-5 lg:py-5 lg:px-7 bg-purple-400 hover:bg-purple-500 text-white cursor-pointer rounded-lg text-sm lg:text-base gap-2">
                <span>افزودن حساب</span>
                <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
            </Button>
        </div>
    );
}