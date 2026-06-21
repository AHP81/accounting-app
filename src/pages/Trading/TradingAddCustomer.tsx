import {Button} from "@/components/ui/button.tsx";
import Plus from '@/icons/Plus.svg?react';

export default function TradingAddCustomer() {
    return (
        <div dir="rtl" className="flex gap-4">
            <Button className="py-5 px-7 bg-green-400 hover:bg-green-500 text-white cursor-pointer rounded-lg">
                <span>افزودن مشتری</span>
                <Plus />
            </Button>

            <Button className="py-5 px-7 bg-purple-400 hover:bg-purple-500 text-white cursor-pointer rounded-lg">
                <span>افزودن حساب</span>
                <Plus />
            </Button>
        </div>
    )
}