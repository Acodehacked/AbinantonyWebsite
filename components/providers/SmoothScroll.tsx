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
            duration: 1.05,
            easing: (t) => 1 - Math.pow(1 - t, 4),
            smoothWheel: true,
            syncTouch: false,
            wheelMultiplier: 0.95,
            touchMultiplier: 1.1,
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