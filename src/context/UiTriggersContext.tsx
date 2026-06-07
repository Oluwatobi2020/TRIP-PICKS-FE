"use client"
import React, { useState, useMemo } from "react";
import type { ReactNode } from "react";

export interface UiTriggersContextValue {
  showLoader: boolean;
  showModal: boolean;
  toggleLoader: () => void;
  toggleModal: () => void;
  displayLoader: () => void;
  hideLoader: () => void;
  hideModal: () => void;
  displayModal: () => void;
}

export const UiTriggersContext = React.createContext<UiTriggersContextValue>(
  {} as UiTriggersContextValue
);

interface UiTriggersProviderProps {
  children: ReactNode;
}

export const UiTriggersProvider: React.FC<UiTriggersProviderProps> = ({
  children,
}) => {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = useMemo(() => () => setShowModal((prev) => !prev), []);

  const toggleLoader = useMemo(() => () => setShowLoader((prev) => !prev), []);

  const hideLoader = useMemo(() => () => setShowLoader(false), []);
  const displayLoader = useMemo(() => () => setShowLoader(true), []);

  const hideModal = useMemo(() => () => setShowModal(false), []);
  const displayModal = useMemo(() => () => setShowModal(true), []);

  const uiTriggersValue = useMemo<UiTriggersContextValue>(() => {
    return {
      showLoader,
      showModal,
      toggleLoader,
      displayLoader,
      hideLoader,
      hideModal,
      displayModal,
      toggleModal,
    };
  }, [
    showLoader,
    showModal,
    toggleLoader,
    displayLoader,
    hideLoader,
    hideModal,
    displayModal,
    toggleModal,
  ]);

  return (
    <UiTriggersContext.Provider value={uiTriggersValue}>
      {children}
    </UiTriggersContext.Provider>
  );
};
