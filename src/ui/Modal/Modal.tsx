import { useEffect, useRef, useState } from "react";
import Portal from "@/ui/Portal/Portal.tsx";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
    const [mounted, setMounted] = useState(open);
    const [visible, setVisible] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);

    // sync open → mount/unmount with animation
    useEffect(() => {
        if (open) {
            setMounted(true);

            // مهم: اجازه بده DOM mount بشه
            setTimeout(() => {
                setVisible(true);
            }, 0);
        } else {
            setVisible(false);

            const timer = setTimeout(() => {
                setMounted(false);
            }, 180);

            return () => clearTimeout(timer);
        }
    }, [open]);

    // ESC close + scroll lock
    useEffect(() => {
        if (!mounted) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKey);

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [mounted, onClose]);

    // focus trap
    useEffect(() => {
        if (!mounted) return;

        const modal = modalRef.current;
        if (!modal) return;

        const focusable = modal.querySelectorAll<HTMLElement>(
            'button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
        );

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        first?.focus();

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;

            if (focusable.length === 0) return;

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last?.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first?.focus();
                }
            }
        };

        window.addEventListener("keydown", handleTab);

        return () => window.removeEventListener("keydown", handleTab);
    }, [mounted]);

    if (!mounted) return null;

    return (
        <Portal>
            {/* BACKDROP */}
            <div
                onClick={onClose}
                className={`
          fixed inset-0 z-50 flex items-center justify-center
          transition-all duration-200
          ${visible ? "bg-black/50" : "bg-black/0"}
        `}
            >
                {/* MODAL */}
                <div
                    ref={modalRef}
                    onClick={(e) => e.stopPropagation()}
                    className={`
            w-[420px] rounded-xl bg-white p-4 shadow-xl
            transition-all duration-200
            ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"}
          `}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
}