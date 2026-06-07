"use client"
import React, { useState, useCallback, useMemo } from "react";
import type { ReactNode } from "react";
import { userMenuList } from "../helpers/userMenuList";

interface MenuPath {
  label: string;
  dropdown?: boolean;
  [key: string]: any; // for other potential properties
}

interface DropdownState {
  [label: string]: boolean;
}

export interface NavToggleContextValue {
  openNavDropdown: (label: string) => void;
  closeNavDropdown: (label: string) => void;
  toggleNavDropdown: (label: string) => void;
  closeAllNavDropdowns: () => void;
  dropdowns: DropdownState;
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  sidebarOpen: boolean;
}

const initialDropdownState: DropdownState = {};

userMenuList?.forEach((path: MenuPath) => {
  if (path.dropdown) {
    initialDropdownState[path.label] = false;
  }
});

export const Context = React.createContext<NavToggleContextValue>(
  {} as NavToggleContextValue
);

interface NavToggleProviderProps {
  children: ReactNode;
}

export const NavToggleProvider: React.FC<NavToggleProviderProps> = ({
  children,
}) => {
  const [dropdowns, setDropdowns] =
    useState<DropdownState>(initialDropdownState);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const openNavDropdown = useCallback((label: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [label]: true,
    }));
  }, []);

  const closeNavDropdown = useCallback((label: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [label]: false,
    }));
  }, []);

  const toggleNavDropdown = useCallback((label: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }, []);

  const closeAllNavDropdowns = useCallback(() => {
    setDropdowns(initialDropdownState);
  }, []);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), []);

  const useNavToggleValues = useMemo<NavToggleContextValue>(() => {
    return {
      openNavDropdown,
      closeNavDropdown,
      toggleNavDropdown,
      closeAllNavDropdowns,
      dropdowns,
      toggleSidebar,
      openSidebar,
      closeSidebar,
      sidebarOpen,
    };
  }, [
    openNavDropdown,
    closeNavDropdown,
    toggleNavDropdown,
    closeAllNavDropdowns,
    dropdowns,
    toggleSidebar,
    openSidebar,
    closeSidebar,
    sidebarOpen,
  ]);

  return (
    <Context.Provider value={useNavToggleValues}>{children}</Context.Provider>
  );
};
