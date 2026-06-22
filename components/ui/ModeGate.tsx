"use client";

import { AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import ArtModePlaceholder from "./ArtModePlaceholder";

export default function ModeGate({ children }: { children: React.ReactNode }) {
    const { mode } = useMode();

    return (
        <AnimatePresence mode="wait">
            {mode === "art" ? (
                <ArtModePlaceholder key="art" />
            ) : (
                <>{children}</>
            )}
        </AnimatePresence>
    );
}
