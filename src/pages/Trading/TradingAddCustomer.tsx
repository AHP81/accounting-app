"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Plus from "@/icons/Plus.svg?react";
import { toast } from "sonner";

type Props = {
    onCreated?: () => void;
};

type CurrencyInputState = {
    usd: string;
    iqd: string;
    toman: string;
};

type FieldErrors = Partial<{
    name: string;
    phoneNumber: string;
    cardNumber: string;
    description: string;
    usd: string;
    iqd: string;
    toman: string;
}>;

const emptyCurrencyState: CurrencyInputState = {
    usd: "",
    iqd: "",
    toman: "",
};

function onlyDigits(value: string) {
    return value.replace(/\D/g, "");
}

function validatePhone(phone: string) {
    return /^09\d{9}$/.test(phone);
}

function validateCard(card: string) {
    return /^\d{16}$/.test(card);
}

function toNumber(value: string) {
    const cleaned = value.replace(/,/g, "").trim();
    if (!cleaned) return null;
    if (!/^\d+$/.test(cleaned)) return null;
    return Number(cleaned);
}

async function readJsonResponse(res: Response) {
    try {
        return await res.json();
    } catch {
        return null;
    }
}

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
    const [errors, setErrors] = useState<FieldErrors>({});

    const currencyFields = useMemo(
        () => [
            { key: "usd" as const, label: "دلار" },
            { key: "iqd" as const, label: "دینار" },
            { key: "toman" as const, label: "تومان" },
        ],
        []
    );

    const resetForm = () => {
        setForm({ name: "", phoneNumber: "", cardNumber: "", description: "" });
        setPositive(emptyCurrencyState);
        setNegative(emptyCurrencyState);
        setErrors({});
    };

    const handleClose = (nextOpen: boolean) => {
        if (!nextOpen && !submitting) {
            setOpen(false);
            resetForm();
        } else {
            setOpen(nextOpen);
        }
    };

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});

        const nextErrors: FieldErrors = {};
        const name = form.name.trim();
        const phoneNumber = form.phoneNumber.trim();
        const cardNumber = form.cardNumber.trim();
        const description = form.description.trim();

        if (!name) {
            nextErrors.name = "نام و نام خانوادگی الزامی است";
        }

        if (phoneNumber && !validatePhone(phoneNumber)) {
            nextErrors.phoneNumber = "شماره موبایل باید با 09 شروع شود و 11 رقم باشد";
        }

        if (cardNumber && !validateCard(cardNumber)) {
            nextErrors.cardNumber = "شماره کارت باید 16 رقم باشد";
        }

        const posUsd = positive.usd ? toNumber(positive.usd) : null;
        const posIqd = positive.iqd ? toNumber(positive.iqd) : null;
        const posToman = positive.toman ? toNumber(positive.toman) : null;

        const negUsd = negative.usd ? toNumber(negative.usd) : null;
        const negIqd = negative.iqd ? toNumber(negative.iqd) : null;
        const negToman = negative.toman ? toNumber(negative.toman) : null;

        if (positive.usd && posUsd === null) nextErrors.usd = "مبلغ دلار معتبر نیست";
        if (positive.iqd && posIqd === null) nextErrors.iqd = "مبلغ دینار معتبر نیست";
        if (positive.toman && posToman === null) nextErrors.toman = "مبلغ تومان معتبر نیست";

        if (negative.usd && negUsd === null) nextErrors.usd = "مبلغ دلار معتبر نیست";
        if (negative.iqd && negIqd === null) nextErrors.iqd = "مبلغ دینار معتبر نیست";
        if (negative.toman && negToman === null) nextErrors.toman = "مبلغ تومان معتبر نیست";

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            toast.error(Object.values(nextErrors)[0]);
            return;
        }

        setSubmitting(true);

        try {
            const customerRes = await fetch("http://localhost:3000/api/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    phoneNumber: phoneNumber || undefined,
                    cardNumber: cardNumber || undefined,
                    description: description || undefined,
                }),
            });

            const customerJson = await readJsonResponse(customerRes);

            if (!customerRes.ok) {
                const message = customerJson?.error || "خطا در ایجاد مشتری";
                toast.error(message);
                return;
            }

            const customerId =
                customerJson?.id ??
                customerJson?.customerId ??
                customerJson?.data?.id ??
                customerJson?.data?.customerId;

            if (!customerId) {
                toast.error("شناسه مشتری از پاسخ سرور برنگشت");
                return;
            }

            const transactions = [
                ...(positive.usd ? [{ currency: "USD", amount: Math.abs(posUsd ?? 0) }] : []),
                ...(positive.iqd ? [{ currency: "IQD", amount: Math.abs(posIqd ?? 0) }] : []),
                ...(positive.toman ? [{ currency: "TOMAN", amount: Math.abs(posToman ?? 0) }] : []),
                ...(negative.usd ? [{ currency: "USD", amount: -Math.abs(negUsd ?? 0) }] : []),
                ...(negative.iqd ? [{ currency: "IQD", amount: -Math.abs(negIqd ?? 0) }] : []),
                ...(negative.toman ? [{ currency: "TOMAN", amount: -Math.abs(negToman ?? 0) }] : []),
            ];

            for (const tx of transactions) {
                const txRes = await fetch("http://localhost:3000/api/transactions", {
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

                const txJson = await readJsonResponse(txRes);

                if (!txRes.ok) {
                    toast.error(txJson?.error || "خطا در ایجاد تراکنش");
                    return;
                }
            }

            toast.success("مشتری با موفقیت ثبت شد");
            setOpen(false);
            resetForm();
            onCreated?.();
        } catch {
            toast.error("ارتباط با سرور برقرار نشد");
        } finally {
            setSubmitting(false);
        }
    };

    const inputClass =
        "h-12 lg:h-14 rounded-2xl bg-white text-base px-4 border border-gray-200 focus-visible:ring-2 focus-visible:ring-gray-300";

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
                            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                            placeholder="نام و نام خانوادگی"
                            className={inputClass}
                            dir="rtl"
                        />
                        {errors.name && <p className="text-sm text-red-500 pr-1">{errors.name}</p>}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <Input
                                    value={form.phoneNumber}
                                    onChange={(e) =>
                                        setForm((p) => ({ ...p, phoneNumber: onlyDigits(e.target.value) }))
                                    }
                                    placeholder="شماره موبایل"
                                    className={inputClass}
                                    dir="ltr"
                                    inputMode="numeric"
                                    maxLength={11}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-sm text-red-500 pr-1 mt-1">{errors.phoneNumber}</p>
                                )}
                            </div>

                            <div>
                                <Input
                                    value={form.cardNumber}
                                    onChange={(e) =>
                                        setForm((p) => ({ ...p, cardNumber: onlyDigits(e.target.value) }))
                                    }
                                    placeholder="شماره کارت"
                                    className={inputClass}
                                    dir="ltr"
                                    inputMode="numeric"
                                    maxLength={16}
                                />
                                {errors.cardNumber && (
                                    <p className="text-sm text-red-500 pr-1 mt-1">{errors.cardNumber}</p>
                                )}
                            </div>
                        </div>

                        <Textarea
                            value={form.description}
                            onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                            placeholder="توضیحات"
                            className="min-h-[120px] rounded-2xl bg-white text-base px-4 py-3 resize-none border border-gray-200 focus-visible:ring-2 focus-visible:ring-gray-300"
                            dir="rtl"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {currencyFields.map((item) => (
                                <Input
                                    key={`pos-${item.key}`}
                                    value={positive[item.key]}
                                    onChange={(e) =>
                                        setPositive((p) => ({ ...p, [item.key]: onlyDigits(e.target.value) }))
                                    }
                                    placeholder={`${item.label} مثبت`}
                                    className={inputClass}
                                    dir="ltr"
                                    inputMode="numeric"
                                />
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {currencyFields.map((item) => (
                                <Input
                                    key={`neg-${item.key}`}
                                    value={negative[item.key]}
                                    onChange={(e) =>
                                        setNegative((p) => ({ ...p, [item.key]: onlyDigits(e.target.value) }))
                                    }
                                    placeholder={`${item.label} منفی`}
                                    className={inputClass}
                                    dir="ltr"
                                    inputMode="numeric"
                                />
                            ))}
                        </div>

                        {(errors.usd || errors.iqd || errors.toman) && (
                            <p className="text-sm text-red-500 pr-1">
                                {errors.usd || errors.iqd || errors.toman}
                            </p>
                        )}

                        <div className="flex justify-end gap-3 pt-2">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handleClose(false)}
                                className="rounded-2xl px-5 cursor-pointer"
                                disabled={submitting}
                            >
                                انصراف
                            </Button>
                            <Button
                                type="submit"
                                className="rounded-2xl px-5 bg-green-500 hover:bg-green-600 text-white cursor-pointer disabled:cursor-not-allowed"
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