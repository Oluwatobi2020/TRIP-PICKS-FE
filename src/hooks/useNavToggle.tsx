"use client"
import { useContext } from "react";
import {Context as NavToggleContext} from "../context/NavToggleContext"
import type {NavToggleContextValue} from "../context/NavToggleContext"

export const useNavToggle = (): NavToggleContextValue => useContext(NavToggleContext)