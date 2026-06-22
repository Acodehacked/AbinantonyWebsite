"use client";

import React, { createContext, useContext, useState } from "react";

type IntroCtx = { introDone: boolean; setIntroDone: () => void };

const IntroContext = createContext<IntroCtx>({ introDone: false, setIntroDone: () => {} });

export function IntroProvider({ children }: { children: React.ReactNode }) {
    const [introDone, setDone] = useState(false);
    return (
        <IntroContext.Provider value={{ introDone, setIntroDone: () => setDone(true) }}>
            {children}
        </IntroContext.Provider>
    );
}

export const useIntro = () => useContext(IntroContext);
