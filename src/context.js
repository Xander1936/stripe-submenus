import React, { useState, useContext } from 'react'
import sublinks from './data'

// AppContext() -> Parent -> method 
const AppContext = React.createContext();

// AppProvider() Function with its children props (States and functions)
export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    // OpenSidebar() Function
    const OpenSidebar = () => {
        setIsSidebarOpen(true);
    }
    // CloseSidebar() Function
    const CloseSidebar = () => {
        setIsSidebarOpen(false);
    }
    // OpenSubmenu() Function
    const OpenSubmenu = () => {
        setIsSubmenuOpen(true);
    }
    // CloseSubmenu() Function
    const CloseSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider
            value={{
                isSubmenuOpen,
                isSidebarOpen,
                OpenSubmenu,
                OpenSidebar,
                CloseSubmenu,
                CloseSidebar

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

// Custom Hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

// <></>
