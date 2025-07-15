"use client"

import { createContext, useState, useContext } from "react"

interface SidebarProviderType {
    isSidebarOpen: boolean
    toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarProviderType | undefined>(undefined)

interface SidebarProviderProps {
    children: React.ReactNode
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => setIsSidebarOpen(prev => !prev)


    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }
        }>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => {
    const context = useContext(SidebarContext)

    if (context === undefined) {
        throw new Error("usesidebar must be used with in a SidebarProvider ")
    }
    return context
}