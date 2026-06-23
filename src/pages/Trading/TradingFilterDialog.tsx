"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export type TradingFilters = {
    activityFrom: string;
    activityTo: string;
    hasDescription: "all" | "yes" | "no";
    toman: "all" | "positive" | "negative" | "zero";
    usd: "all" | "positive" | "negative" | "zero";
    iqd: "all" | "positive" | "negative" | "zero";
};

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    value: TradingFilters;
    onChange: (value: TradingFilters) => void;
    onReset: () => void;
};

const emptyFilters: TradingFilters = {
    activityFrom: "",
    activityTo: "",
    hasDescription: "all",
    toman: "all",
    usd: "all",
    iqd: "all",
};

export default function TradingFilterDialog({
                                                open,
                                                onOpenChange,
                                                value,
                                                onChange,
                                                onReset,
                                            }: Props) {
    const [draft, setDraft] = useState<TradingFilters>(value);

    useEffect(() => {
        if (open) setDraft(value);
    }, [open, value]);

    const selectClass =
        "h-12 rounded-2xl bg-white text-base px-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300";

    const handleApply = () => {
        onChange(draft);
        onOpenChange(false);
    };

    const handleClear = () => {
        setDraft(emptyFilters);
        onReset();
    };

    const balanceOptions = useMemo(
        () => [
            { value: "all", label: "همه" },
            { value: "positive", label: "مثبت" },
            { value: "negative", label: "منفی" },
            { value: "zero", label: "صفر" },
        ],
        []
    );

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-3xl rounded-3xl bg-gray-50 p-4 lg:p-6 border-0">
                <DialogTitle className="sr-only">فیلتر جدول</DialogTitle>

                <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-2">
                            <Label className="text-sm text-gray-600">از تاریخ</Label>
                            <Input
                                type="date"
                                value={draft.activityFrom}
                                onChange={(e) => setDraft((p) => ({ ...p, activityFrom: e.target.value }))}
                                className={selectClass}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-sm text-gray-600">تا تاریخ</Label>
                            <Input
                                type="date"
                                value={draft.activityTo}
                                onChange={(e) => setDraft((p) => ({ ...p, activityTo: e.target.value }))}
                                className={selectClass}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {(["toman", "usd", "iqd"] as const).map((currency) => (
                            <div key={currency} className="space-y-2">
                                <Label className="text-sm text-gray-600">
                                    {currency === "toman" ? "تومان" : currency === "usd" ? "دلار" : "دینار"}
                                </Label>
                                <select
                                    value={draft[currency]}
                                    onChange={(e) =>
                                        setDraft((p) => ({
                                            ...p,
                                            [currency]: e.target.value as TradingFilters[typeof currency],
                                        }))
                                    }
                                    className={selectClass}
                                >
                                    {balanceOptions.map((item) => (
                                        <option key={item.value} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm text-gray-600">توضیحات</Label>
                        <select
                            value={draft.hasDescription}
                            onChange={(e) =>
                                setDraft((p) => ({
                                    ...p,
                                    hasDescription: e.target.value as TradingFilters["hasDescription"],
                                }))
                            }
                            className={selectClass + " w-full"}
                        >
                            <option value="all">همه</option>
                            <option value="yes">دارای توضیحات</option>
                            <option value="no">بدون توضیحات</option>
                        </select>
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleClear}
                            className="rounded-2xl px-5 cursor-pointer"
                        >
                            پاک کردن
                        </Button>
                        <Button
                            type="button"
                            onClick={handleApply}
                            className="rounded-2xl px-5 bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                        >
                            اعمال فیلتر
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}