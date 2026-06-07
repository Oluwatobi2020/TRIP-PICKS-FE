"use client"
import { useContext } from "react"
import type {UiTriggersContextValue} from "../context/UiTriggersContext"
import { UiTriggersContext } from "../context/UiTriggersContext";

export const useModal = () => {
  const context = useContext(UiTriggersContext);
  
  if (!context) {
    throw new Error('useModal must be used within a UiTriggersProvider');
  }
  const {displayModal, hideModal, toggleModal, showModal}: UiTriggersContextValue = useContext(UiTriggersContext)
  return {displayModal, hideModal, toggleModal, showModal}
}