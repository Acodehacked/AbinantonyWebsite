// app/page.tsx or components/SmoothScrollWrapper.tsx
'use client';

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollWrapperProps {
    children: React.ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.6,              // 👈 BIG FIX
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
            syncTouch: false,
            wheelMultiplier: 1.2,       // 👈 makes wheel feel responsive
            touchMultiplier: 1.5,
        });

        let rafId: number;

        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);
    return <>{children}</>;
};

export default SmoothScrollWrapper;