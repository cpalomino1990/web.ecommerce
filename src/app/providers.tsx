"use client";

import * as React from "react";
import { HeroUIProvider } from "@heroui/react";


export interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    );
}
