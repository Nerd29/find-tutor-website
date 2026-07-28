"use client"
import React from 'react';
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers = ({children}) => {
    return (
        <div>
            <NextThemesProvider attribute="class" defaultTheme="light" enableSystem></NextThemesProvider>
        </div>
    );
};

export default Providers;