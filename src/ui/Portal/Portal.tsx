import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type PortalProps = {
    children: React.ReactNode;
};

export default function Portal({ children }: PortalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const portalRoot = document.getElementById("portal-root");

    if (!mounted || !portalRoot) return null;

    return createPortal(children, portalRoot);
}