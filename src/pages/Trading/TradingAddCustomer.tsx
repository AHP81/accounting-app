"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Plus from "@/icons/Plus.svg?react";

type Props = {
    onCreated?: () => void;
};

type CurrencyInputState = {
    usd: string;
    iqd: string;
    toman: string;
};

const emptyCurrencyState: CurrencyInputState = {
    usd: "",
    iqd: "",
    toman: "",
};

export default function TradingAddCustomer({ onCreated }: Props) {
    const [open, setOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const [form, setForm] = useState({
        name: "",
        phoneNumber: "",
        cardNumber: "",
        description: "",
    });

    const [positive, setPositive] = useState<CurrencyInputState>(emptyCurrencyState);
    const [negative, setNegative] = useState<CurrencyInputState>(emptyCurrencyState);

    const resetForm = () => {
        setForm({
            name: "",
            phoneNumber: "",
            cardNumber: "",
            description: "",
        });
        setPositive(emptyCurrencyState);
        setNegative(emptyCurrencyState);
    };

    const handleClose = (nextOpen: boolean) => {
        if (!nextOpen && !submitting) {
            setOpen(false);
            resetForm();
        } else {
            setOpen(nextOpen);
        }
    };

    const setValue = (
        section: "form" | "positive" | "negative",
        key: string,
        value: string
    ) => {
        if (section === "form") {
            setForm((prev) => ({ ...prev, [key]: value }));
            return;
        }

        if (section === "positive") {
            setPositive((prev) => ({ ...prev, [key]: value }));
            return;
        }

        setNegative((prev) => ({ ...prev, [key]: value }));
    };

    const currencyFields = [
        { key: "usd", label: "دلار" },
        { key: "iqd", label: "دینار" },
        { key: "toman", label: "تومان" },
    ] as const;

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const customerRes = await fetch("http://localhost:3000/api/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.name.trim(),
                    phoneNumber: form.phoneNumber.trim(),
                    cardNumber: form.cardNumber.trim(),
                    description: form.description.trim(),
                }),
            });

            if (!customerRes.ok) {
                throw new Error("خطا در ایجاد مشتری");
            }

            const customerJson = await customerRes.json();
            const customerId =
                customerJson?.id ??
                customerJson?.customerId ??
                customerJson?.data?.id ??
                customerJson?.data?.customerId;

            if (!customerId) {
                throw new Error("شناسه مشتری از پاسخ API برنگشت");
            }

            const transactions = [
                ...currencyFields.map(({ key }) => {
                    const raw = Number(positive[key]) || 0;
                    return {
                        currency: key.toUpperCase(),
                        amount: Math.abs(raw),
                    };
                }),
                ...currencyFields.map(({ key }) => {
                    const raw = Number(negative[key]) || 0;
                    return {
                        currency: key.toUpperCase(),
                        amount: -Math.abs(raw),
                    };
                }),
            ].filter((item) => item.amount !== 0);

            await Promise.all(
                transactions.map(async (tx) => {
                    const res = await fetch("http://localhost:3000/api/transactions", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            customerId,
                            currency: tx.currency,
                            amount: tx.amount,
                            note: "ثبت اولیه مشتری",
                        }),
                    });

                    if (!res.ok) {
                        throw new Error("خطا در ایجاد تراکنش");
                    }
                })
            );

            setOpen(false);
            resetForm();
            onCreated?.();
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <div dir="rtl" className="flex gap-3 lg:gap-4 flex-wrap">
                <Button
                    onClick={() => setOpen(true)}
                    variant="outline"
                    className="py-3 px-5 lg:py-5 lg:px-7 bg-transparent border-green-400 text-green-500 hover:bg-green-50 hover:text-green-600 cursor-pointer rounded-lg text-sm lg:text-base gap-2"
                >
                    <span>افزودن مشتری</span>
                    <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
                </Button>

                <Button
                    variant="outline"
                    className="py-3 px-5 lg:py-5 lg:px-7 bg-transparent border-purple-400 text-purple-500 hover:bg-purple-50 hover:text-purple-600 cursor-pointer rounded-lg text-sm lg:text-base gap-2"
                >
                    <span>افزودن حساب</span>
                    <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
                </Button>
            </div>

            <Dialog open={open} onOpenChange={handleClose}>
                <DialogContent className="sm:max-w-4xl rounded-3xl bg-gray-50 p-4 lg:p-6 border-0">
                    <DialogTitle className="sr-only">افزودن مشتری</DialogTitle>

                    <form onSubmit={submit} className="space-y-4">
                        <Input
                            value={form.name}
                            onChange={(e) => setValue("form", "name", e.target.value)}
                            placeholder="نام و نام خانوادگی"
                            className="h-12 lg:h-14 rounded-2xl bg-white text-base px-4"
                            dir="rtl"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <Input
                                value={form.phoneNumber}
                                onChange={(e) => setValue("form", "phoneNumber", e.target.value)}
                                placeholder="شماره موبایل"
                                className="h-12 lg:h-14 rounded-2xl bg-white text-base px-4"
                                dir="rtl"
                            />
                            <Input
                                value={form.cardNumber}
                                onChange={(e) => setValue("form", "cardNumber", e.target.value)}
                                placeholder="شماره کارت"
                                className="h-12 lg:h-14 rounded-2xl bg-white text-base px-4"
                                dir="ltr"
                                inputMode="numeric"
                            />
                        </div>

                        <Textarea
                            value={form.description}
                            onChange={(e) => setValue("form", "description", e.target.value)}
                            placeholder="توضیحات"
                            className="min-h-[120px] rounded-2xl bg-white text-base px-4 py-3 resize-none"
                            dir="rtl"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {currencyFields.map((item) => (
                                <Input
                                    key={item.key}
                                    value={positive[item.key]}
                                    onChange={(e) => setValue("positive", item.key, e.target.value)}
                                    placeholder={`${item.label} مثبت`}
                                    className="h-12 lg:h-14 rounded-2xl bg-white text-base px-4"
                                    dir="ltr"
                                    inputMode="numeric"
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {currencyFields.map((item) => (
                                <Input
                                    key={item.key}
                                    value={negative[item.key]}
                                    onChange={(e) => setValue("negative", item.key, e.target.value)}
                                    placeholder={`${item.label} منفی`}
                                    className="h-12 lg:h-14 rounded-2xl bg-white text-base px-4"
                                    dir="ltr"
                                    inputMode="numeric"
                                />
                            ))}
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handleClose(false)}
                                className="rounded-2xl px-5"
                                disabled={submitting}
                            >
                                انصراف
                            </Button>
                            <Button
                                type="submit"
                                className="rounded-2xl px-5 bg-green-500 hover:bg-green-600 text-white"
                                disabled={submitting}
                            >
                                {submitting ? "در حال ذخیره..." : "ثبت مشتری"}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}