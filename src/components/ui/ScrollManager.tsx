"use client";

import { useEffect } from "react";

export function ScrollManager() {
    useEffect(() => {
        // Force scroll to top on mount (refresh/load)
        window.scrollTo(0, 0);

        // Optional: For Next.js router events
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    return null;
}
