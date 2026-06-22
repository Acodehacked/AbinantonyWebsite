"use client";

import React, { createContext, useContext, useState } from "react";

type Mode = "dev" | "art";
type ModeCtx = { mode: Mode; setMode: (m: Mode) => void };

const ModeContext = createContext<ModeCtx>({ mode: "dev", setMode: () => {} });

export function ModeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<Mode>("dev");
    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    );
}

export const useMode = () => useContext(ModeContext);
