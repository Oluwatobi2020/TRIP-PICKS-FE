"use client"
import React, { ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';

interface StoreProviderProps {
  children: ReactNode;
}

const SnackbarProviders = ({children}:StoreProviderProps) => {
  return (
    <SnackbarProvider>
      {children}
    </SnackbarProvider>
  )
}

export default SnackbarProviders
