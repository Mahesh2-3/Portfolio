
"use client"
import { createContext, useContext, useState } from "react";

// Create a new context
const GlobalContext = createContext();

// Create a provider component
export function GlobalProvider({ children }) {
    // Make presentSiteName a state variable
    const [presentSiteName, setPresentSiteName] = useState("aboutme");

    return (
        <GlobalContext.Provider value={{ presentSiteName, setPresentSiteName }}>
            {children}
        </GlobalContext.Provider>
    );
}

// Custom hook to use the global variable and function
export function useGlobal() {
    return useContext(GlobalContext);
}
