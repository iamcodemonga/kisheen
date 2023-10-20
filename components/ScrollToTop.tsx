"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
    const pathname = usePathname()

    useEffect(() => {
        const handleRouteChange = () => {
            window.scrollTo(0, 0); // Scroll to the top of the page on route change
        };
        handleRouteChange();
    }, [pathname]);

    return null;
}
