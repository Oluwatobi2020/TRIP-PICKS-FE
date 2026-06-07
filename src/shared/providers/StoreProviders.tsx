"use client"
import { Provider } from "react-redux";
import { store } from "@/lib/redux-store/store";
import { useRef, ReactNode } from "react";
import type { Store } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = useRef<Store | null>(null);

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}